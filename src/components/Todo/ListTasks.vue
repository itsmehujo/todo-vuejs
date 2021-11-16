<template>
    <div id="listTasks">
        <v-list
                flat
        >

            <v-list-item-group
                    multiple
            >
                <draggable
                v-model="tasks"
                handle=".handle"
                >
                    <Task
                    v-for="(task, index) in tasks" :key="index"
                    :task="task"/>
                </draggable>
            </v-list-item-group>
        </v-list>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
  export default {
    name: "ListTasks",
    components: {
      Task : require("@/components/Todo/Task").default,
      draggable
    },
    computed: {
      tasks: {
          get () {
            return this.$store.getters.tasksFiltered
          },
          set (value) {
            this.$store.dispatch('setTasks', value)
          }
      }
    }
  }
</script>
