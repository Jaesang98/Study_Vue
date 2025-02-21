## 💡 part3-9 멀리 있는 컴포넌트간 데이터전송할 땐 mitt

### 🔹 mitt

- 먼 곳에 떨어진 컴포넌트에 데이터 전송할 때 사용
- 사실 이거는 너무 많이쓰면 어지럽기 때문에 vuex를 쓰는게 좋다

```javascript
npm install mitt

// main.js
import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

let emitter = mitt();
let app = createApp(App);
//globalProperties은 글로벌한 변수 보관함
//자주쓰는 라이브러리는 app.config.globalProperties를 사용하면 좋음 그러면 import해볼 필요 없이 this.axios로 사용이 가능함
app.config.globalProperties.emitter = emitter;

app.mount('#app')

// App.vue
this.emitter.emit('작명',데이터)

this.emitter.on('작명', ()=>{

});
```
