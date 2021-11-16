<template>
    <v-dialog
            :value="true"
            persistent
            max-width="290"
    >
        <v-card>
            <v-card-title class="text-h5">
                Supprimer la tâche ?
            </v-card-title>
            <v-card-text>Êtes-vous sûr(e) de vouloir supprimer cette tâche ?</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                        text
                        @click="$emit('close')"
                >
                    Non
                </v-btn>
                <v-btn
                        color="red"
                        text
                        @click="$store.dispatch('deleteTask', task) && $emit('close')"
                >
                    Oui
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
  export default {
    name: 'DialogDelete',
    props: {
      task: Object
    }
  }
</script>
