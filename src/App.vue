<template>
  <div id="nav">
    <img class="vue-logo" alt="Vue Logo" src="./assets/logo.png" />
    <nav>
      <router-link to="/" class="material-icons">home</router-link>
      <router-link to="/me" class="material-icons">account_circle</router-link>
      <div class="nav-icon material-icons">add</div>
      <div class="nav-icon material-icons">settings</div>
    </nav>
  </div>
  <router-view />
</template>

<style lang="scss">

body {
  margin: 0;
  background-color: rgb(240, 240, 240);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
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

  a, .nav-icon {
    cursor: pointer;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    border-radius: 20px;
    padding: 10px;
    margin: 3px;
    font-size: 32px;

    &:hover {
      background-color: rgb(235, 235, 235);
    }

    &.router-link-exact-active {
      color: #13b96e;
      // background-color: rgb(235, 235, 235);
    }
  }
}

</style>
