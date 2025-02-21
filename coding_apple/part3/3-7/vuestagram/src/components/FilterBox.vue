<template>
  <div class="filter-item" :style="`background-image:url(${이미지})`"></div>
</template>

<script>
export default {
  name: "filterbox",
  props: {
    이미지: String,
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
