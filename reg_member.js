var id;
var pw;
var pw_re;
var user_name;
var email;
var birth_y;
var birth_m;
var birth_d;
var sex;
var tel_1;
var tel_2;
var tel_3;

// check()
var user_id;
var secret;
var secret_re;
var user;
var mail;
var year;
var month;
var day;
var no1;
var no2;
var no3;
var ipsex;

window.onload = function () {
    id = document.getElementById("id");
    pw = document.getElementById("pw");
    pw_re = document.getElementById("pw_re");
    user_name = document.getElementById("name");
    email = document.getElementById("email");
    birth_y = document.getElementById("birth_y");
    birth_m = document.getElementById("birth_m");
    birth_d = document.getElementById("birth_d");
    ipsex = document.getElementsByName("sex");
    tel_1 = document.getElementById("tel_1");
    tel_2 = document.getElementById("tel_2");
    tel_3 = document.getElementById("tel_3");
}
function check() {
    user_id = id.value;
    secret = pw.value;
    secret_re = pw_re.value;
    user = user_name.value;
    mail = email.value;
    year = birth_y.value;
    month = birth_m.value;
    day = birth_d.value;
    no1 = tel_1.value;
    no2 = tel_2.value;
    no3 = tel_3.value;

    // checkid();
    for(var i = 0; i <ipsex.length; i++){
    if(ipsex[i].checked == true){
        sex = ipsex[i].value;}
    }
    


    if (checkuser_id() && checksecret() && checksecret_re() && checkuser() && checkmail()) {
        if (sex == "M") {
            sex = "남자"
        } else {
            sex = "여자"
        }
        alert(sex);
    } else {
        alert("회원가입실패");
    }

}

function checkuser_id() {
    if (user_id.length >= 4 && user_id.length <= 12) {
        console.log("ok id");
        return true;
    } else {
        alert("id는 4글자이상 12자 이하로만 입력하세요");
        return false;
    }
}

function checksecret() {
    if (secret.length >= 4 && secret.length <= 12) {
        console.log("ok pw");
        return true;
    } else {
        alert("pw는 4글자이상 12자 이하로만 입력하세요.");
        return false;
    }
}

function checksecret_re() {
    if(secret == secret_re){
        console.log("비밀번호 일치");
        return true;
    }else{
        console.log("비밀번호 재입력");
        alert("비밀번호 일치하지않음")
        return false;
    }
    // if (secret_re.length >= 4 && secret_re.length <= 12) {
    //     console.log("ok pw_re");
    //     return true;
    // } else {
    //     alert("pw_re는 4글자이상 12자 이하로만 입력하세요.");
    //     return false;
    // }
}

function checkuser() {
    if (user.length >= 4 && user.length <= 12) {
        console.log("ok name");
        return true;
    } else {
        alert("name는 4글자이상 12자 이하로만 입력하세요.");
        return false;
    }
}
function checkmail() {
    if (mail.length >= 4 && mail.length <= 12) {
        console.log("ok email");
        return true;
    } else {
        alert("email는 4글자이상 12자 이하로만 입력하세요.");
        return false;
    }
}

// var i = sex

// for(var i = 0; i <sex.length; i++){
//     if(sex[i].checked == true){
//         sex = sex[i].value;
//     }
// }

