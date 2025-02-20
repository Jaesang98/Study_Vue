## 💡 part2-3 vue-router 설치와 기본 라우팅

### 🔹 라우터 설치 및 적용

```javascript
// 1) vue-router 설치
// 터미널에서 실행
npm install vue-router@4

// 2) router.js 코드 설정
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/경로",
    component: import해온 컴포넌트,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// 3) main.js에서 router 추가
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

// 4) 컴포넌트에서 사용
// <router-link to="/경로">링크</router-link>
// <router-view /> 사용 가능 (props 전송 가능)

```
