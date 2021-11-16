<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ $store.state.appTitle }}
          </v-list-item-title>
          <v-list-item-subtitle>
            Copyright:
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            50% Udemy 50% Hugo Mortreux
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
              dense
              nav
      >
        <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
            color="yellow"
            elevation="4"
            outlined
            app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Todo List</v-toolbar-title>
      <Search/>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <Snackbar/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Todo', icon: 'mdi-format-list-checks', to: '/'},
          { title: 'About', icon: 'mdi-help-box', to: '/about' }
        ]
      }
    },
    components: {
      Snackbar : require('@/components/global/Snackbar').default,
      Search : require('@/components/Tools/Search').default
    },
    mounted () {
      this.$store.dispatch('getTasks')
    }
  }
</script>

<style lang="scss">

  .v-toolbar__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>