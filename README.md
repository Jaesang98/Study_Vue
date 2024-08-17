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


   ##part 3-10 Vuex 2 : store에 있는 state 데이터 바꾸는 법
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
			
			
##part 3-11 숙제해설 : 좋아요 & 좋아요 취소기능 만들기
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
