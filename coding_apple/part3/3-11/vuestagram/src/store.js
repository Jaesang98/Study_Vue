import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "kim",
      age: 20,
      likes: 30,
    };
  },
  mutations: {
    이름변경(state) {
      state.name = "park";
    },
    나이변경(state, payload) {
      state.age += payload;
    },
  },
});

export default store;
