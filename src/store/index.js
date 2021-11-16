import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'
let db = new Localbase('db')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
      tasks: [],
    snackbar: {
        display: false,
        text: "Hello I'm a snackbar"
    },
    search: null,
    sorting: false
  },
  mutations: {
    // *************** SEARCH ****************
    setSearch(state, payload) {
      state.search = payload
    },
    // *************** SEARCH ****************
    // *************** TODO_PAGE ****************
    addTask (state, payload) {
      state.tasks.push(payload)
    },
    doneTask (state, payload) {
      let task = state.tasks.filter(thisTask => thisTask === payload)[0]
      task.done = !task.done
    },
    deleteTask (state, payload) {
      state.tasks = state.tasks.filter(thisTask => thisTask !== payload)
    },
    editTask (state, payload) {
      let task = state.tasks.filter(thisTask => thisTask === payload.task)[0]
      task.title = payload.title
    },
    taskDueDate (state, payload) {
      let task = state.tasks.filter(thisTask => thisTask === payload.task)[0]
      task.dueDate = payload.dueDate
    },
    // *************** TODO_PAGE ****************
    // *************** SNACKBAR ****************
    displaySnackbar (state, payload) {
      state.snackbar.text = payload
      state.snackbar.display = !state.snackbar.display
      setTimeout( () => {state.snackbar.display = !state.snackbar.display}, 1500 )
    },
    // *************** SNACKBAR ****************
    // *************** SORTING ****************
    toggleSorting (state) {
      state.sorting = !state.sorting
    },
    setTasks (state, payload) {
      state.tasks = payload
    },
    // *************** SORTING ****************
  },
  actions: {
    addTask ({ commit }, payload) {
      let newTask = {
        id: Date.now(),
        title: payload,
        done: false,
        dueDate: null
      }
      db.collection('tasks').add(newTask).then(() => {
        commit('addTask', newTask)
        commit('displaySnackbar', 'Task Added !')
      })
    },
    doneTask ( {commit}, payload ) {
      db.collection('tasks').doc({id: payload.id}).update({
        done: !payload.done
      }).then( () =>{
        commit('doneTask', payload)
      })
    },
    deleteTask ({ commit }, payload) {
      db.collection('tasks').doc({id: payload.id}).delete().then(() => {
        commit('deleteTask', payload)
        commit('displaySnackbar', 'Task Deleted !')
      })
    },
    editTask ( {commit}, payload ) {
      db.collection('tasks').doc({id: payload.task.id}).update({
        title: payload.title
      }).then( () =>{
        commit('editTask', payload)
        commit('displaySnackbar', 'Task Updated !')
      })
    },
    taskDueDate ( {commit}, payload ) {
      db.collection('tasks').doc({id: payload.task.id}).update({
        dueDate: payload.dueDate
      }).then(() => {
        commit('taskDueDate', payload)
        commit('displaySnackbar', 'Task Updated !')
      })
    }
    ,
    getTasks ( {commit} ) {
      db.collection('tasks').get().then(tasks => {
        commit('setTasks', tasks)
      })
    },
    setTasks ( {commit}, payload) {
      db.collection('tasks').set(payload).then(() => {
        commit('setTasks', payload)
      })
    }
  },
  getters: {
    tasksFiltered (state) {
      if(!state.search) {
        return state.tasks
      }
      return state.tasks.filter(task => {
        return task.title.includes(state.search)
      })
    }
  },
  modules: {
  }
})
