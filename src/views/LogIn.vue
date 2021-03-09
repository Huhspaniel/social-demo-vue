<template>
    <div class="log-in">
        <div class="logo">
            <img src="../assets/logo.png" alt="Vue Logo">
        </div>
        <div id="firebaseui-auth-container" />
    </div>
</template>

<script lang="ts">
import * as firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import 'firebaseui/dist/firebaseui.css';

export default {
  mounted() {
    const ui = new firebaseui.auth.AuthUI(firebase.default.auth());
    ui.start("#firebaseui-auth-container", {
      signInOptions: [
          firebase.default.auth.EmailAuthProvider.PROVIDER_ID,
          firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
      ],
      callbacks: {
          signInSuccessWithAuthResult() {
              ui.delete();
              return true;
          }
      }
    });
  },
};
</script>

<style lang="scss">
.logo {
    padding: 20px;
}
</style>