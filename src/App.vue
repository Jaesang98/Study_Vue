<template>
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <h4>{{ 원룸들[누른거].title }}</h4>
      <p>{{원룸들[누른거].content}}</p>
      <button @click="모달창열렸니 = false">닫기</button>
    </div>
  </div>
  
  <div class="menu">
    <a v-for="(메뉴들, idx) in 메뉴들" :key="idx"> {{ 메뉴들 }} </a>
  </div>

  <div v-for="(data,idx) in 원룸들" :key="idx">
    <img :src="data.image" class="room-img">
    <h4 @click="모달창열렸니 = true; 누른거= idx">{{ data.title }}</h4>
    <p>{{data.price}} 만원</p>
  </div>
</template>

<script>
import data from './assets/oneroom';

export default {
  name: 'App',
  data() {
    return {
      누른거 : 0,
      원룸들 : data,
      모달창열렸니 : false,
      신고수: [0, 0, 0],
      메뉴들: ['Home', "Shop", "About"],
      produsts: ['역삼동원룸', '천호동원룸', '마포구원룸']
    }
  },

  methods: {

  },


  components: {
  }
}
</script>

<style>

body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
} 

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>
