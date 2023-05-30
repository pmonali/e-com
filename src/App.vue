<template>
  <div id="app">
    <TheNavbar
      :loggedIn="loggedIn"
      :userName="userName"
      @logout="handleLogout"
    />
    <router-view @login-success="handleLoginSuccess" />
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheNavbar,
    TheFooter,
  },
  data() {
    return {
      loggedIn: false,
      userName: "",
    };
  },
  methods: {
    handleLoginSuccess(firstName) {
      this.loggedIn = true;
      this.userName = firstName;
    },
    handleLogout() {
      this.loggedIn = false;
      this.userName = "";
      // alert("logout");
    },
  },
};
</script>

<style>
#app {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
