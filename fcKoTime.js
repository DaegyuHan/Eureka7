export async function koreaTime() {
    try {
        const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Seoul');
        const data = await response.json();
        const koreaTime = new Date(data.datetime).toLocaleString('ko-KR', {
            timeZone: 'Asia/Seoul',
            hour: '2-digit',
            minute: '2-digit'
        });
        document.getElementById('lookTime').innerText = koreaTime;
    } catch (error) {
        console.error('시간을 불러올 수 없습니다.:', error);
        document.getElementById('lookTime').innerText = '시간을 불러올 수 없습니다.';
    }
}

// 페이지 로드 시 시간 업데이트
window.onload = koreaTime;
