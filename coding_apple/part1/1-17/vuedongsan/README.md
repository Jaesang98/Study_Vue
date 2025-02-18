## 💡 part1-17 Vue의 라이프사이클을 어디다 쓰냐면

### 🔹 라이프사이클

- create : 데이터만 존재하는 단계
- mount : `<template>` 사이에 있던걸 실제 HTML로 바꿔줌
- 컴포넌트 생성 : `index.html`에 장착
- update : `data`가 변하면 컴포넌트가 재렌더링됨
- unmount : 컴포넌트가 삭제됨

### 🔹 함수

```javascript
=//바깥에 있는 데이터를 this를 통해 사용가능
(() => {})

//사용 불가능
function() {}
```