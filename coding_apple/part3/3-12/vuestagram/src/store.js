import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "kim",
      age: 20,
      likes: 30,
      좋아요눌렀니: false,
    };
  },
  mutations: {
    이름변경(state) {
      state.name = "park";
    },
    나이변경(state, payload) {
      state.age += payload;
    },
    좋아요(state) {
      if (state.좋아요눌렀니 == false) {
        state.likes++;
        state.좋아요눌렀니 = true;
      } else {
        state.likes--;
        state.좋아요눌렀니 = false;
      }
    },
  },
});

export default store;
