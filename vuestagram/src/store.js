import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "ben",
      age: 20,
    };
  },
  mutations: {
    changeName(state) {
      state.name = "benkang";
    },
    addAge(state, data) {
      state.age += data;
    },
  },
});

export default store;
