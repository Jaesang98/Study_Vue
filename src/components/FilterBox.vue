<template>
    <div :class="`filter-item ${filters}`" :style="`background-image:url(${imageurl})`" @click="acceptFilter">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name : 'FilterBoxVue',
    methods: {
        acceptFilter(){
            this.emitter.emit('filter',this.filters);
        }
    },
    props : {
        imageurl : String,
        filters : String
    }
}
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