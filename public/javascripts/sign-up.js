let password;
let checkPassword;
let check = false;

function chePassword(e) {
    if (e.length <= 6) $("#errPW>p").text("請設定長度大於6的密碼");
    else $("#errPW>p").text("");
    password = e;
    if (check) {
        if (checkPassword != password) $("#errPW2>p").text("請數入相同的密碼");
        else {
            $("#errPW2>p").text("");
            check = !check;
        }
    }
}

function chePassword2(e) {
    checkPassword = e;
    if (checkPassword != password) $("#errPW2>p").text("請數入相同的密碼");
    else {
        $("#errPW2>p").text("");
        check = true;
    }
}