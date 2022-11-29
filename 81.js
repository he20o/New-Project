
function x() {
    var input_id = document.getElementById("id");
    var input_pw = document.getElementById("pw");
    var status = document.getElementById("status");

    var str_id = input_id.value;
    var str_pw = input_pw.value;

    if (str_id == "cat" && str_pw == "1234") {
        
        status.innerHTML = str_id+" 회원님 반갑습니다."
        // alert("로그인 성공");
    }else {
        alert("로그인 실패");
    }

    alert("아이디:" + str_id + "암호:" + str_pw);
}






