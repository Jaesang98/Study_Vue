<template>
  <div class="menu">
    <a v-for="a in 메뉴들" :key="a">{{ a }}</a>
  </div>

  <div v-for="(products, i) in products" :key="i">
    <h4>{{ products }}</h4>
    <p>50 만원</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      price1: 60,
      price2: 70,
      메뉴들: ["Home", "Shop", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
    };
  },
  components: {},
};
</script>

<style>
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
</style>
