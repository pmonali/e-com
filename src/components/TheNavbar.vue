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
        <div class="navbar-item">
          <div class="buttons">
            <template v-if="isLoggedIn">
              <div class="dropdown is-right is-hoverable">
                <div class="navbar-link is-arrowless">
                  Hi, {{ username }}
                  <span class="icon">
                    <i class="fas fa-chevron-down"></i>
                  </span>
                </div>
                <div class="dropdown-menu">
                  <div class="dropdown-content">
                    <router-link to="/account" class="dropdown-item"
                      >Account Details</router-link
                    >
                  </div>
                </div>
              </div>
              <button class="button is-primary" @click="logout">Logout</button>
            </template>
            <template v-else>
              <router-link to="/login" class="button is-primary">
                <strong>Login</strong>
              </router-link>
              <router-link to="/signup" class="button is-light">
                Sign up
              </router-link>
            </template>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TheNavbar",
  data() {
    return {
      menuActive: false,
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn", "username"]),
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => {
          this.$router.push("/login");
        })
        .catch((error) => {
          console.error(error);
        });
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
  color: rgb(118, 49, 49);
  text-decoration: none;
}
</style>
