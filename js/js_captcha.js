var code;
function createCaptcha() {
    document.getElementById('captcha').innerHTML = "";
    var charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
    var lengthOtp = 6;
    var captcha = [];
    for (var i = 0; i < lengthOtp; i++) {
        var index = Math.floor(Math.random() * charsArray.length + 1);
        if (captcha.indexOf(charsArray[index]) == -1)
            captcha.push(charsArray[index]);
        else i--;
    }
    var canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 200;
    canv.height = 50;
    var ctx = canv.getContext("2d");
    ctx.font = "25px Georgia";
    // ctx.strokeText(captcha.join(""), 0, 30);
    for (let i = 0; i < captcha.join("").length; i++) {
        const randomY = Math.floor(Math.random() * 10) - 5;
        ctx.strokeText(captcha[i], i*20, 30+randomY);
    }
    code = captcha.join("");
    document.getElementById("captcha").appendChild(canv);
}

function createMathCaptcha() {
    document.getElementById('captcha').innerHTML = "";
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    let captcha = x + '+' + y;

    var canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 100;
    canv.height = 50;
    var ctx = canv.getContext("2d");
    ctx.font = "25px Georgia";
    ctx.strokeText(captcha, 0, 30);
    code = x+y;
    document.getElementById("captcha").appendChild(canv);
}

function validateCaptcha() {
    event.preventDefault();
    debugger
    if (document.getElementById("cpatchaTextBox").value == code) {
        alert("Valid Captcha")
    }else{
        alert("Invalid Captcha. try Again");
        createMathCaptcha();
    }
}

document.onload(createCaptcha());