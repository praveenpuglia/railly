<template>
  <v-app class="railly-app">
    <v-navigation-drawer persistent v-model="drawer" enable-resize-watcher fixed app>
      <v-list>
        <v-list-tile :to="item.path" v-for="(item, i) in items" :key="i">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app dark color="primary">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{title}} &mdash; {{$store.getters.page}}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <transition name="slide">
        <router-view/>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      items: [
        {
          icon: "search",
          path: "pnr",
          title: "PNR Status"
        },
        {
          icon: "train",
          path: "train-details",
          title: "Train Details"
        }
      ],
      title: "Railly",
      drawer: true
    };
  }
};
</script>
<style>
.railly-app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.slide-enter-active {
  transition: all 0.3s ease;
}
.slide-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
}
</style>
