part 1-1 카카오가 리액트 냅두고 왜 Vue 쓰는지 알려드림 자식 으로 바뀌었는지 테스트

	1. vue를 사용하는 이유

		- Single page Application, Web-app 만들 때 사용

		- 다른 언어들과 문법이 다르지만 쉬움

		- 코드짤 때 방법이 정해져 있음

		- html 렌더링이 빠름 (react보다) - 사실 밀리세컨드 단위임

		- 업데이트 잘됨





part 1-2 개발환경 셋팅과 Vue 3 설치 (자주겪는 에러 포함)

	1. 설치 용어

		1) npm install -g @vue/cli  입력



	2. vue Extensions

		vetur, HTML CSS Support, vue3 Snippets



	3. 프로젝트 생성

		vue create 프로젝트명

		(안되는 경우 참고)

		https://mimah.tistory.com/entry/Vuejs-vue-create-%EC%8B%9C-%ED%8C%8C%EC%9D%BC-%EB%A1%9C%EB%93%9C%ED%95%A0-%EC%88%98-%EC%97%86%EB%8A%94-%EB%AC%B8%EC%A0%9C



	4. 시작

		npm run serve





part 1-3 HTML에 데이터 꽂아넣는 Vue 데이터바인딩 문법

	1. 데이터 바인딩

		- js데이터를 HTML에 꽂아넣는 문법

		- 가변적인 데이터는 수정을 쉽게 하기 위해 사용

		- 실시간 자동 렌더링이 가능



	2. 문법

		1) data - 데이터를 저장함

			data() {

				return{

					key : value

				}

			}



		2) 속성 데이터 바인딩

			style img등 앞에 :을 붙임

				ex) :img="data.img"





part 1-4 리액트보다 100배 쉬운 Vue 반복문 v-for

	1. 반복문 문법

		v-for = "작명 in array" :key="작명"

			=> 대부분 작명은 array랑 명칭 같게, key는 인덱스





part 1-5 Vue 이벤트 핸들러로 click 감지하기 (허위매물 신고버튼 만들기)

	1. 클릭 이벤트

		v-on:click or @click 둘중 하나 쓰면됨



	2. 문법	- 각 기능을 하는 함수를 사용

		methods : {

			함수() {}

		},

		=> data에 정의한 데이터는 this.data에저장한데이터 이렇게 사용을 해야한다





part 1-6 v-if 와 모달창 만들기 (Vue에서 동적인 UI 만드는 법)

	1. 모달창 동적 UI 스텝

		1) UI의 현재 상태를 데이터로 저장함

		2) 데이터에 따라 UI가 어떻게 보일지 작성





part 1-7 실제 데이터를 박아넣어 상품목록을 만들자 (import / export)

	1. 임포트 하는 방법

		1) 다른 페이지를 만들어 변수를 저장 한 뒤 export

		2) import 해오기

		3) 데이터에 담기



	2. 속성에 데이터 바인딩 하는 방법은 :를 속성 앞에 찍어준다



part 1-8 모달창 내에 상세페이지 만들기

	1. 모달창안에 상세 스텝

		1) 상세로 이동 시 데이터값 만들어놓음

		2) 데이터에 따라 HTML어떻게 보일지 만듬



	2. if문

		v-if , v-else, v-else-if 3가지사용가능





part 1-9 HTML 복잡해보이면 컴포넌트 Component 만들어 쓰셈

	1. 컴포넌트 사용법

		1) vue파일 import해봄

		2) 컴포넌트 메소드 만들어 등록

		3) 사용



	2. 문법

		components: {

			Discount : Discount

		}



	3. 컴포넌트 사용이유

		재사용할 때 좋음



	4. 컴포넌트 단점

		코드가 복잡해질 수 있음





part 1-10 부모가 가진 데이터를 자식이쓰고 싶으면 props로 전해주셈

	1. props - 부모에서 자식에게 데이터를 넘겨줄 때 사용

		1) 부모가 자식에게 데이터를 보냄

			=> <컴포넌트 :작명="데이터"></컴포넌트>

		2) 받아서 등록

			=> props: {원룸들 : Array}

		3) 사용



	2. 주의

		props는 read only





