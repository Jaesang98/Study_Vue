## 💡 part3-13 Vuex 3 : actions 항목을 알아보자

### 🔹 action

- 메소드 안에는 ajax를 쓰는 곳임
  mutation에도 써도되는데 쓰면 안되는 이유는 state값을 순차적으로 바꿀 떄
  어떤값을 순차적으로 바꿀 때 특히 ajax에서 오래걸리는게 있다면 이것을 생각하면서 바꿔야 하기 때문에
  문제가 있을 수있어 action안에 적는다

```javascript
actions: {
    getData() {
        바꾸기
    }
}

//actions를 호출
$store.dispatch('getData)

//actions에서도 commit를 통해 mutations을 호출 할 수 있는데
//이럴 때는 작동시킬 함수의 파라미터에 context를 넣어줘야함
getData(context) {}
context.commit('setMore', res.data)

// 1  dispatch('함수')
// 2  ajax로 데이터 가져옴
// 3  mutations를 이용해서 state에 저장
```
