<template>
  <div>
    <form v-if="!isSignup" @submit.prevent="login">
      <!-- Login form code -->
      <h2>Login</h2>
      <!-- Input fields for email and password -->
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>

    <form v-else @submit.prevent="signup">
      <!-- Signup form code -->
      <h2>Sign Up</h2>
      <!-- Input fields for first name, last name, email, and password -->
      <div>
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" v-model="firstName" required />
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model="lastName" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div>
        <button type="submit">Sign Up</button>
      </div>
    </form>

    <div v-if="isSignup">
      Already have an account? <button @click="toggleSignup">Login</button>
    </div>
    <div v-else>
      Don't have an account? <button @click="toggleSignup">Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSignup: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    toggleSignup() {
      this.isSignup = !this.isSignup;
    },
    login() {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find(
        (u) => u.email === this.email && u.password === this.password
      );
      if (user) {
        alert("Login successful");
        this.resetForm();
      } else {
        alert("Invalid Email or Password");
      }
    },
    signup() {
      const newUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      };

      const users = JSON.parse(localStorage.getItem("users") || "[]");
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      alert("Signup successful");
      this.resetForm();
      // Optionally, you can redirect the user or perform any other action
    },
    resetForm() {
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.password = "";
    },
  },
};
</script>
