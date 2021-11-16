<template>
    <div id="fieldAddTask">
        <v-text-field
                v-model="newTaskTitle"
                @keyup.enter="addTask"
                class="pa-3"
                outlined
                label="Ajouter une nouvelle tâche"
                hide-details
                clearable
        >
            <template v-slot:append>
                    <v-icon
                    @click="addTask"
                    :disabled="invalidField">
                        mdi-plus
                    </v-icon>
            </template>
        </v-text-field>
    </div>
</template>

<script>
  export default {
    name: "FieldAddTask",
    data () {
      return {
        newTaskTitle: ''
      }
    },
    methods: {
        addTask () {
          if(!this.invalidField) {
              this.$store.dispatch('addTask', this.newTaskTitle)
              this.newTaskTitle = ''
          }
        }
    },
    computed: {
      invalidField() {
        return !this.newTaskTitle

      }
    }
  }
</script>

<style scoped>

</style>