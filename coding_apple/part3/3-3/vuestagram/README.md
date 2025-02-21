## 💡 part3-3 서버로 ajax 요청하는 더보기 버튼 만들기

### 🔹 ajax

- 사실 서버에게 get요청을 하는건 url임 이게 너무 안좋기 때문에 이걸사용
- 새로고침 없이도 get post요청가능

### 🔹 axios

- fetch라는 자바스크립트 기본함수를 써도 되는데 호환성 때문에 axios를 자주 사용함

```javascript
npm install axios

// 형식에 맞게 get post put delete를 사용하기
import axios from 'axios'
axios.get(`https://codingapple1.github.io/vue/more${this.count}.json`)
    .then((res) =>{
        this.postData.push(res.data);
        this.count++
    })
        .catch((err)=>{
        console.log(err)
    })
```
