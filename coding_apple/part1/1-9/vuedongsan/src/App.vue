<template>
  <div class="menu">
    <a v-for="a in 메뉴들" :key="a">{{ a }}</a>
  </div>

  <Modal></Modal>

  <Discount></Discount>

  <div v-for="(data, i) in 원룸들" :key="i">
    <img :src="data.image" class="room-img" />
    <h4
      @click="
        모달창열렸니 = true;
        누른거 = i;
      "
    >
      {{ data.title }}
    </h4>
    <p>{{ data.price }}</p>
  </div>
</template>

<script>
import data from "./oneroom";
import Discount from "./Discount.vue";
import Modal from "./Modal.vue";

export default {
  name: "App",
  data() {
    return {
      누른거: 0,
      원룸들: data,
      모달창열렸니: false,
      신고수: [0, 0, 0],
      메뉴들: ["Home", "Shop", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
    };
  },
  methods: {
    increase(index) {
      this.신고수[index]++;
    },
  },
  components: {
    Discount: Discount,
    Modal: Modal,
  },
};
</script>

<style>
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
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
</style>
