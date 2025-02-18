## 💡 part1-13 사용자의 input을 받는 법 (v-model)

### 🔹 v-model
- 인풋의 value값 가져옴
```javascript
@input="month = $event.target.value"
v-model="month"

//숫자로 가져오기
v-model.number
```