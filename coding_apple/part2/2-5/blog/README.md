## 💡 part2-5 심심할까봐 소개하는 Nested routes & push 함수

### 🔹 Nested routes

- router.js에서 children을 생성

```javascript
{
    path: "/detail/:id",
    component: Detail,
    children: [
        {
            path: "author",
            component: Author,
        },
        {
            path: "comment",
            component: Comment,
        }
    ]
}
```

### 🔹 push

- $router.push('/경로') 를 통해 화면 이동이 가능하다
- 그 외에도 go back 등 많은 기능이 있는데 그거는 필요할떄 찾기
