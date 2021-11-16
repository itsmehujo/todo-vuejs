<template>
    <v-dialog
            ref="dialog"
            :value="true"
            persistent
            width="290px"
    >
        <v-date-picker
                v-model="date"
                scrollable
                :min="today"
        >
            <v-spacer></v-spacer>
            <v-btn
                    text
                    color="primary"
                    @click="$emit('close')"
            >
                Annuler
            </v-btn>
            <v-btn
                    text
                    color="primary"
                    @click="saveTask"
            >
                Enregistrer
            </v-btn>
        </v-date-picker>
    </v-dialog>
</template>

<script>
  import { formatISO } from 'date-fns'
  export default {
    name: "DialogDueDate",
    data () {
      return {
        date: null,
        today: null
      }
    },
    methods: {
      saveTask () {
        let payload = {
          task: this.task,
          dueDate: this.date
        }
        this.$store.dispatch('taskDueDate', payload)
        this.$emit('close')
      }
    },
    props: {
      task: Object
    },
    mounted () {
      if(this.task.dueDate) {
        this.date = this.task.dueDate
      }
      this.today = formatISO(new Date(), { representation: 'date' })
    }
  }
</script>
