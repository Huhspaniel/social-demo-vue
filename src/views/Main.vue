<template>
  <div class="header">
    <img class="vue-logo" alt="Vue Logo" src="../assets/logo.png" />
    <nav>
      <router-link to="/">
        <i class="material-icons">home</i>
      </router-link>
      <router-link to="/me">
        <i class="material-icons">account_circle</i>
      </router-link>
      <div>
        <i class="material-icons">add</i>
      </div>
      <MenuBtn>
        <i class="material-icons">settings</i>
        <template v-slot:menu>
          <div class="settings-menu">
            <div>Color Theme<i class="material-icons">invert_colors</i></div>
            <div @click="logOut">Log Out<i class="material-icons">logout</i></div>
          </div>
        </template>
      </MenuBtn>
    </nav>
  </div>
  <router-view />
</template>

<script lang="ts">
import { logOut } from "../services/firebase.service";
import MenuBtn from "../components/MenuBtn.vue";

export default {
  methods: {
    logOut,
  },
  components: {
    MenuBtn,
  },
};
</script>

<style scoped lang="scss">
.header {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 2px black;

  .vue-logo {
    height: 48px;
    margin: 5px;
  }

  nav {
    display: flex;
    .material-icons {
      font-size: 32px;
      color: inherit;
      padding: inherit;
      margin: inherit;
    }
    > * {
      cursor: pointer;
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;
      border-radius: 20px;
      padding: 6px;
      margin: 3px;

      &:hover {
        background-color: rgb(235, 235, 235);
      }

      &.router-link-exact-active, &.menu-btn-active {
        color: #13b96e;
      }
      &.menu-btn-active {
        background-color: rgb(235, 235, 235);
      }
    }
    .settings-menu {
      padding: .7em;
      cursor: auto;

      div {
        cursor: pointer;
        padding: .7em;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .material-icons {
          font-size: 24px;
          margin-left: 1em;
          padding: 0;
        }

        &:hover {
          background-color: rgba(white, .2);
        }
      }
    }
  }
}
</style>
