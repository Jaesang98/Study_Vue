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
				
