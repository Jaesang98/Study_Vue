<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <h4>안녕 {{ $store.state.name }}</h4>
  <button @click="$store.commit('이름변경')">버튼</button>

  <h4>나이 {{ $store.state.age }}</h4>
  <button @click="$store.commit('나이변경', 10)">버튼</button>

  <Container
    :게시물="게시물"
    :step="step"
    :이미지="이미지"
    @write="작성한글 = $event"
  ></Container>
  <button @click="more()">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" @change="upload" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <!-- <div v-if="step == 0">내용0</div>
  <div v-if="step == 1">내용1</div>
  <div v-if="step == 2">내용2</div>
  <button>버튼0</button>
  <button>버튼1</button>
  <button>버튼2</button> -->
</template>

<script>
import Container from "./Container.vue";
import postdata from "./assets/postdata";
import axios from "axios";
export default {
  name: "APP",
  data() {
    return {
      step: 0,
      게시물: postdata,
      count: 0,
      이미지: "",
    };
  },
  components: { Container },
  methods: {
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.count}.json`)
        .then((res) => {
          this.게시물.push(res.data);
          this.count++;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    upload(e) {
      let 파일 = e.target.files;
      let url = URL.createObjectURL(파일[0]);
      this.이미지 = url;
      this.step++;
    },
    publish() {
      var 내게시물 = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=1",
        postImage: this.이미지,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.작성한글,
        filter: "perpetua",
      };
      this.게시물.unshift(내게시물);
      this.step = 0;
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
