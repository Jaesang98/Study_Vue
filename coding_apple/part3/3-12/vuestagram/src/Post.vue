<template>
  <div class="post">
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">{{ 게시물.name }}</span>
    </div>
    <div
      @click="$store.commit('좋아요')"
      class="post-body"
      :style="{ backgroundImage: `url(${게시물.postImage})` }"
    ></div>
    <div class="post-content">
      <p>{{ $store.state.likes }} Likes</p>
      <p>
        <strong>{{ 게시물.name }}</strong> {{ 게시물.content }}
      </p>
      <p class="date">{{ 게시물.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    게시물: Object,
  },
};
</script>

<style>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://picsum.photos/100?random=0");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://picsum.photos/600?random=0");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>
