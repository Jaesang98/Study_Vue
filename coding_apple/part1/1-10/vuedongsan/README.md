## 💡 part1-10 부모가 가진 데이터를 자식이쓰고 싶으면 props로 전해주셈

### 🔹 props

- 부모에서 자식에게 데이터를 넘겨줄 때 사용
- props는 read only

```javascript
//App.vue
<Discount :작명="데이터"></Discount>


//Discount.vue
<template>
~~내용~~
</template>

<script>
export default {
  name: "Discount",
  props: {
    원룸들: array,
  },
};
</script>
```
