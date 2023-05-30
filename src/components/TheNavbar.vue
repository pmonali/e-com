<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="../assets/logo.png" alt="My Store" />
      </router-link>

      <div class="navbar-burger burger" @click="toggleMenu">
        <span></span>
        <span></span>
        <!-- <span></span> -->
      </div>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': menuActive }">
      <div class="search-bar">
        <input type="text" placeholder="Search" />
        <button>Go</button>
      </div>
      <div class="navbar-start">
        <router-link to="/categories" class="navbar-item"
          >Categories</router-link
        >
        <router-link to="/wishlist" class="navbar-item">Wishlist</router-link>
        <router-link to="/cart" class="navbar-item">Cart</router-link>
      </div>
      <div class="navbar-end">
        <!-- < class="navbar-end"> -->
        <div class="navbar-item">
          <div v-if="!loggedIn">
            <router-link to="/login" class="button is-primary"
              >Login</router-link
            >
          </div>
          <div v-else>
            <span>hello, {{ userName }}!</span>
            <button @click="logout">Logout</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",
  props: {
    loggedIn: {
      type: Boolean,
      required: true,
    },
    userName: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    logout() {
      this.$emit("logout");
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.navbar-brand img {
  height: 3rem;
}

.navbar-burger {
  display: block;
  color: #333333;
  cursor: pointer;
  font-size: 1.5rem;
}

.navbar-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-start {
  margin-right: 2rem;
}

.navbar-item {
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease;
  color: black;
  text-decoration: none;
}

.navbar-item:hover {
  background-color: #f5f5f5;
}
.search-bar button {
  background-color: #333333;
  color: #ffffff;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

.search-bar {
  margin-left: 0.5rem;
}
.search-bar input[type="text"] {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 1rem;
  font-size: 1rem;
  width: 30rem;
}
.buttons {
  display: flex;
  align-items: center;
  /* color: black; */
}

.buttons .button {
  margin-left: 1rem;
  color: black;
  text-decoration: none;
}
</style>
