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

// 키보드 방향키로 슬라이드를 이동하는 이벤트 처리
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
