const LOGIN_ID = "cat";
const LOGIN_PW = "1234";


var input_id;
var input_pw;
var status;
var iptime;

var str_id = "";
var str_pw = "";
var str_time = "";




window.onload = function () {
    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
    input_status = document.getElementById("status");
    iptime = document.getElementById("time");
    iptime.innerHTML = str_time;
}

// var now = new Date();

// document.write(now.getFullYear() + "년" + (now.getMonth() + 1) + "월" + now.getDate() + "일" + now.getHours() + "시" + now.getMinutes() + "분" + now.getSeconds() + "초" + now.getMilliseconds() + "밀리초"); br();



var now = new Date();
str_time = now.getFullYear() + "년" + (now.getMonth() + 1) + "월" + now.getDate() + "일" + now.getHours() + "시" + now.getMinutes() + "분" + now.getSeconds() + "초" + now.getMilliseconds() + "밀리초";



// document.write(now.getFullYear() + "년" + (now.getMonth() + 1) + "월" + now.getDate() + "일" + now.getHours() + "시" + now.getMinutes() + "분" + now.getSeconds() + "초" + now.getMilliseconds() + "밀리초"); br();





function x() {

    str_id = input_id.value;
    str_pw = input_pw.value;


    if (str_id == LOGIN_ID && str_pw == LOGIN_PW) {

        // alert("로그인 성공");
        success();

    } else {

        alert("로그인 실패");
    }

}

function success() {
    input_status.innerHTML = "<p>" + str_id + " 회원님 반갑습니다.</p>"
}


