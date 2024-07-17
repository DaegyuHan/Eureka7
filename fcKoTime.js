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
