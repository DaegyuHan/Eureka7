//팀원소개페이지 script//
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const content = document.getElementById(targetId);

    document.querySelectorAll('.toggle-content').forEach(div => {
      if (div.id !== targetId) {
        div.style.display = 'none';
      }
    });

    if (content.style.display === 'grid') {
      content.style.display = 'none';
    } else {
      content.style.display = 'grid';
    }
  });
});
