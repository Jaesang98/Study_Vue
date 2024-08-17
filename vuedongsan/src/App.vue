<template>
  <transition name="fade">
    <Modal @CloseModal="모달창열렸니 = false" :원룸들=원룸들 :누른거=누른거 :모달창열렸니=모달창열렸니></Modal>
  </transition>

  <div class="menu">
    <a v-for="(메뉴들, idx) in 메뉴들" :key="idx"> {{ 메뉴들 }} </a>
  </div>

  <Discount v-if="showDiscount == true" :count = count></Discount>
  <button @click="priceSort">가격순정렬</button>
  <button @click="sortBack">되돌리기</button>

  <Card @openModal="모달창열렸니 = true" :원룸들=원룸들></Card>
</template>

<script>
import data from './assets/oneroom';
import Discount from './Discount.vue';
import Modal from './Modal.vue';
import Card from './Card.vue';

export default {
  name: 'App',
  data() {
    return {
      count : 30,
      showDiscount: true,
      원룸들오리지널: [...data],
      누른거: 0,
      원룸들: data,
      모달창열렸니: false,
      신고수: [0, 0, 0],
      메뉴들: ['Home', "Shop", "About"],
      produsts: ['역삼동원룸', '천호동원룸', '마포구원룸']
    }
  },

  methods: {
    priceSort() {
      this.원룸들.sort(function (a, b) {
        return a.price - b.price;
      })
    },

    sortBack() {
      this.원룸들 = [...this.원룸들오리지널];
    }
  },

  mounted() {
    // setTimeout(() => {
    //   this.showDiscount = false;
    // }, 2000)

    setInterval(()=> {
      if(this.count > 0){
        this.count--;
      }
    },1000)


  },

  components: {
    Discount: Discount,
    Modal: Modal,
    Card: Card
  }
}
</script>

<style>
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
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
