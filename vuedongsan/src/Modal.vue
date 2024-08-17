<template>
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <img :src="원룸들[누른거].image" style="width: 100%;">
      <h4>{{ 원룸들[누른거].title }}</h4>
      <p>{{ 원룸들[누른거].content }}</p>
      <input v-model="month">
      <p> {{ month }}개월 선택함 {{ 원룸들[누른거].price * month }}</p>
      <button @click="$emit('CloseModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalVUe",
  data() {
    return {
      month: 1,
    }
  },
  
  watch : {
    month(a) {
      console.log(typeof a)
      if(a >= 13){
        alert("13이상 입력하지 마셈");
        this.month = 1;
      }
      // else if(typeof a  == "string"){
      //   alert("한글 ㄴㄴ");
      //   this.month = 1;
      // }
    }
  },

  updated() {
    if(this.month == 2){
      alert("2적지 마세요!");
      this.month = 1;
    }
  },

  props: {
    원룸들: Array,
    누른거: Number,
    모달창열렸니: Boolean
  }
}
</script>

<style></style>