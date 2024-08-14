<template>
    <div v-for="(data, idx) in 원룸들" :key="idx">
        <img :src="data.image" class="room-img">
        <h4 @click="$emit('openModal'); 누른거 = idx">{{ data.title }}</h4>
        <p>{{ data.price }} 만원</p>
    </div>
</template>

<script>
export default {
    name : "CardVue",

    props: {
        원룸들 : Array
    }
}
</script>

<style></style>