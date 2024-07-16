/*

============================================================================================

이 스크립트는 html의 슬라이더(화면)를 이전 버튼과 다음 버튼 및 키보드 좌 우 방향키를 통해 조작가능한 슬라이드 기능을 구현하는 자바 스크립트입니다.
개인적인 복습 및 궁금하신 팀원분이 계시면 도움이 될 것 같아 해당 자바 스크립트의 작동원리에 대한 주석을 작성했습니다.
해당 주석은 직접 타이핑해서 작성하였습니다.

============================================================================================

// 슬라이더와 버튼 가져오기
const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

위 코드는 document.getElementById로 슬라이더와 버튼을 가져옵니다.
(요소를 가져오는 이유는 html 문서에 있는 id를 통해 일치하는 요소를 가져와 코드로 조작하기 위해서입니다. 위 코드에서는 각각 슬라이더 , 이전 버든 , 뒤로 버튼입니다.)
(id가 아닌 class일 경우document.getElementsByClassName를 사용합니다.)
(document.~는 Html문서를 의미합니다.)

============================================================================================

// 현재 슬라이드 인덱스 변수 초기화
let currentIndex = 0;

currentIndex 변수는 슬라이더의 인덱스(순서)를 뜻하고 첫번째 부터 보여주어야 하므로 0으로 초기화해놓습니다.

============================================================================================

// 버튼 상태를 업데이트하는 함수
const updateButtons = () => {
    // 첫 번째 슬라이드에서는 이전 버튼 숨기기
    prevBtn.classList.toggle('hidden', currentIndex === 0);
    // 마지막 슬라이드에서는 다음 버튼 숨기기
    nextBtn.classList.toggle('hidden', currentIndex === 4);
};

위 코드는 토글(.toggl) 기능과 비교 연산자인 === 를 통해 각각의 조건이 맞을 경우,
(currentIndex === 0 를 예시로 들면 currentIndex가 0과 같은지를 의미합니다.)

즉 첫번쨰 슬라이더일 경우와 마지막 슬라이더의 인덱스에 해당하는 경우에 토글 기능으로 이전 버튼과 다음 버튼을 숨깁니다.
( 예시 : prevBtn.classList.toggle('hidden', currentIndex === 0);
      이전 버튼.클래스를 조작.토글.('hidden클래스를 추가해서 숨김',currentIndex의 값이 다음과 같을경우 0); 
(0번부터 시작하기떄문에 인덱스0번이 1번 슬라이더 인덱스4번이 5번슬라이더입니다.)

============================================================================================

// 다음 버튼 클릭 시 슬라이드를 다음으로 이동
document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < 4) { // 슬라이드 인덱스가 마지막이 아닌 경우
        currentIndex++; // 인덱스를 증가
        slider.style.transform = `translateX(-${currentIndex * 100}%)`; // 슬라이드를 이동
        updateButtons(); // 버튼 상태 업데이트
    }
});

위 코드는 document.getElementById를 통해 가져온 다음 버튼이 addEventListener('click', () 이용하여 클릭되었을 경우,
if 문을 통하여 currentIndex < 4 를 통해 다음 버튼을 클릭했을 경우에 해당 인덱스가 마지막이 아닌 경우에는 currentIndex++ 를 통하여 인덱스를 
증가시키고 slider.style.transform = `translateX(-${currentIndex * 100}%) currentIndex의 translateX를 조작하여 인덱스의 슬라이드를 이동시켜 다음 슬라이드로 넘어갑니다.
(css에서 슬라이더의 너비를 100%로 지정했기 때문에 ${currentIndex * 100}% 을 통하여 슬라이더의 수평 이동을 구현합니다.)
(예시로 -${currentIndex * 100) 에서 인덱스(currentIndex)가 0일경우 0x100 을 통하여 translateX를 0%로 조작하여 제자리에 위치하도록 구현하고
1일경우 -1x100을 통하여 마찬가지로 translateX를 -100% 로 조작하여 왼쪽으로 100% 이동하도록 구현하여 두 번째 슬라이드로 움직이게 조작합니다.) 
(css의 ranslateX 는 좌,우 : X축 , translateY 는 위,아래 : Y축 이며 만약 좌우가 아니라 위아래로 조작하고 싶다면 translateY로 조작하면 됩니다.)

updateButtons(); // 버튼 상태 업데이트 부분에서 해당 함수를 호출하는 이유는
마지막에 바로 위에 코드에서 작성한 const updateButtons = () => { 
즉,updateButtons();를 호출하는 이유는 해당 함수가 사이트 이용자가 첫번쨰와 마지막 슬라이드에 있을 경우 각각 다음 과 이전 버튼을 숨기기 위해서 작성했던 함수이기때문에
조건에 맞을 경우 실행하기 위하여 호출합니다.
만약 해당 함수를 호출하지 않을 경우 첫번쨰 슬라이드와 마지막 슬라이드에서 각각 다음 과 이전 버튼이 보이게 됩니다.
혹은 해당 함수가 맨 아래에 위치하지 않을 경우, 예시로 인덱스를 증가하는 currentIndex++; // 인덱스를 증가 위에 있다고 가정 한다면

    if (currentIndex < 4) { // 슬라이드 인덱스가 마지막이 아닌 경우
        updateButtons(); // 버튼 상태 업데이트
        currentIndex++; // 인덱스를 증가
        slider.style.transform = `translateX(-${currentIndex * 100}%)`; // 슬라이드를 이동
      
이 상태 라면 인덱스가 증가하고 슬라이드를 이동시키기전에 첫번째 혹은 마지막 슬라이드인지 확인해버리기 때문에 버튼 숨김이 제대로 작동하지 않는 버그가 발생합니다.
                                    ㄴ(다음 슬라이드로 넘어간 후가 아닌 넘어가기 전 상태)

============================================================================================

// 이전 버튼 클릭 시 슬라이드를 이전으로 이동
document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) { // 슬라이드 인덱스가 첫 번째가 아닌 경우
        currentIndex--; // 인덱스를 감소
        slider.style.transform = `translateX(-${currentIndex * 100}%)`; // 슬라이드를 이동
        updateButtons(); // 버튼 상태 업데이트
    }
});

위 코드는 바로 위의 다음 버튼 클릭 시와 원리는 동일하며 차이점은 이전 버튼 이기 때문에 인덱스를 증가시키는게 아닌 감소시킵니다.
다음 버튼과 똑같이 translateX(-${currentIndex * 100}%를 사용하는 이유는 인덱스가 감소하기때문에
이전 버튼을 눌렀을 경우 translateX의 % 값이 현재 translateX의 % 값보다 줄어들어 다음 슬라이드가 아닌 이전 슬라이드로 이동되기 때문입니다.
즉, 인덱스가 증가한 상태에서 -${currentIndex * 100}% 할 경우 -%가 증가해 오른쪽으로 이동하게 되고 감소한 상태 일 경우 -%가 감소하여 왼쪽으로 이동합니다.

============================================================================================

// 키보드 방향키를 사용하여 슬라이드 이동
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && currentIndex < 4) { // 오른쪽 방향키 및 마지막 슬라이드가 아닌 경우
        currentIndex++; // 인덱스를 증가
        slider.style.transform = `translateX(-${currentIndex * 100}%)`; // 슬라이드를 이동
        updateButtons(); // 버튼 상태 업데이트
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) { // 왼쪽 방향키 및 첫 번째 슬라이드가 아닌 경우
        currentIndex--; // 인덱스를 감소
        slider.style.transform = `translateX(-${currentIndex * 100}%)`; // 슬라이드를 이동
        updateButtons(); // 버튼 상태 업데이트
    }
});

위 코드 역시 바로 위 두 코드와 원리는 동일하며 차이점은 버튼 클릭이 아닌 keydown을 통하여 키보드를 입력했을 시 작동됩니다.
예시로 document.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight' && currentIndex < 4) 부분을 풀어 적는다면
html문서에서.지정한 행위(이벤트)가 발생하면 함수를 호출한다('키를누르면', (이벤트가 발생하면 실행) => { 만약 (눌린 키가 다음과 같을 경우 '키보드 오른쪽 화살표 키' 그리고 인덱스가 4보다 작을 경우)
(e.key의 경우 키를 눌렀을 때를 의미하며 e.key === 'ArrowRight 는 키를 눌렀을때 누른 키가 키보드 오른쪽 화살표 키와 동일한지에 대한 조건문입니다.)
(e.key === 'ArrowRight' 뒤에 논리 연산자인 &&를 사용했기에 AND 또는 그리고 라고 생각하면 됩니다. &&로 인해 currentIndex < 4 까지 조건을 만족해야 합니다.)

============================================================================================

// 페이지 로드 시 초기 버튼 상태를 설정
document.addEventListener('DOMContentLoaded', updateButtons);

이 코드는 사용자가 페이지를 로드했을 경우 초기에 위에서 작성했던 updateButtons 함수를 호출하여
첫번째 슬라이드에서도 이전 버튼이 보이는 버그를 없애기 위한 코드입니다.
첫번째 슬라이드외에도 마지막를 불러왔을 경우 다음 버튼을 없애줍니다. 

풀어쓴다면 document.addEventListener('DOMContentLoaded', updateButtons);
    html에서.해당 동작(이벤트)이 발생한다면('html문서가 로드된다면' , 위에위에위에위에서 작성했던 updateButtons함수를 호출);
(DOMContentLoaded = 리소스가 로드되기를 기다리지 않고 'DOM트리가 로드된다면' 바로 실행됨을 의미합니다.)
(리소스 = 이미지 , 외부 스타일시트 , 외부 스크립트)
(외부는 html문서 안에 넣은 css 나 스크립트가 아닌 것을 뜻합니다.)
(DOM트리는 html의 문서 구조를 뜻합니다 즉, 위의 'DOM트리가 로드된다면' 이말은 html문서가 로드된다면과 같습니다.)

*/

