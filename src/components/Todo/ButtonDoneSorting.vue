<template>
    <v-btn
    @click="$store.commit('toggleSorting')"
    color="primary"
    class="buttonDoneSorting"
    >
        Done Sorting
    </v-btn>
</template>

<script>
  export default {
    name: "ButtonDoneSorting"
  }
</script>

<style lang="scss">
    .buttonDoneSorting {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
    }
</style>