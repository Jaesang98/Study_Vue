## 💡 part3-10 저번 시간 숙제와 Vuex 1 : 사용하는 이유

### 🔹 vuex사용이유

- 모든 컴포넌트에서 가져다 쓸 수 있음
- vuex에서는 컴포넌트안에서 데이터를 직접 수정하면 안된다
- store.js에서 변경되는 함수를 만들고 그걸 실행시키도록 해야한다

```javascript
npm install vuex@next --save

// store.js
import { createStore } from 'vuex'
const store = createStore({
    state(){
    return {}
    },
})
export default store

// main.js
import store from './store.js'
app.use(store).mount('#app')

//불러오기
$store.state.저장한데이터
```
