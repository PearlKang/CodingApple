import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "ben",
      age: 20,
      likes: 0,
      likeFlag: false,
      more: {},
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
    setMore(state, data) {
      state.more = data;
    },
  },
  actions: {
    getData(context) {
      axios.get(`https://codingapple1.github.io/vue/more0.json`).then((a) => {
        context.commit("setMore", a.data);
      });
    },
  },
});

export default store;
