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
