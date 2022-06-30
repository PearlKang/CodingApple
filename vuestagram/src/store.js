import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "ben",
      age: 20,
      likes: 0,
    };
  },
  mutations: {
    changeName(state) {
      state.name = "benkang";
    },
    addAge(state, data) {
      state.age += data;
    },
    calcLike(state, flag) {
      if (flag) {
        state.likes++;
      } else {
        state.likes--;
      }
    },
  },
});

export default store;
