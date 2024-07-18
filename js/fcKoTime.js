export async function koreaTime() {
    try {
        const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Seoul'); // HTTPS 사용
        if (!response.ok) {
            throw new Error('인터넷 연결이 원활하지 않습니다.');
        }
        const data = await response.json();
        const koreaTime = new Date(data.datetime);
        const hours = koreaTime.getHours();
        const minutes = koreaTime.getMinutes();

        setTheme(hours, minutes);

        // 테스트용==========================================
        /*
        let simulatedTime = koreaTime.getTime();

        setInterval(() => {
            simulatedTime += 600 * 1000; 
            const simulatedDate = new Date(simulatedTime);
            const hours = simulatedDate.getHours();
            const minutes = simulatedDate.getMinutes();

            setTheme(hours, minutes);
        }, 100);
        */
    } catch (error) {
        console.error('시간을 불러올 수 없습니다.:', error);
    }
}

function setTheme(hours, minutes) {
    const logoSlide = document.getElementById('logoSlide');
    const logoImg = document.getElementById('logoImg');
    let backgroundColor, filterValue;

    const time = hours + minutes / 60; // 시간과 분을 소수로 변환

    // 밝기 계산
    let brightness;
    if (time >= 9 && time < 17) { // 오전 9시부터 오후 5시까지
        brightness = 1 - (time - 9) / 16; // 오전 9시의 최대 밝기에서 점진적으로 감소
    } else if (time >= 17 && time < 21) { // 오후 5시부터 오후 9시까지
        brightness = 0.5 - (time - 17) / 8; // 오후 5시부터 오후 9시까지 더 빠르게 어두워짐
    } else if (time >= 21 || time < 5) { // 오후 9시부터 오전 5시까지
        brightness = 0; // 최소 밝기
    } else { // 오전 5시부터 오전 9시까지
        brightness = (time - 5) / 4; // 오전 5시부터 오전 9시까지 부드럽게 밝아짐
    }

    const brightnessValue = Math.round(255 * brightness);
    backgroundColor = `rgba(${brightnessValue}, ${brightnessValue}, ${brightnessValue}, 1)`;

    // 형광 효과 계산 (변경 없음)
    let glow;
    if (time >= 17 && time < 24) { // 오후 5시부터 자정까지
        glow = (time - 17) / 7; // 오후 5시부터 자정까지 형광 효과 증가
    } else if (time >= 0 && time < 9) { // 자정부터 오전 9시까지
        glow = 1 - time / 9; // 자정부터 오전 9시까지 형광 효과 감소
    } else {
        glow = 0; // 나머지 시간은 형광 없음
    }
    filterValue = `drop-shadow(0 0 20px rgba(0, 255, 0, ${glow})) brightness(${1 + brightness})`;

    logoSlide.style.backgroundColor = backgroundColor;
    logoImg.style.filter = filterValue;
}

window.onload = koreaTime;

// 시간 증가 및 감소 기능 추가
let currentTime = new Date();

const increaseTime = () => {
    currentTime.setHours(currentTime.getHours() + 1);
    console.log(`Time increased: ${currentTime}`);
    setTheme(currentTime.getHours(), currentTime.getMinutes());
};

const decreaseTime = () => {
    currentTime.setHours(currentTime.getHours() - 1);
    console.log(`Time decreased: ${currentTime}`);
    setTheme(currentTime.getHours(), currentTime.getMinutes());
};

// 키보드 이벤트 리스너 추가
document.addEventListener('keydown', (e) => {
    if (window.currentIndex === 0) { // 현재 슬라이드 인덱스가 0일 때
        if (e.key === 'ArrowUp') {
            increaseTime();
        } else if (e.key === 'ArrowDown') {
            decreaseTime();
        }
    }
});
