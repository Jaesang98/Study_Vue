## 💡 part3-11 Vuex 2 : store에 있는 state 데이터 바꾸는 법

### 🔹 state의 값을 바꾸는 법

```javascript
// store.js에 state수정방법 정의
// store.js에 수정요청
// store.js에 메소드 추기

mutations: {
    함수(state){
        state.데이터 = "내가바꾸고 싶은 것"
    }
}

//컴포넌트에서 store.js에 수정요청
$store.commit('함수')

//state 값 변경요청을 할 때 data도 같이 보낼 수 있다
$store.commit('함수', data)

//store.js에서 매개변수는 대부분 state, payload이런식으로 작명한다
```
