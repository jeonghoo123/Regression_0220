
//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
let data_sets=[]
class DataSet{
	constructor(sub_title,menuNum){this.sub_title=sub_title}
	user_fill=""
	sub_content=[]
	sub_img=[]
	set_content(content){this.sub_content.push(content)}
	set_img(num,obj){
		if(!this.sub_img[num]){this.sub_img[num]=[]}
		this.sub_img[num].push(obj)
	}
	set_fill(ufill){this.user_fill=ufill}	 
}

let d1 = new DataSet("선형회귀분석")//메인 타이틀 //메뉴번호
d1.set_content("공부시간과 성적과의 관련성의 선형성을 가진 연속적인 데이터를 활용하여 예상값을 추출하는 모델")//서브 타이틀
d1.set_img(0,{imgtitle:"일부코드샘플",imgurl:"https://drive.google.com/file/d/1JmHc19Xbm6NEerurR9NnoloyX7slF04H/view?usp=drive_link",imglog:"시험성적데이터를 임의로 만들어 선형회귀분석 코드",sourceurl:"https://github.com/jeonghoo123/Regression_0220/blob/main/LinearRegression/examp_lg.py"})//이미지타이틀
d1.set_img(0,{imgtitle:"산점도데이터분석",imgurl:"https://drive.google.com/file/d/1tCx1VVvoaORDM2U7TVSYX6PSJfRON8Fa/view?usp=drive_link",imglog:"문제데이터의 선형성 관계 파악을 위한 산점도 그래프 분석",sourceurl:"https://github.com/jeonghoo123/Regression_0220/blob/main/LinearRegression/examp_lg.py"})//이미지타이틀
d1.set_img(0,{imgtitle:"데이터전처리 표준화",imgurl:"https://drive.google.com/file/d/1CP7Qwi1aqVgfBwHzKSKSJ5aeZfEJ7SFK/view?usp=drive_link",imglog:"훈련시 모델의 올바른 학습을 위해 데이터를 정규분포로 표준화 전처리 시행",sourceurl:"https://github.com/jeonghoo123/Regression_0220/blob/main/LinearRegression/examp_lg.py"})//이미지타이틀
d1.set_img(0,{imgtitle:"모델의 구성과 훈련",imgurl:"https://drive.google.com/file/d/1_6VcJBgMBA5f0_VP-l2WwErwz4TIfN2F/view?usp=drive_link",imglog:"Sequential모델 및 압력출력레이어 작성과 mse 오차손실함수 및 역전파시적용 될 SGD(경사하강법) 최적화함수와 200회 훈련 실행",sourceurl:"https://github.com/jeonghoo123/Regression_0220/blob/main/LinearRegression/examp_lg.py"})//이미지타이틀
d1.set_img(0,{imgtitle:"훈련결과시각화",imgurl:"https://drive.google.com/file/d/10VjZbxebmZmVWhiF2FRtE4KLvi014zpE/view?usp=drive_link",imglog:"시각화 그래프 판단시 120회 훈련에서 훈련 조기종료를 검토할 수도 있다.",sourceurl:"https://github.com/jeonghoo123/Regression_0220/blob/main/LinearRegression/examp_lg.py"})//이미지타이틀
d1.set_img(0,{imgtitle:"예측의 예측",imgurl:"https://drive.google.com/file/d/1ThF40yXaY3i4A79uIqk82L3MRMmwWgJH/view?usp=drive_link",imglog:"임의의 데이터를 생성하여 모델의 예측 결과를 표기",sourceurl:"https://github.com/jeonghoo123/Regression_0220/blob/main/LinearRegression/examp_lg.py"})//이미지타이틀


