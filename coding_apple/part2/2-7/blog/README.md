## 💡 part2-7 만든 Vue 사이트 build & Github Pages로 배포하려면

### 🔹 처음 경로를 다르게 하고싶다면

1. 처음 경로를 다르게 하고싶다면 (`App.vue`가아닌 다른 페이지를 호출)
   `vue.config`에서 `publicPath` 공간에 /님이만든 `repository`이름을 적어주면됩니다

   이거 그 외 또 설정하는거 있는데 그거는 내일 보자고!!
   그외 설정은 `history: createWebHistory(process.env.BASE_URL)`, 이렇게 적어줘야한다

   그리고 만약 그냥 APP.vue로 배포를 한다면

   ```javascript
   const { defineConfig } = require("@vue/cli-service");

   module.exports = defineConfig({
     transpileDependencies: true,
     publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
   });
   ```

   이렇게 경로를 바꿔줘야한다
