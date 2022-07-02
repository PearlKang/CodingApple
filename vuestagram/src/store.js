import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "ben",
      age: 20,
      likes: 0,
      likeFlag: false,
    };
  },
  mutations: {
    changeName(state) {
      state.name = "benkang";
    },
    addAge(state, data) {
      state.age += data;
    },
    calcLike(state) {
      if (!state.likeFlag) {
        state.likes++;
        state.likeFlag = true;
      } else {
        state.likes--;
        state.likeFlag = false;
      }
    },
  },
});

export default store;
