## 💡 part1-3 HTML에 데이터 꽂아넣는 Vue 데이터바인딩 문법

### 🔹 데이터 바인딩

- js데이터를 HTML에 꽂아넣는 문법
- 가변적인 데이터는 수정을 쉽게 하기 위해 사용
- 실시간 자동 렌더링이 가능

```javascript
<div>{{ data }}</div>
<div :class="data"></div>
```

### 🔹 data

- 데이터를 저장하는 함수

```javascript
data() { return{ key : value } }
```
