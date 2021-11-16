<template>
    <v-text-field
            :value="$store.state.search"
            @input="$store.commit('setSearch', $event)"
            @focus="searchClosed = false"
            @blur="searchClosed = true"
            class="pl-6 expanding-search"
            :class="{ 'closed': searchClosed && !$store.state.search}"
            placeholder="Search"
            outlined
            dense
            clearable
            prepend-inner-icon="mdi-magnify"
            hide-details
    ></v-text-field>
</template>

<script>
  export default {
    name: "Search",
    props: {
      show: Boolean
    },
    data () {
      return {
        searchClosed: true
      }
    }
  }
</script>

<style lang="scss">
    .expanding-search {
        transition: max-width ease 0.2s;
        .v-input__slot {
            cursor: pointer !important;
        }
        &.closed {
            max-width: 70px;
            transition: max-width ease 0.2s;
        }
    }

</style>