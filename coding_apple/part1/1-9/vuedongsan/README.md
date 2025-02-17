## 💡 part1-9 HTML 복잡해보이면 컴포넌트 Component 만들어 쓰셈

### 🔹 컴포넌트

- 긴 html을 한 단어로 줄일 수 있는 문법
- 재사용할 때 좋음
- 코드가 복잡해질 수 있음

```javascript
//Discount.vue
<template>
~~내용~~
</template>

<script>
export default {
  name: "Discount",
};
</script>

//App.vue
<template>
    <Discount></Discount>
</template>

<script>
import Discount from "./Discount.vue";
export default {
  name: "App",
  components: {
    Discount: Discount,
  },
};
</script>

```
