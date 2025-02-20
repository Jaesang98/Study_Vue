<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-link to="/">홈</router-link>
  <router-link to="/list">리스트페이지</router-link>
  <router-view :블로그글="블로그글"></router-view>
  <!-- <List :블로그글="블로그글"></List> -->
</template>

<script>
// import List from "./components/List.vue";
import blog from "./assets/blog";

export default {
  name: "App",
  data() {
    return {
      블로그글: blog,
    };
  },
  components: {
    // List: List,
  },
};
</script>
<style scoped></style>
