// 방명록 데이터 저장
let guestbookEntries = JSON.parse(localStorage.getItem('guestbookEntries')) || [];
        
// 방명록 데이터 불러오기 및 표시
function displayGuestbookEntries() {
    const guestbookEntriesContainer = document.getElementById('guestbook-entries');
    guestbookEntriesContainer.innerHTML = '';
    
    if (guestbookEntries.length === 0) {
        const noEntriesMessage = document.createElement('p');
        noEntriesMessage.textContent = '!방명록이 없습니다!';
        guestbookEntriesContainer.appendChild(noEntriesMessage);
    } else {
        guestbookEntries.forEach((entry, index) => {
            const entryDiv = document.createElement('div');
            entryDiv.classList.add('entry');
            
            const nameElement = document.createElement('h3');
            nameElement.textContent = entry.name;
            
            const messageElement = document.createElement('p');
            messageElement.textContent = entry.message;
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '삭제';
            deleteButton.addEventListener('click', () => {
                deleteGuestbookEntry(index);
            });
            
            entryDiv.appendChild(nameElement);
            entryDiv.appendChild(messageElement);
            entryDiv.appendChild(deleteButton);
            guestbookEntriesContainer.appendChild(entryDiv);
        });
    }
}

// 방명록 데이터 저장
const guestbookForm = document.getElementById('guestbook-form');
guestbookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');
    
    const newEntry = {
        name: nameInput.value,
        message: messageInput.value
    };
    
    guestbookEntries.push(newEntry);
    localStorage.setItem('guestbookEntries', JSON.stringify(guestbookEntries));
    
    nameInput.value = '';
    messageInput.value = '';
    
    displayGuestbookEntries();
});

// 방명록 데이터 삭제
function deleteGuestbookEntry(index) {
    guestbookEntries.splice(index, 1);
    localStorage.setItem('guestbookEntries', JSON.stringify(guestbookEntries));
    displayGuestbookEntries();
}

// 초기 방명록 데이터 표시
displayGuestbookEntries();