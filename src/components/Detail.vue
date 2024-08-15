<template>
  <h4>디테일임</h4>
  <h5>{{블로그글[$route.params.id].title}}</h5>
  <p>{{블로그글[$route.params.id].content}}</p>

  <router-view></router-view>
</template>

<script>
export default {
    name : 'detailVue',
    props : {
        블로그글 : Array
    }
}
</script>

<style>

</style>