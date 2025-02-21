## 💡 part3-8 props 싫으면 slot은 어떻습니까

### 🔹 slot

- 부모 -> 자식 데이터 전송하는 방법
- 자식은 slot 태그를 작성하여 구멍을 뚫어놓는다
- 컴포넌트 태그사이에 데이터를 넣는다

### 🔹 slot 여러개 사용법

- 자식에서 slot태그를 작성 후 name을 넣어줌
- 부모는 templete태그를 만든 후 v-slot:name 을 넣어주면
  자식에서 작성한 name을 보여준다

### 🔹 자식이 부모에게 slot을 통해 데이터 보낼 때

- props를 사용하지만 slot태그에 작성한다
- 부모는 templete태그에서 v-slot:default="작명" 으로 작성해 준뒤
  작명.data 이런식으로 확인이 가능하다
