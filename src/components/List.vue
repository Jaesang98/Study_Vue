<template>
  <div v-for="(블로그글,idx) in 블로그글" :key="idx">
    <h5 @click="$router.push(`/detail/${idx}`)">{{블로그글.title}}</h5>
    <p>{{블로그글.date}}</p>
  </div>
</template>

<script>
export default {
    name : "ListVue",
    props : {
        블로그글 : Array
    }
}
</script>

<style>

</style>