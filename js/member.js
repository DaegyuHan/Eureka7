/*
function openclose() {
  $("#intro-bottomtog").toggle();
}
*/

/*
$("#postingbtn").click(async function () {
  let image = $("#image").val();
  let comment = $("#comment").val();

  let doc = {
    'image': image,
    'comment': comment
  };
  let docs = await getDocs(collection(db, "movies"));
  docs.forEach((doc) => {
    let row = doc.data();
    let image = row['image'];
    let comment = row['comment'];

    <div class="intro-bottom" id='intro-bottomtog'>
      <div class="bottom-image">
        <img id="personal-image" src="${image}" alt="개인사진">
      </div>
      <div class="bottom-intro">
        <p>${comment}개인 소개내용</p>
      </div>
    </div>
    $("#intro-bottomtog").append(temp_html);
  });
*/


document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const content = document.getElementById(targetId);

    // 모든 토글 콘텐츠를 닫음
    document.querySelectorAll('.toggle-content').forEach(div => {
      div.style.display = 'none';
    });

    // 클릭한 버튼의 토글 콘텐츠를 토글
    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'grid';
    } else {
      content.style.display = 'none';
    }
  });
});

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