// 슬라이더와 버튼 가져오기
const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// 현재 슬라이드 인덱스 변수 초기화
let currentIndex = 0;

// 버튼 상태를 업데이트하는 함수
const updateButtons = () => {
    // 첫 번째 슬라이드에서는 이전 버튼 숨기기
    prevBtn.classList.toggle('hidden', currentIndex === 0);
    // 마지막 슬라이드에서는 다음 버튼 숨기기
    nextBtn.classList.toggle('hidden', currentIndex === 4);
};

// 다음 버튼 클릭 시 슬라이드를 다음으로 이동
document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < 4) { // 슬라이드 인덱스가 마지막이 아닌 경우
        currentIndex++; // 인덱스를 증가
        slider.style.transform = `translateX(-${currentIndex * 100}%)`; // 슬라이드를 이동
        updateButtons(); // 버튼 상태 업데이트
    }
});

// 이전 버튼 클릭 시 슬라이드를 이전으로 이동
document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) { // 슬라이드 인덱스가 첫 번째가 아닌 경우
        currentIndex--; // 인덱스를 감소
        slider.style.transform = `translateX(-${currentIndex * 100}%)`; // 슬라이드를 이동
        updateButtons(); // 버튼 상태 업데이트
    }
});

// 키보드 방향키를 사용하여 슬라이드 이동
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && currentIndex < 4) { // 오른쪽 방향키 및 마지막 슬라이드가 아닌 경우
        currentIndex++; // 인덱스를 증가
        slider.style.transform = `translateX(-${currentIndex * 100}%)`; // 슬라이드를 이동
        updateButtons(); // 버튼 상태 업데이트
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) { // 왼쪽 방향키 및 첫 번째 슬라이드가 아닌 경우
        currentIndex--; // 인덱스를 감소
        slider.style.transform = `translateX(-${currentIndex * 100}%)`; // 슬라이드를 이동
        updateButtons(); // 버튼 상태 업데이트
    }
});

// 페이지 로드 시 초기 버튼 상태를 설정
document.addEventListener('DOMContentLoaded', updateButtons);
