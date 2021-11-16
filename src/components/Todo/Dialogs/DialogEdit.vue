<template>
    <v-dialog
            :value="true"
            persistent
            max-width="290"
    >
        <v-card>
            <v-card-title class="text-h5">
                Editer la tâche
            </v-card-title>
            <v-card-text>Editer le titre de la tâche
            <v-text-field
            v-model="taskTitle"
            @keyup.enter="editTask(task)"/>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                        text
                        @click="$emit('close')"
                >
                    Annuler
                </v-btn>
                <v-btn
                        color="red"
                        text
                        @click="editTask(task)"
                        :disabled="taskTitleInvalid"
                >
                    Enregistrer
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
  export default {
    name: 'DialogEdit',
    props: {
      task: Object
    },
    data () {
      return {
        taskTitle: null
      }
    },
    mounted () {
      this.taskTitle = this.task.title
    },
    computed: {
      taskTitleInvalid () {
        return !this.taskTitle || this.taskTitle === this.task.title
      }
    },
    methods: {
      editTask (task) {
        if(!this.taskTitleInvalid) {
            this.$store.dispatch('editTask', {task: task, title: this.taskTitle}) && this.$emit('close')
        }
      }
    }
  }
</script>
