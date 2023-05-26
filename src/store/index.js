import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      currentUser: null,
      users: [],
    };
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
    addUser(state, user) {
      state.users.push(user);
    },
  },
  actions: {
    signup({ commit, state }, user) {
      const existingUser = state.users.find(
        (u) => u.username === user.username
      );
      if (existingUser) {
        throw new Error("Username already exists.");
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
        throw new Error("Invalid username or password.");
      }

      commit("setCurrentUser", user);
    },
    logout({ commit }) {
      commit("setCurrentUser", null);
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
