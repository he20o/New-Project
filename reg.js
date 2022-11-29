// 전역선언
var ipId;
var ipPw;
var ipPw_re;
var ipUser;
var ipEmail;
var ipBirth_y;
var ipBirth_m;
var ipBirth_d;
var ipSexes;
var ipTel_1;
var ipTel_2;
var ipTel_3;


var id;
var pw;
var pw_re;
var nameee;
var email;
var birth_y;
var birth_m;
var birth_d;
var tel_1;
var tel_2;
var tel_3;

var sexes;
var sex;

window.onload = function () {
    ipId = document.getElementById("id");
    ipPw = document.getElementById("pw");
    ipPw_re = document.getElementById("pw_re");
    ipUser = document.getElementById("user_name");
    ipEmail = document.getElementById("email");
    ipBirth_y = document.getElementById("birth_y");
    ipBirth_m = document.getElementById("birth_m");
    ipBirth_d = document.getElementById("birth_d");
    ipTel_1 = document.getElementById("tel_1");
    ipTel_2 = document.getElementById("tel_2");
    ipTel_3 = document.getElementById("tel_3");


    ipSexes = document.getElementsByName("sex");
}

function check() {
    id = ipId.value;
    pw = ipPw.value;
    pw_re = ipPw_re.value;
    nameee = ipUser.value;
    email = ipEmail.value;
    birth_y = ipBirth_y.value;
    birth_m = ipBirth_m.value;
    birth_d = ipBirth_d.value;
    tel_1 = ipTel_1.value;
    tel_2 = ipTel_2.value;
    tel_3 = ipTel_3.value;

    for(var i=0;i<ipSexes.length;i++){
        if(ipSexes[i].checked == true){
            sex = ipSexes[i].value;
        }
    }


    var userInfo =
        "id:" + id + "\n"
        + "pw:" + pw + "\n"
        + "pw_re:" + pw_re + "\n"
        + "user_name:" + user_name + "\n"
        + "email:" + email + "\n"
        + "birth_y:" + birth_y + "\n"
        + "birth_m:" + birth_m + "\n"
        + "birth_d:" + birth_d + "\n"
        + "tel_1:" + tel_1 + "\n"
        + "tel_2:" + tel_2 + "\n"
        + "tel_3:" + tel_3 + "\n"
        + "sex:" + sex;

    alert(userInfo);

    if (checkId() && checkPw()  && checkEqualPwAndPwRe() && checkuser_name() && checkEmail()) {
        alert("회원가입 완료");
    } else {
        alert("회원가입 실패");
    }
}

function checkId() {
    if (id.length >= 4 && id.length <= 12) {
        console.log("아이디 확인함");
        return true;
    } else {
        console.log("아이디 오류");
        return false;
    }
}

function checkPw() {
    if (pw.length >= 4 && pw.length <= 12) {
        console.log("비밀번호 확인");
        return true;
    } else {
        console.log("비밀번호 오류");
        return false;
    }
}

function checkEqualPwAndPwRe(){
    if(pw == pw_re){
        console.log("ok 일치함");
        return true;
    }else{
        console.log("비번 불일치");
        return false;
    }
}



function checkuser_name() {
    if (user_name.length >= 3 && user_name.length <= 12) {
        console.log("이름 확인");
        return true;
    } else {
        console.log("이름 오류");
        return false;
    }
}
function checkEmail() {
    if (eamil.length >= 3 && email.length <= 12) {
        console.log("이메일 확인");
        return true;
    } else {
        console.log("이메일 오류");
        return false;
    }
}