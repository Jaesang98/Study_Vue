##part 3-1 뷰 인스타그램 프로젝트 생성 & 레이아웃 만들기
	기본설정을함
	

##part 3-2 저번시간 숙제 & style 속성 데이터바인딩
	저번시간 숙제함 (부모가 자식의 자식에게 데이터를 보내는것)
	
	1. style
		html에서 스타일을 쓸떄 -(대쉬)를 사용할 수 없어서 기존 css에서 작성하던것과 다르게 작성해야함

##part 3-3 서버로 ajax 요청하는 더보기 버튼 만들기
	1. ajax
		사실 서버에게 get요청을 하는건 url임
		이게 너무 안좋기 때문에 이걸사용
			=> 새로고침 없이도 get post요청가능
			
	2. axios
		=> fetch라는 자바스크립트 기본함수를 써도 되는데 호환성 때문에 axios를 자주 사용함
		
		1) npm install axios
		2) 서버사용 하는 페이지에 import axios from 'axios' 선언
		3) axios.get(`https://codingapple1.github.io/vue/more${this.count}.json`)
		  .then((res) =>{
			this.postData.push(res.data);
			this.count++
		  })
		  .catch((err)=>{
			console.log(err)
		  })
		  => 형식에 맞게 get post put delete를 사용하기
		  
		  
##part 3-4 탭 만들기 & 탭으로 사진 업로드 페이지 만들기
	1. 탭 만들기
		1) 탭의 대한 현재상태를 데이터로 만든다
		2) 상태에 따라 HTML이 어떻게 보일지 만든다
		
		
		
##part 3-5 서버없이 업로드한 이미지 다루기 (잡기술)
	1. 이미지를 로컬에서 가져온 뒤 화면에 뿌리려면?
		FileReader() or URL.createObjectURL() 사용
		
		1) FileReader() 를 쓰면 이미지를 글자로 변환할 수 있고 (글자니까 어디 저장하고 넣을 수도 있고)
		2) URL.createObjectURL() 을 쓰면 이미지 URL을 잠깐 만들어줍니다. (다만 새로고침하면 사라짐)
			=> URL.createObjectURL(file[0]);
				(변환형식)
			이걸 콘솔로 출력하면 blob가 나오는데 binary데이터를 object에 담아서 주는것
			
		3) 만약 파일을 여러개 받고 싶으면 input의 타입을 일단 file로 하는건 기본이고
			multiple이라는게 있는데 그걸 추가해주면됨
			
		4) 이미지만 업로드 받고시으면 인풋에 accept="image/*"로 설정
			=> 사실 고를 때 모든파일로 바꿀 수 있음
			그래서 엄격하게 받고싶으면 코딩작업을 해야함 ㅋㅋ
				=> 파일.type로 보면됨
				
				
##part 3-6 글 발행기능 만들기 (이쯤 되면 혼자서도 잘함)
	1. 이미지 업로드
		:style="`background-image:url(${imageurl})`"
			=> 이렇게 백틱 쓰면 스트링에 변수넣을 수 있어 좋음
			
				=> 여기좀 다시해야할듯
    				=> 다시 잘 했음 변수 오타였음


## part 3-7 업로드한 이미지 인스타그램 필터 기능 만들기 (잡기술)
	1. cssgram - 필터를 줄 수 있도록 해주는 css
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/cssgram/0.1.12/cssgram.min.css" integrity="sha512-kr3JaEexN5V5Br47Lbg4B548Db46ulHRGGwvyZMVjnghW1BKmqIjgEgVHV8D7V+Cbqm/VBgo3Rcbtv+mGLoWXA==" crossorigin="anonymous" /> 
			=> 이거 index.html에넣기
	
	
## part 3-7 props 싫으면 slot은 어떻습니까
	1. slot
		부모 -> 자식 데이터 전송하는 방법
		1) 자식은 slot 태그를 작성하여 구멍을 뚫어놓는다
		2) 컴포넌트 태그사이에 데이터를 넣는다
		
	2. slot 여러개 사용법
		1) 자식에서 slot태그를 작성 후 name을 넣어줌
		2) 부모는 templete태그를 만든 후 v-slot:name 을 넣어주면 
			자식에서 작성한 name을 보여준다
			
	3. 자식이 부모에게 slot을 통해 데이터 보낼 때
		1) props를 사용하지만 slot태그에 작성한다
		2) 부모는 templete태그에서 v-slot:default="작명" 으로 작성해 준뒤 
			작명.data 이런식으로 확인이 가능하다
			
			
## part 3-8 멀리 있는 컴포넌트간 데이터전송할 땐 mitt
	1. mitt 
		먼 곳에 떨어진 컴포넌트에 데이터 전송할 때 사용
		1) npm install mitt
		
		2) main.js 설청
			import { createApp } from 'vue'
			import App from './App.vue'
			import mitt from 'mitt'

			let emitter = mitt();
			let app = createApp(App);
			app.config.globalProperties.emitter = emitter;

			app.mount('#app') 
			=> globalProperties은 글로벌한 변수 보관함
			
		3) 자주쓰는 라이브러리는
			 app.config.globalProperties를 사용하면 좋음 
				그러면 import해볼 필요 없이 this.axios로 사용이 가능함
				
		4) 그 후 this.emitter.emit('작명',데이터) 이런식으로 데이터를 쏘면 됨
		5) 받는건 mounted에서 
			 this.emitter.on('작명', ()=>{

			});
			=> 이렇게 쓰면된다
			
		사실 이거는 너무 많이쓰면 어지럽기 때문에 vuex를 쓰는게 좋다
		
		
## part 3-9 저번 시간 숙제와 Vuex 1 : 사용하는 이유
	1. vuex사용이유
		모든 컴포넌트에서 가져다 쓸 수 있음
		
	2. 적용
		1) npm install vuex@next --save
		2) store.js만든 후 기본 베이스 붙이기
			import { createStore } from 'vuex'

			const store = createStore({
			  state(){
				return {
				  
				}
			  },
			})

			export default store
			
		3) main.js
			import store from './store.js'
			app.use(store).mount('#app')
			넣기
			
		4) $store.state.저장한데이터 이렇게 불러올 수 있음
		
		*주의사항*
			vuex에서는 컴포넌트안에서 데이터를 직접 수정하면 안된다
			그래서 store.js에서 변경되는 함수를 만들고 그걸 실행시키도록 해야한다
