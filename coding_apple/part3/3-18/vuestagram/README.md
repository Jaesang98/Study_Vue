## 💡 part3-18 Composition API 사용법 2 & 간단한 검색기능

### 🔹 컴포넌트 마다 css적용 되는것

- 그냥 컴포넌트에 쓰고 난 후 다른 컴포넌트에서 쓰면 css가 적용됨
- 그래서 각 컴포넌트에다가 적용하고 싶으면 style에 scoped를 쓰면됨
- 이렇게 쓰면 내가 작성한 것들이 다른 곳에 퍼지지 않음

### 🔹 reactive

- ref랑 똑같음
- 보통 array, object를 집어넣을 때 사용 / ref는 나머지

### 🔹 toRefs(props)

- 그냥 props를 쓰면 실시간 반영이 안될 수 있음
- 그래서 props 전체를 실시간 반영으로 바꾼다고 할 때 저걸 사용

```javascript
setUp(props, data);
props; //이건 프롭스
data; //이거는 emit이나 뭐 다른것 등등있음
```

### 🔹 useStore()

- `useStore().state.저장한값`
- `useStore().commit dispatch` 등 사용 가능

### 🔹 mapState

- composition안에서는 이거 못씀 vuex5 버전에서는 사용 가능
