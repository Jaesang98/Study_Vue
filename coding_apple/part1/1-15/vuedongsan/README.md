## 💡 part1-15 Vue에서 매끈한 UI 애니메이션 주는 법 2개

### 🔹 transition

- 애니메이션 

```css
<transition class = "작명"></transition>

.작명-enter-from { 애니메이션 동작 전 상태 }
.작명-enter-active { 애니메이션 동작 중 상태, 대부분 transition 이런거 }
.작명-enter-to { 애니메이션 동작 후 상태 }
```