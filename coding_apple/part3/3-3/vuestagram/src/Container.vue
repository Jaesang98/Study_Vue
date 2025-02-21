<template>
  <div>
    <Post :게시물="a" v-for="(a, i) in 게시물" :key="i" />
  </div>
</template>

<script>
import Post from "./Post.vue";
export default {
  components: { Post },
  props: {
    게시물: Array,
  },
};
</script>

<style></style>