part 1-11 props 나머지 내용 조금 & 저번시간 숙제

	1. 컴포넌트 반복문 취향차이

		1) 컴포넌트에다가 데이터를 전부 주고 그곳에서 반복문 쓰기

		2) 포넌트에다가 데이터를 한 오브젝트만 주고 컴포넌트를 부모에서 반복하기





part 1-12 자식이 부모데이터 바꾸고 싶으면 custom event 로 메세지만 주십쇼

	1. props로 받은 데이터 수정

		1) custom event를 통해 자식이 부모에게 메시지를 보내 데이터를 수정해 달라고 요청함

			=> $emit('메시지를 보내요', 데이터);



		2) 부모는 자식에게 받은 메시지를 통해 props값을 수정

			<컴포넌트 @메시지를 보내요="조건식"> or 자식에게 받은데이터를 쓸 때는 <컴포넌트 @메시지를 보내요="$event">

				=> $event는 @받음메시지 뿐 아니라 <컴포넌트> 이곳 안에서 사용이 가능하다



		3) emit를 함수로 사용할 때는

			this.$emit("메시지", 데이터)를 함수로 만들어 사용해도좋다





part 1-13 사용자의 input을 받는 법 (v-model)

	1. 인풋의 value값 가져오기

		1) @input="month = $event.target.value"

		2) v-model="month"





part 1-14 watcher로 데이터 감시하는 법

	1. watcher사용법

		watch : {

			감시할데이터(변경후데이터, 변경전데이터){



			}

		}



	2. form validation 라이브러리

		- 비밀번호 및 이메일 검사등을 해주는 라이브러리 vue전용으로 해도 좋을듯





part 1-15 Vue에서 매끈한 UI 애니메이션 주는 법 2개

	transition 사용

		시작은 enter

		끝은 leave





part 1-16 상품정렬기능과 데이터 원본 보존

	1. 원본 보존

		1) 원본데이터와 그것의 카피본을 만든다

			[...배열] 이거를 사용





part 1-17 Vue의 라이프사이클을 어디다 쓰냐면

	1. 라이프사이클

		1) create단계

			=> 데이터만 존재하는 단계



		2) mount단계

			=> <template> 사이에 있던걸 실제 HTML로 바꿔줌



		3) 컴포넌트 생성

			=> index.html에 장착



		4) update단계

			=> data가 변하면 컴포넌트가 재렌더링됨



		5) unmount단계

			=> 컴포넌트가 삭제됨





	2. 함수 적용법

		function() {}

			or

		(() => {})

			=> 이거는 바깥에 있는 this를 쓸수있음




---------------------------------
##part 2-1 Blog 프로젝트 생성과 뷰에서 Bootstrap 4, 5 사용법
	1. bootstrap 설치
		1) https://getbootstrap.kr/docs/5.3/getting-started/introduction/ 참고
		
		2) npm install bootstrap@5 (5버전 설치시)
			main.js 에
				import 'bootstrap'
				import 'bootstrap/dist/css/bootstrap.min.css'
				
				
##part 2-2 블로그 글목록을 만들어보자 & 데이터바인딩, props 복습
	복습하는 내용
	
	
##part 2-3 vue-router 설치와 기본 라우팅
	1. 라우터 설치 및 적용
		1) npm install vue-router@4
		2) router.js 코드 넣기
		import { createWebHistory, createRouter } from "vue-router";

		const routes = [
		  {
			path: "/경로",
			component: import해온 컴포넌트,
		  }
		];

		const router = createRouter({
		  history: createWebHistory(),
		  routes,
		});

		export default router; 
		
		3) main.js 코드 추가
			import router from './router'
			createApp(App).use(router).mount('#app') 
		
		4. router.js에 설정 후
			<router-link to="/경로"> 
			or 
			router-view사용 => props전송가능
			
			
##part 2-4 상세페이지 200만개 만들기 (URL 파라미터)
	1. 부트스트랩을 설치 시 사용하기 좋은것
		1) mt mb ml 등 마진과 패딩을 클래스명 만으로 줄 수 있다
		
	2. id값에 따라 보여주는 상세페이지가 다르도록 하는 방법
		path에 적은 경로 에 /:id 이런식으로 붙여주면 된다
			=> id에는 정규식을 사용할 수 있다
			=> *이라는것도 있음 이건 여러개 반복
		
	3. $route.params
		파라미터 자리에 기입된것을 다 볼 수 있다
		
	4. 404페이지
		/:anything(.*) 기본형식
			=> 모든 문자라는 정규식
			=> 이건 무조건 제일 마지막
			
			
