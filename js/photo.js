
$("#togglebtn").click(async function () {
    $('#cardbox').toggle();
})

function makecard() {

    let photoname = $('#photoname').val();
    let phototext = $('#phototext').val();
    let photourl = $('#photourl').val();

    let temp_html = `
                <div class="col">
                                        <div class="card">
                                            <img src="${photourl}"
                                                class="card-img-top" alt="...">
                                            <div class="card-body">
                                                <h5 class="card-title">${photoname}</h5>
                                                <p class="card-text">${phototext}</p>
                                            </div>
                                        </div>
                                    </div>`;

    $('#cardbox').append(temp_html);
   

    alert('사진이 저장됨');




}


