var code;

function createCaptcha() {
    var captchaForm = document.getElementById("captchaForm");
    if(!captchaForm) {
        captchaForm = document.createElement('form');
        captchaForm.className="captcha";
        captchaForm.id="captchaForm";


        console.log("AAAA");
        var charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
        var lengthOtp = 6;
        var captcha = [];
        for (var i = 0; i < lengthOtp; i++) {
            var index = Math.floor(Math.random() * charsArray.length + 1);
            if (captcha.indexOf(charsArray[index]) === -1)
                captcha.push(charsArray[index]);
            else i--;
        }

        var divC = document.createElement("div");
        divC.id = "captcha";

        var canv = document.createElement("canvas");
        canv.id = "captcha";
        canv.width = 120;
        canv.height = 50;
        var ctx = canv.getContext("2d");
        ctx.font = "25px Georgia";
        // ctx.strokeText(captcha.join(""), 0, 30);
        for (let i = 0; i < captcha.join("").length; i++) {
            const randomY = Math.floor(Math.random() * 10) - 5;
            ctx.strokeText(captcha[i], i*20, 30+randomY);
        }
        code = captcha.join("");
        divC.appendChild(canv);
        captchaForm.appendChild(divC);
        var inputCaptcha = document.createElement("input");
        inputCaptcha.type="text";
        inputCaptcha.placeholder="Введите капчу";
        inputCaptcha.id="cpatchaTextBox";
        inputCaptcha.autocomplete="off";
        captchaForm.appendChild(inputCaptcha);

        var check = document.createElement('input');
        check.type="button";
        check.id="checkCapcha";
        check.value="Проверить";
        captchaForm.appendChild(check);
        document.body.appendChild(captchaForm);

        check.onclick = function() {
            validateCaptcha();
        };

        inputCaptcha.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
            }
        });
    }
}

function createMathCaptcha() {
    document.getElementById('captcha').innerHTML = "";
    document.getElementById('cpatchaTextBox').value = '';

    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    let captcha = x + '+' + y;

    var canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 150;
    canv.height = 50;
    var ctx = canv.getContext("2d");
    ctx.font = "25px Georgia";
    ctx.strokeText(captcha, 50, 30);
    code = x+y;
    document.getElementById("captcha").appendChild(canv);
}

function validateCaptcha() {
    event.preventDefault();
    if(document.getElementById("cpatchaTextBox").value !== "")
    {
        if (document.getElementById("cpatchaTextBox").value == code) {
            alert("Читать умеешь")
            document.getElementById("captchaForm").remove();
        }else{
            alert("А числа складывать умеешь?");

            createMathCaptcha();
        }
    }
}

document.getElementById("loginButton").onclick = function() {
    createCaptcha();
}
