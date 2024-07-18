function openclose() {
  $("#intro-bottombtn").toggle();
}


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