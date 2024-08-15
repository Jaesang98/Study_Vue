<template>
  <div>
    <Post :postData = "postData"/>
  </div>
</template>

<script>
import Post from '@/components/Post.vue'
export default {
    name:'containerVue',
    components : {
      Post : Post
    },
    props : {
      postData : Array
    }
}
</script>

<style>

</style>