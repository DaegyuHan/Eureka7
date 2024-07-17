/*
export async function koreaTime() {
    try {
        const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Seoul'); // HTTPS 사용
        if (!response.ok) {
            throw new Error('인터넷 연결이 원활하지 않습니다.');
        }
        const data = await response.json();
        const koreaTime = new Date(data.datetime).toLocaleString('ko-KR', {
            timeZone: 'Asia/Seoul',
            hour: '2-digit',
            minute: '2-digit'
        });
        console.log('Korea Time:', koreaTime); // 콘솔에 시간 로그 추가
        document.getElementById('lookTime').innerText = koreaTime;
    } catch (error) {
        console.error('시간을 불러올 수 없습니다.:', error);
        document.getElementById('lookTime').innerText = '시간을 불러올 수 없습니다.';
    }
}

// 페이지 로드 시 시간 업데이트
window.onload = koreaTime;
*/

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
        // 마무리전에 주석처리 혹은 삭제하기 및 버튼으로 발표용 테스트 기능 구현예정
        
        let simulatedTime = koreaTime.getTime();

        setInterval(() => {
            simulatedTime += 600 * 1000; 
            const simulatedDate = new Date(simulatedTime);
            const hours = simulatedDate.getHours();
            const minutes = simulatedDate.getMinutes();

          
            setTheme(hours, minutes);
        }, 100);

        // 테스트용=========================================
        
    } catch (error) {
        console.error('시간을 불러올 수 없습니다.:', error);
    }
}

function setTheme(hours, minutes) {
    const logoSlide = document.getElementById('logoSlide');
    const logoImg = document.getElementById('logoImg');
    let backgroundColor, filterValue;

    if (hours >= 6 && hours < 18) {
       
        const brightness = (hours - 6 + minutes / 60) / 12; 
        const brightnessValue = Math.round(255 * brightness);
        backgroundColor = `rgba(${brightnessValue}, ${brightnessValue}, ${brightnessValue}, 1)`;
        filterValue = `drop-shadow(0 0 20px rgba(0, 255, 0, ${1 - brightness})) brightness(${1 + (1 - brightness)})`; 
    } else {
        
        const adjustedHours = hours >= 18 ? hours - 18 : hours + 6;
        const darkness = (adjustedHours + minutes / 60) / 12; 
        backgroundColor = `rgba(0, 0, 0, ${0.5 + 0.5 * darkness})`; 
        filterValue = `drop-shadow(0 0 20px rgba(0, 255, 0, ${darkness})) brightness(${1 + darkness})`; 
    }

    logoSlide.style.backgroundColor = backgroundColor;
    logoImg.style.filter = filterValue;
}

window.onload = koreaTime;
