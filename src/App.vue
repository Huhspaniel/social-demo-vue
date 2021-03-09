<template>
  <Main v-if="loggedIn" />
  <LogIn v-else />
</template>

<script lang="ts">
import Main from '@/views/Main.vue';
import LogIn from '@/views/LogIn.vue';
import store from './store';
import { mapState } from 'vuex';

export default {
  components: {
    Main,
    LogIn
  },
  store,
  computed: mapState(['loggedIn'])
}
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: rgb(242, 242, 242);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
