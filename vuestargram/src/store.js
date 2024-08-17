import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore({
  state(){
    return {
      name : "nam",
      age : 20,
      likes : 30,
      likesYn : false,
      more : {},
    }
  },
  mutations: {
    이름변경(state) {
      state.name = "kim";
    },
    나이번경(state) {
      state.age++;
    },
    사진좋아요(state) {
      if (state.likesYn == false) {
        state.likes++;
        state.likesYn = true;
      }
      else {
        state.likes--;
        state.likesYn = false;
      }
    },
    setMore(state, data) {
      state.more = data
    }
  },
  actions: {
    getData(context) {
      axios
        .get(`https://codingapple1.github.io/vue/more0.json`)
        .then((res) => {
          context.commit('setMore', res.data)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
})

export default store