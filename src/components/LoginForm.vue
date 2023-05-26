<!-- src/components/Login.vue -->
<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="showSignupOption">
      Don't have an account? <router-link to="/signup">Signup</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      showSignupOption: true,
    };
  },
  methods: {
    login() {
      const credentials = {
        username: this.username,
        password: this.password,
      };

      this.$store
        .dispatch("login", credentials)
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => {
          // Handle non-existing user
          if (error.message === "Invalid username or password.") {
            this.showSignupOption = true;
          }
          alert(error.message);
        });
    },
  },
};
</script>
<style scoped>
/* Container for the login form */
.login-container {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
} /* Heading style */
.login-container h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
} /* Text input style */
.login-container input[type="text"],
.login-container input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
} /* Button style */
.login-container button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  border: none;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
} /* Button hover effect */
.login-container button:hover {
  background-color: #45a049;
} /* Error message style */
.login-container .error-message {
  color: #ff0000;
  margin-bottom: 15px;
} /* Link style */
.login-container a {
  text-decoration: none;
  color: #4caf50;
} /* Link hover
effect */
.login-container a:hover {
  text-decoration: underline;
}
</style>
