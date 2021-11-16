<template>
  <div id="Todo">
    <FieldAddTask/>
    <ListTasks
      v-if="$store.state.tasks.length"/>
    <NoTask v-else/>
    <ButtonDoneSorting v-if="$store.state.sorting"/>
  </div>
</template>

<script>
  export default {
    name: 'Todo',
    components: {
      NoTask : require("@/components/Todo/NoTask").default,
      FieldAddTask : require("@/components/Todo/FieldAddTask").default,
      ListTasks : require("@/components/Todo/ListTasks").default,
      ButtonDoneSorting : require('@/components/Todo/ButtonDoneSorting').default
    }
  }
</script>

