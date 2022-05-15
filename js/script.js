function showInfo(id) {
    $('#work').addClass('d-none');
    $('#info-student').removeClass('d-none');
    $('#btn-work button').addClass('card-item').removeClass('un-enable');

    $('#info-student .card-header h1').html(student[id].hoten);
    $('#info-student .card-header p').html(student[id].mssv);
    $('#info-student .avt-circle').css('background-image', 'url(' + student[id].image + ')');
    $('#info-student .card-content table').html(`<tr>
                                <td width="20%"></td>
                                <td width="35%">
                                    <p>
                                        <i class="fas fa-birthday-cake"></i> <span>${student[id].birth}</span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <i class="fas fa-graduation-cap"></i> <span>${student[id].nganh}</span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <p>
                                        <i class="fas fa-phone-alt"></i> <span>${student[id].phone}</span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <i class="fas fa-envelope"></i> <span>${student[id].email}</span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <p>
                                        <i class="fas fa-map-marker-alt"></i> <span>${student[id].address}</span>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <i class="fas fa-percentage"></i> <span>Đóng góp: ${student[id].donggop}%</span>
                                    </p>
                                </td>
                            </tr>`);

}

function showListStudent() {
    for (let i = 0; i < Object.keys(student).length; i++) {
        $('#list-student .main-list').append(`<div id="student${i+1}" class="member card-unenable">
                        <div class="left-item">
                            <div class="around-avt card-item circle">
                                <div class="avt-item circle">

                                </div>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="main-info">
                                <h2>${student["student"+(i+1)].hoten}</h2>
                                <span>${student["student" + (i + 1)].mssv}</span>
                            </div>
                        </div>
                    </div>`);
        $("#student" + (i + 1) + " .around-avt .avt-item").css('background-image', 'url(' + student["student" + (i + 1)].image + ')');
    }
}

function showWork() {
    $('#info-student').addClass('d-none');
    $('#work').removeClass('d-none');
    $('#btn-work button').removeClass('card-item').addClass('un-enable');

    for (let i = 0; i < Object.keys(student).length; i++){
        $('#work table').append(`<tr>
                                <td>${student["student" + (i + 1)].hoten}</td>
                                <td>${student["student" + (i + 1)].noidung}</td>
                                <td>${student["student" + (i + 1)].donggop}%</td>
                            </tr>`)
    }
}

showWork();
showListStudent();

$('.member').click(function () {
    showInfo(this.id);

    $('.member').addClass('card-unenable').removeClass('card-item');
    $('#'+this.id).removeClass('card-unenable').addClass('card-item');

    $('#info-student .main-content').addClass('hidden').removeClass('show');
    setTimeout(() => {
        $('#info-student .main-content').removeClass('hidden').addClass('show');
    }, 300);

});

$('#btn-work button').click(function () {
    $('#info-student').addClass('d-none');
    $('#work').removeClass('d-none');
    $('#btn-work button').removeClass('card-item').addClass('un-enable');
    $('.member').addClass('card-unenable').removeClass('card-item');

    $('#work .main-content').addClass('show').removeClass('hidden');

    $('#work .main-content').addClass('hidden').removeClass('show');
    setTimeout(() => {
        $('#work .main-content').removeClass('hidden').addClass('show');
    }, 300);
});