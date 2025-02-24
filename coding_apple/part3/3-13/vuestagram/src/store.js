import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "kim",
      age: 20,
      likes: 30,
      좋아요눌렀니: false,
      more: {},
    };
  },
  mutations: {
    setMore(state, data) {
      state.more = data;
    },
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
  actions: {
    getData(context) {
      axios.get("https://codingapple1.github.io/vue/more0.json").then((a) => {
        console.log(a.data);
        context.commit("setMore", a.data);
      });
    },
  },
});

export default store;
