<template>
    <div>
        <v-menu
                bottom
                left
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                        color="primary"
                >
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                        @click="handleClick(i)"
                >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <DialogDelete v-if="dialogs.delete" :task ="task" @close="dialogs.delete = false"/>
        <DialogEdit v-if="dialogs.edit" :task ="task" @close="dialogs.edit = false"/>
        <DialogDueDate v-if="dialogs.dueDate" :task ="task" @close="dialogs.dueDate = false"/>
    </div>
</template>

<script>
  export default {
    name: "TaskMenu",
    components: {
      DialogDelete : require('@/components/Todo/Dialogs/DialogDelete').default,
      DialogEdit : require('@/components/Todo/Dialogs/DialogEdit').default,
      DialogDueDate : require('@/components/Todo/Dialogs/DialogDueDate').default
    },
    props: {
      task: Object
    },
    data () {
      return {
        dialogs:  {
          delete : false,
          edit : false,
          dueDate : false
        },
        items: [
          {
            title: 'Edit',
            icon: 'mdi-pencil',
            click (item) {
              item.dialogs.edit = true
            }
          },
          {
            title: 'Due Date',
            icon: 'mdi-calendar',
            click (item) {
              item.dialogs.dueDate = true
            }
          },
          {
            title: 'Delete',
            icon: 'mdi-delete',
            click (item) {
              item.dialogs.delete = true
            }
          },
          {
            title: 'Sort',
            icon: 'mdi-drag-horizontal-variant',
            click (item) {
              item.$store.commit('toggleSorting')
            }
          },
        ]
      }
    },
    methods: {
      handleClick (index) {
        this.items[index].click(this)
      }
    }
  }
</script>

<style scoped>

</style>