##part 2-5 심심할까봐 소개하는 Nested routes & push 함수
	1. Nested routes
		1) router.js에서 children을 생성
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
		=> 이런형식
		
	2. push
		$router.push('/경로') 를 통해 화면 이동이 가능하다
		그 외에도 go back 등 많은 기능이 있는데 그거는 필요할떄 찾기
		
		
##part 2-6 라우터 나머지 기능들 (hash mode, guards)
	1. 라우터 해쉬
		기본 history는 createWebHistory인데 이걸 createWebHashHistory로 바꾸면
		URL에 전부 #이 붙은 채로 시작
		왜 # 이걸 붙이냐면 URL에서 # 뒤에 있는 내용들은 절대 서버로 전달되지 않아서 그렇습니다.
		그래서 서버가 라우팅을 채가는 일을 방지할 수 있고
		Vue router에게 온전히 라우팅을 맡길 수 있는 것입니다. 
		그래서 님들이 서버가 없으면 # 붙는 hash 라우터로 사이트를 만드는 것도 좋은 선택입니다. 
		
	2. HTML5 mode
		누군가 /detail 이라고 URL란에 입력하면 실은 이건
		Vue router로 /detail을 보여주세요~가 아니라
		서버에 /detail 페이지를 요청해주세요~ 라는 뜻입니다. 
		그래서 Vue가 라우팅을 해주기 전에 서버가 /detail 페이지를 보여주려고 할 수도 있습니다.
		근데 서버에 아무 기능을 개발안해놨으니 404페이지가 뜨거나 그럴 수 있습니다.  
		그래서 이걸 방지하려면 서버에다가 "어떤 사람이 /어쩌구로 접속하면 그냥 Vue에게 라우팅 맡겨주세요~" 라고 미리 기능개발이 필요합니다. 
		
	3. Navigation guards
			1. 네비게이션해주기 전에 실행할 수 있는 코드, 그니까 hook 같은 거라고 보면 되겠습니다. 
				const routes = [
				  {
					path: "/hello",
					component: HelloWorld,
					beforeEnter: ()=>{
					  if (로그인했냐 == false) {
						return '/login'
					  }
					}
				  }
				];
				=> beforeEnter를 사용
			
			2. beforeEnter: (to, from)
				const routes = [
				  {
					path: "/hello",
					component: HelloWorld,
					beforeEnter: (to, from)=>{
					  return to.fullPath
					}
				  }
				];
				
				첫 파라미터는 목적지 페이지, 
				둘째 파라미터는 출발 페이지입니다. 
					to.fullPath하면 전체 경로 to.params.id 하면 id 파라미터 return false는 라우팅 중단
					return이 없으면 그냥 원래의 route인 /hello로 잘 이동시켜줍니다. 
					
					
		즉 라우팅 전에 뭔가 실행하고 싶으면 beforeEach() 혹은 beforeResolve()를 쓰면 되고
		라우팅 하고나서 뭔가 실행하고 싶으면 afterEach() 쓰면 됩니다. 
		
		
		Vue 컴포넌트 안에서도 navigation guard 쓸 수있으며 
			beforeRouteEnter(){}
			beforeRouteUpdate(){} 
			라는 것들을 lifecycle hook쓰는 위치에다가 쓰면 됩
			파라미터는 두개 입력가능한데 각각 목적지인 to, 출발지인 from을 의미
			특정 페이지로 접속했을 때 ajax 요청하고 그럴 일이 있으면 저기다가 쓰시면 됩니다
			
			
##part 2-7 만든 Vue 사이트 build & Github Pages로 배포하려면
	1. 처음 경로를 다르게 하고싶다면 (App.vue가아닌 다른 페이지를 호출)
		vue.config에서 publicPath 공간에 /님이만든 repository이름을 적어주면됩니다
		
		이거 그 외 또 설정하는거 있는데 그거는 내일 보자고!!
		그외 설정은 history: createWebHistory(process.env.BASE_URL), 이렇게 적어줘야한다
  		그리고 만약 그냥 APP.vue로 배포를 한다면  

		const { defineConfig } = require('@vue/cli-service')
		
		module.exports = defineConfig({
		  transpileDependencies: true,
		  publicPath: process.env.NODE_ENV === 'production'
		    ? './'
		    : '/'
		})
	이렇게 경로를 바꿔줘야한다

