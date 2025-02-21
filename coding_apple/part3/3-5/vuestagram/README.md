## 💡 part3-5 서버 없이 업로드한 이미지 다루기 (잡기술)

### 🔹 로컬에서 가져온 이미지를 화면에 표시하는 방법

#### ✅ `FileReader()` vs `URL.createObjectURL()`

| 기능      | `FileReader()`               | `URL.createObjectURL()`     |
| --------- | ---------------------------- | --------------------------- |
| 변환 방식 | 이미지 → 문자열              | 이미지 → 임시 URL           |
| 특징      | 저장 및 재사용 가능          | 새로고침 시 URL 사라짐      |
| 사용법    | `reader.readAsDataURL(file)` | `URL.createObjectURL(file)` |

#### ✅ `URL.createObjectURL(file[0])`

- `console.log()`로 출력하면 `blob` 형식이 나옴 (binary 데이터를 object로 변환한 것)

### 🔹 여러 개의 파일 업로드

- `<input type="file" multiple>` 속성 추가

### 🔹 특정 파일만 업로드

- **이미지 파일만** 업로드: `<input type="file" accept="image/*">`
- 하지만 **모든 파일로 변경 가능** → 엄격하게 제한하려면 `file.type` 체크 필요!
