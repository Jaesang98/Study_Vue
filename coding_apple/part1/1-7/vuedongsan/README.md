## 💡 part1-7 실제 데이터를 박아넣어 상품목록을 만들자 (import / export)

### 🔹 import

```javascript
//data.js
const data = 10
export defalut data

//App.vue
import data from './data.js'

or

//data.js
const data = 10
export {data}

//App.vue
import {data} from './data.js'
```