----------------------------------
## part 3-1 뷰 인스타그램 프로젝트 생성 & 레이아웃 만들기
	기본설정을함
	

## part 3-2 저번시간 숙제 & style 속성 데이터바인딩
	저번시간 숙제함 (부모가 자식의 자식에게 데이터를 보내는것)
	
	1. style
		html에서 스타일을 쓸떄 -(대쉬)를 사용할 수 없어서 기존 css에서 작성하던것과 다르게 작성해야함

## part 3-3 서버로 ajax 요청하는 더보기 버튼 만들기
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
		  
		  
## part 3-4 탭 만들기 & 탭으로 사진 업로드 페이지 만들기
	1. 탭 만들기
		1) 탭의 대한 현재상태를 데이터로 만든다
		2) 상태에 따라 HTML이 어떻게 보일지 만든다
		
		
		
## part 3-5 서버없이 업로드한 이미지 다루기 (잡기술)
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
				
				
## part 3-6 글 발행기능 만들기 (이쯤 되면 혼자서도 잘함)
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


   ## part 3-10 Vuex 2 : store에 있는 state 데이터 바꾸는 법
	1. state의 값을 바꾸는 법
		1) store.js에 state수정방법 정의
		2) store.js에 수정요청
		3) store.js에 메소드 추기
			mutations: {
				함수(state){
					state.데이터 = "내가바꾸고 싶은 것"
				}
			}
		4) 컴포넌트에서 store.js에 수정요청
			$store.commit('함수')
			
		=> 이게 올바른 사용법임
		
		5) state 값 변경요청을 할 때 data도 같이 보낼 수 있다
			$store.commit('함수', data)
			
		6) store.js에서 매개변수는 대부분
			state, payload이런식으로 작명한다
			
			
## part 3-11 숙제해설 : 좋아요 & 좋아요 취소기능 만들기
	1. 좋아요 눌렀는지 안눌렀는지 확인하는방법
		눌렀는지 안눌렀는지에대한 변수를 하나 지정하자
		
		
## part 3-12 Vuex 3 : actions 항목을 알아보자
	1. action
		메소드 안에는 ajax를 쓰는 곳임
		mutation에도 써도되는데 쓰면 안되는 이유는 state값을 순차적으로 바꿀 떄
		어떤값을 순차적으로 바꿀 때 특히 ajax에서 오래걸리는게 있다면 이것을 생각하면서 바꿔야 하기 때문에
		문제가 있을 수있어 action안에 적는다
		
		1) 	actions: {
				getData() { 
					바꾸기
				}
			}
			
		2) $store.dispatch('getData) 를 통해 actions를 호출
		
		3) actions에서도 commit를 통해 mutations을 호출 할 수 있는데
		이럴 때는 작동시킬 함수의 파라미터에 context를 넣어줘야함
			=> getData(context) {
			
		4) context.commit('setMore', res.data) 그리고 이렇게 actions함수에서 쓰면 됨
		
		5) 즉
			1  dispatch('함수')
			2  ajax로 데이터 가져옴
			3  mutations를 이용해서 state에 저장
			
	
