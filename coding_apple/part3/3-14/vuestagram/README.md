## 💡 part3-14 Vuex 4 : mapState를 사용하면 편리할 수도 있음

### 🔹 computed

- 계산 결과를 저장하는 함수들을 적을 때는
  이게 처음 페이지 로드될 때 한번만 호출하고 그리고 그 값을 간직만 하고 뱉어줌
  즉 한번 더 실행을 안한다는 뜻임
  물론 값이 변경되면 바뀌긴함

- 그리고 얘는 함수이름만 써야됨 소괄호 쓰는거아님
  계산 결과를 저장하는 놈이기 때문

### 🔹 mapState

- computed에서는 항상 return 값을 적용해줘야 하기때문에 코드가 길어질 수 있음 그래서 사용하는거임

```javascript
//이런식으로 state에 있는걸 저렇게 적을 수 있음
import {mapState} from 'vuex';
...mapState(['name', 'likes'])

//그리고 그냥 {{name or likes}} 이렇게 적으면 state값을 쓸 수 있음
//만약 name', 'likes이런게 변수명이 겹칠 수 있는데 이럴때는 object형식으로 써도됨
({작명 : 'name'})

//mutations 함수를 수정할 때 편하게 사용하려면
...mapMutations(['함수'])
// 이렇게 적어서 호출도 가능하다
//=> methods에 적기
import {mapMutations} from 'vuex';
//그리고 event에서는 그냥 함수명(전달할 데이터)
//이렇게 편하게 적용이 가능함
```
