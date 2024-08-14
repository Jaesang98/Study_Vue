<template>
    <div class="discount">
        <h4>지금 결제하면 {{count}}% 할인</h4>
    </div>
</template>

<script>
export default {
    name: 'DiscountVue',
    props: {
        count : Number
    }
}
</script>

<style></style>