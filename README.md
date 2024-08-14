part 1-1 카카오가 리액트 냅두고 왜 Vue 쓰는지 알려드림)
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
