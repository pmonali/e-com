import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
      users: JSON.parse(localStorage.getItem("users")) || [],
    };
  },

  mutations: {
    setCurrentUser(state, username) {
      state.currentUser = username;
      localStorage.setItem("currentUser", JSON.stringify(username));
    },
    // ...
    logout(state) {
      state.currentUser = null;
      localStorage.removeItem("currentUser");
    },
  },

  actions: {
    signup({ commit, state }, user) {
      const existingUser = state.users.find(
        (u) => u.username === user.username
      );
      if (existingUser) {
        alert("Username already exists.");
      }

      commit("addUser", user);
      commit("setCurrentUser", user);
    },
    login({ commit, state }, credentials) {
      const user = state.users.find(
        (u) =>
          u.username === credentials.username &&
          u.password === credentials.password
      );
      if (!user) {
        commit("setCurrentUser", null); // Set currentUser to null
        alert("Invalid username or password.");
      }

      commit("setCurrentUser", user.username);
    },

    logout({ commit }) {
      commit("setCurrentUser", null);
      localStorage.removeItem("currentUser");
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.currentUser !== null;
    },
    username(state) {
      return state.currentUser ? state.currentUser.username : "";
    },
  },
});

export default store;