## part 3-13 Vuex 4 : mapState를 사용하면 편리할 수도 있음
	1. computed
		=> 계산 결과를 저장하는 함수들을 적을 때는
			이게 처음 페이지 로드될 때 한번만 호출하고 그리고 그 값을 간직만 하고 뱉어줌 
			즉 한번 더 실행을 안한다는 뜻임
			물론 값이 변경되면 바뀌긴함
			
			그리고 얘는 함수이름만 써야됨 소괄호 쓰는거아님
			계산 결과를 저장하는 놈이기 때문
			
			
	2. mapState
		computed에서는 항상 return 값을 적용해줘야 하기때문에 코드가 길어질 수 있음
		그래서 사용하는거임
		
		1) import {mapState} from 'vuex'; 선언
		2) ...mapState(['name', 'likes'])
			=> 이런식으로 state에 있는걸 저렇게 적을 수 있음
		3) 그리고 그냥 {{name or likes}} 이렇게 적으면 state값을 쓸 수 있음
		4) 만약 name', 'likes이런게 변수명이 겹칠 수 있는데
			이럴때는 object형식으로 써도됨
			({작명 : 'name'})
			
		5) 그리고 mutations 함수를 수정할 때 편하게 사용하려면
			...mapMutations(['함수'])
			이렇게 적어서 호출도 가능하다
				=> methods에 적기
				=> import {mapMutations} from 'vuex'; 호출해야댐
				그리고 event에서는 그냥 함수명(전달할 데이터)
				이렇게 편하게 적용이 가능함
				
		6) 그 외 actions도 가능함 나중에 찾아보기 ㅋㅋ
		
		
## part 3-14 Progressive Web App & 셋팅
	1. PWA
		웹사이트를 앱처럼 발행하는것
		사실 웹페이지 홈화면에 바로가기 추가
		
	2. 적용
		1) vue add pwa or npm install @vue/cli-plugin-pwa
		2) manifest.json / service-worker.js가 생겼으면 성공
		3) service-worker.js는 웹페이지 구동에 필요한 html css js img를 하드에 저장해놓고
			그걸 사용함
			
	3. 실제 APK파일을 만드려면
		구글링 ㅋㅋ
		
	여기는 좀 많이 알아봐야할듯
	

## part 3-15 버그찾고 싶으면 Vue devtools 설치합니다
	1.  Vue.js devtools 사용하면 좋음
		<> 버튼 누르면 그 컴포넌트에 해당하는 요소를 element 탭에서 보여주고 
		네모난 버튼 누르면 VScode에서 해당 컴포넌트 열어줍니다
		

## part 3-16 Composition API 사용법 (팔로워 페이지 만들기)
	1. Composition API 
		기본적으로 vue는 options가 있고 Composition 사용법이 있음
			1) option은 data () method() 이런거 만들어서 사용법
			2) Composition은 그냥 쭈루룩 쓰는거임
				=> setup() {}
				
	2. ref
		1) 변수에 값을 넣을 때 ref를 써야 실시간 반영이됨
		2) 그리고 return으로 변수값을 {} 에 넣어줘야 위에서 사용가능
			return {변수}
		3) setup에서 작성하는건 created hook안에 작성하는 거랑 비슷하다
		4) 그리고 값 변경할 때 ref를 썻다면 이것을 쓸때는 변수.value 이렇게 써야함
		5) setup에서는 mounted를 onMounted를 쓰고 이걸 함수처럼 (() => {}) 이런식으로 써야함
			(임포트 해오기)
			
			
	3. 퍼블릭에 데이터 넣으면 
		axios.get('/follower.json').then((a) 이렇게 파일을 axios로 호출가능
		
		
## part 3-17 Composition API 사용법 2 & 간단한 검색기능
	1. 컴포넌트 마다 css적용 되는것
		그냥 컴포넌트에 쓰고 난 후 다른 컴포넌트에서 쓰면 css가 적용됨
			그래서 각 컴포넌트에다가 적용하고 싶으면 style에 scoped를 쓰면됨
				이렇게 쓰면 내가 작성한 것들이 다른 곳에 퍼지지 않음
				
	2. reactive
		1) ref랑 똑같음
		2) 보통 array, object를 집어넣을 때 사용 / ref는 나머지
		
	3. toRefs(props)
		setUp(props, data)
			props => 이건 프롭스
			data => 이거는 emit이나 뭐 다른것 등등있음
		
		그냥 props를 쓰면 실시간 반영이 안될 수 있음
		그래서 props 전체를 실시간 반영으로 바꾼다고 할 때 저걸 사용
		
	4. useStore()
		useStore().state.저장한값 
			=> 이런식으로 쓸 수 있음
			
		그 외 useStore().commit dispatch 등 사용 가능
		
	5. mapState
		composition안에서는 이거 못씀 vuex5 버전에서는 사용 가능
		
		
## part 3-18 Vue 강의 나가는 말 (강의 그만들으셈)
	1. 포트폴리오
		https://codingapple.com/to-make-a-portfolio/


