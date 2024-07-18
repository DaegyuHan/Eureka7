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


//추억앨범페이지 scirpt//
$("#togglebtn").click(async function () {
  $('#cardbox').toggle();
})

$("#postingbtn").click(async function () {
  let photoname = $('#photoname').val();
  let phototext = $('#phototext').val();
  let photourl = $('#photourl').val();

  let doc = {
    'photoname': photoname,
    'phototext': phototext,
    'photourl': photourl

  };
  alert('사진이 저장됨');

})