d1.set_content("당뇨환자에 대한 1년 상태 예측, 예측값은 연속 데이터로 출력")
d1.set_img(1,{imgtitle:"샘플소스코드",imgurl:"https://drive.google.com/file/d/1uvBnhHFrj2xJ4Dm8Bz_6nzwHhqgvXBXs/view?usp=drive_link",imglog:"당뇨환자에 대한 나이, 성별, bmi수치, bp 수치 등 10개의 항목을 측정하여 1년 후 당뇨수치에 대한 증감데이터",sourceurl:"https://github.com/jeonghoo123/Regression_0220/blob/main/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"소스데이터 수신 및 분석",imgurl:"https://drive.google.com/file/d/1_RA8IB_RuAvDnJ7pDU1JXSHf7Oo5V1t6/view?usp=drive_link",imglog:"sklearn의 diabetes 데이터를 수신하여 항목별 분석과 수치 값과 1년 후 변화 질량에 대한 확인",sourceurl:"https://github.com/jeonghoo123/Regression_0220/blob/main/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"데이터 분석을 위한 시각화",imgurl:"https://drive.google.com/file/d/1B9w2LARMx55TbPiDD5kGufmE2qrXczzI/view?usp=drive_link",imglog:"1년 후 질량과 측정 된 수치의 연고나성 분석을 위한 산점도 그래프",sourceurl:"https://github.com/jeonghoo123/Regression_0220/blob/main/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"1.선택데이터",imgurl:"https://drive.google.com/file/d/1-W54NOqG66cUi-MZfZtTX-0yqSDX2c2Y/view?usp=drive_link",imglog:"bmi 수치는 대각방향의 선형형태를 띄고 있어 1년 후 질량과 연관이 있는 데이터",sourceurl:"https://github.com/jeonghoo123/Regression_0220/blob/main/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"2.선택데이터",imgurl:"https://drive.google.com/file/d/1AxQE3UaLAzjcNiYbxt3-VulSkvhekrue/view?usp=drive_link",imglog:"수치는 대각방향의 선형성을 띄고 있어 1년후 질량과 연관이 있는 데이터",sourceurl:"https://github.com/jeonghoo123/Regression_0220/blob/main/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"데이터 최종확인",imgurl:"https://drive.google.com/file/d/1aMnNjSyfqK0iQjVuaI1lPm0FmtCwK5NC/view?usp=drive_link",imglog:"성별데이터는 방향의 선형성이 없으므로 1년후 질량과 연관이 없음으로 판명되어 분석에서 제외",sourceurl:"https://github.com/jeonghoo123/Regression_0220/blob/main/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"모델 구성과 훈련실행",imgurl:"https://drive.google.com/file/d/1VLXv2rWCaS4EUoBaQBePTCwwWLRi28fj/view?usp=drive_link",imglog:"순차모델구성과 입출력 레이 구성, MSE 손실함수와 SGD를 최적화함수이 사용하여 컴파일 및 훈련 13회 실행",sourceurl:"https://github.com/jeonghoo123/Regression_0220/blob/main/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"훈련결과 시각화",imgurl:"https://drive.google.com/file/d/10vqpmsdKWkMwgTgUfp3tTp8TQGJ7HUfc/view?usp=drive_link",imglog:"100회 이상의 훈련후 시각그래프 판단하에 12회 훈련이 최적화로 판단되어 12회 훈련으로 조기종료함.",sourceurl:"https://github.com/jeonghoo123/Regression_0220/blob/main/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"테스트데이터 준비와 예측결과",imgurl:"https://drive.google.com/file/d/1E8G0B7c2H3CxfnsONPlRCbpMmK9I9L-D/view?usp=drive_link",imglog:"테스트 데이터 10개를 일부 추출하여 예측 실행, 결과는 오차확률 4% 수치대로 접근",sourceurl:"https://github.com/jeonghoo123/Regression_0220/blob/main/LinearRegression/diabet.py"})//이미지타이틀



d1.set_content("보스턴 지역의 환경에 따른 하우스 가격 데이터로 예측 값은 연속데이터로 출력")
d1.set_img(2,{imgtitle:"샘플",imgurl:"https://drive.google.com/file/d/1enuX7w4G7mv8jfL3bPAfojdmC8rWUo9F/view?usp=drive_link",imglog:"총 12개 유형의 데이터로 범죄율, 주거토지비율, 회사입지비율, 강의 경계 여부, 일산화질소 농도, 방의 갯수 등의 13개의 데이터를 분석하여 집가격을 예측하는 시나리오",sourceurl:"https://github.com/jeonghoo123/Regression_0220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"산점도 분석코드",imgurl:"https://drive.google.com/file/d/1uvpn_x0bzTGrZz5JhCb4voWlLIXCFu2Y/view?usp=drive_link",imglog:"데이터연관성 분석을 위해 데이터 항목별 산점도 시각화",sourceurl:"https://github.com/jeonghoo123/Regression_0220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"1. 데이터 분석",imgurl:"https://drive.google.com/file/d/1EUas5QWCLGmtCbuWezZiv_5EuL7qg7Px/view?usp=drive_link",imglog:"분석결과 5번 인덱스 그래프의 선형방향성 확인 선택",sourceurl:"https://github.com/jeonghoo123/Regression_0220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"2. 데이터 분석",imgurl:"https://drive.google.com/file/d/1mx05_aXzuXPc9CGW9BJJxgNucczLiQAC/view?usp=drive_link",imglog:"분석결과 7번 인덱스 그래프의 선형방향성 확인 선택",sourceurl:"https://github.com/jeonghoo123/Regression_0220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"선택 데이터",imgurl:"https://drive.google.com/file/d/1INUOw13fSaRtPSKAuVMHSpoIrJp7kN8-/view?usp=drive_link",imglog:"5번 인덱스 데이터와 7번 인덱스 데이투의 선형성 확인결과로 훈련데이터로 추출후 선형성 재확인",sourceurl:"https://github.com/jeonghoo123/Regression_0220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"데이터 전처리",imgurl:"https://drive.google.com/file/d/1O0XFDpIvpsC9L01qhiXR24rKBNBDRwAy/view?usp=drive_link",imglog:"훈련데이터의 수치 폭을 확인후 정규분포데이터로 표준화 실행",sourceurl:"https://github.com/jeonghoo123/Regression_0220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"모델 구성과 훈련",imgurl:"https://drive.google.com/file/d/1dSD-AyvAFEMvLFmEzLoacV1-KE57tWET/view?usp=drive_link",imglog:"순차모델 구성과 입출력레이어 추가, MSE 손실함수 및 SGD 최적화 함수를 적용하여 컴파일, 10회 훈련 실시",sourceurl:"https://github.com/jeonghoo123/Regression_0220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"훈련결과 시각화",imgurl:"https://drive.google.com/file/d/16yj10uj-nxOkGjJIImGoS1yxIHuXocz_/view?usp=drive_link",imglog:"훈련결과 손실값을 시각화 그래프 출력 결과 분석 및 확인",sourceurl:"https://github.com/jeonghoo123/Regression_0220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"테스트데이터 추출 및 정규화",imgurl:"https://drive.google.com/file/d/1VlPAMeFO3CEAuvdn4l1ltPf55SWyDYNm/view?usp=drive_link",imglog:"테스트 데이터 필드 추출 및 정규화 실행",sourceurl:"https://github.com/jeonghoo123/Regression_0220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"테스트 결과",imgurl:"https://drive.google.com/file/d/1miQMl7wnD8akZ3DSKavSZeTO9UAvVr44/view?usp=drive_link",imglog:"테스트 데이터 예측 오차 확률 23.05%",sourceurl:"https://github.com/jeonghoo123/Regression_0220/blob/main/LinearRegression/boston_housing.py"})//이미지타이틀



d1.set_fill("서버의 보안성과 각 수행기능별 패턴을 분리하기 위해 Spring WAS 와 사용자 View 기능을 위해 웹브라우져에서 일반적인 작동이 가능한 HTML5 를 구현하며 데이터베이스 연동 대신 파일로 회원목록 저장")//사용자 에필로그
data_sets.push(d1)

// menu2 =============================================================
let d2 = new DataSet("공통모듈구현")//메인타이틀
d2.set_content("공통모듈구현을 작성합니다.")//서브 타이틀
d2.set_img(0,{imgtitle:"요구사항명세서작성",imgurl:"https://drive.google.com/file/d/1nnSKw0su1NKkr-4O3bXNv33_ZZ8D54Qk/view?usp=drive_link",imglog:"작성된 요구사항 명",sourceurl:"https://docs.google.com/document/d/1fYO-WllL1nq8-qJC6Aj8fTeQplv7hvQzxUfRQAgAamo/edit?usp=drive_link"})//이미지타이틀

d2.set_content("테스트케이스를 작성합니다.")
d2.set_img(1,{imgtitle:"요구사항명세서작성",imgurl:"https://drive.google.com/file/d/1nnSKw0su1NKkr-4O3bXNv33_ZZ8D54Qk/view?usp=drive_link",imglog:"작성된 요구사항 명",sourceurl:"https://docs.google.com/document/d/1fYO-WllL1nq8-qJC6Aj8fTeQplv7hvQzxUfRQAgAamo/edit?usp=drive_link"})//이미지타이틀

d2.set_content("단위테스트를 작성합니다.")
d2.set_img(2,{imgtitle:"요구사항명세서작성",imgurl:"https://drive.google.com/file/d/1nnSKw0su1NKkr-4O3bXNv33_ZZ8D54Qk/view?usp=drive_link",imglog:"작성된 요구사항 명",sourceurl:"https://docs.google.com/document/d/1fYO-WllL1nq8-qJC6Aj8fTeQplv7hvQzxUfRQAgAamo/edit?usp=drive_link"})//이미지타이틀


d2.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d2)

// menu3 =============================================================
let d3 = new DataSet("서버프로그램구현")//메인타이틀
d3.set_content("회원가입구현")//서브타이틀
d3.set_content("회원로그인구현")
d3.set_content("회원리스트연동")
d3.set_content("테스트케이스 작성")
d3.set_content("목오브젝트생성 및 테스트 구현")
d3.set_content("결과보고서 작성")
d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d3)

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현")//메인타이틀

d4.set_content("배치스케줄구현")//서브타이틀

d4.set_content("배치프로그램테스트 구현")

d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d4)
