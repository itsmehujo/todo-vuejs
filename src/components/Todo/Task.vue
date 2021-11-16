<template>
    <div class="task">
        <v-list-item
                @click="$store.dispatch('doneTask', task)"
                :class="{ 'amber lighten-4' : task.done }"
                :ripple="false"
                class="white"
        >
            <template v-slot:default>
                <v-list-item-action>
                    <v-checkbox
                            :input-value="task.done"
                            color="primary"
                    ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                    <v-list-item-title
                            :class="{ 'text-decoration-line-through' : task.done }">{{ task.title }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action v-if="task.dueDate">
                    <v-list-item-action-text>
                        <v-icon small>mdi-calendar</v-icon>
                        {{ task.dueDate | niceDate}}
                    </v-list-item-action-text>
                </v-list-item-action>
                <v-list-item-action
                        v-if="!$store.state.sorting"
                >
                    <TaskMenu :task="task"/>
                </v-list-item-action>
                <v-list-item-action
                v-if="$store.state.sorting">
                    <v-btn
                            color="primary"
                            icon
                            class="handle"
                    >
                        <v-icon>mdi-drag-horizontal-variant</v-icon>
                    </v-btn>
                </v-list-item-action>
            </template>
            <v-divider></v-divider>
        </v-list-item>
    </div>
</template>

<script>
    import { format } from 'date-fns'
  export default {
    name: "Task",
    components: {
      TaskMenu : require('@/components/Todo/TaskMenu').default
    },
    props: {
      task: Object
    },
    filters: {
      niceDate(value) {
        return format(new Date(value), 'd MMM')
      }
    }
  }
</script>

<style lang="scss">
    .sortable-ghost {
        opacity: 0;
    }
    .sortable-chosen     {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
</style>