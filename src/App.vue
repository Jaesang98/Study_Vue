<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="tabtype--">Cancel</li>
    </ul>
    <ul class="header-button-right" >
      <li v-if="tabtype==1" @click="tabtype++">Next</li>
      <li v-if="tabtype==2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :postData="postData" :tabtype="tabtype" :imageurl="imageurl" @content="content = $event"/>
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "@/components/Container.vue";
import postData from "@/assets/postData";
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      postData: postData,
      count: 0,
      tabtype : 0,
      imageurl : "",
      content : "",
      filterApp : ""
    };
  },
  
  mounted(){
    this.emitter.on('filter', (value)=>{
        this.filterApp = value;
    });
  },

  components: {
    Container: Container,
  },

  methods: {
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.count}.json`)
        .then((res) => {
          this.postData.push(res.data);
          this.count++;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    upload(e){
      let file = e.target.files;
      this.imageurl = URL.createObjectURL(file[0]);
      this.tabtype++;
    },

    publish() {
      console.log(this.filterApp)
      var post = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.imageurl,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.content,
        filter: this.filterApp
      };
      this.postData.unshift(post);
      this.tabtype = 0;
    }
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
