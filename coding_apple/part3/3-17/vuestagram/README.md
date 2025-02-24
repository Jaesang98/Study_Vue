## 💡 part3-17 Composition API 사용법 (팔로워 페이지 만들기)

### 🔹 Composition API

- 기본적으로 vue는 options가 있고 Composition 사용법이 있음
- option은 data () method() 이런거 만들어서 사용법
- Composition은 그냥 쭈루룩 쓰는거임 `setup() {}`

### 🔹 ref

- 변수에 값을 넣을 때 ref를 써야 실시간 반영이됨
- 그리고 return으로 변수값을 {} 에 넣어줘야 위에서 사용가능 return {변수}
- setup에서 작성하는건 created hook안에 작성하는 거랑 비슷하다
- 그리고 값 변경할 때 ref를 썻다면 이것을 쓸때는 변수.value 이렇게 써야함
- setup에서는 mounted를 onMounted를 쓰고 이걸 함수처럼 (() => {}) 이런식으로 써야함

### 🔹 퍼블릭에 데이터 넣으면

- axios.get('/follower.json').then((a) 이렇게 파일을 axios로 호출가능
