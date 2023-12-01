// Находим поле ввода
const textInput = document.getElementById('text-input');
const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById('text-input');

// Функция, которая будет вызываться при нажатии клавиши Enter
function handleEnterKeyPress(event) {
    if (event.key === 'Enter') {
        console.log(messageInput.value);
        addUserMessage(messageInput.value);
        addAnswer();
        scrollToBottom();
    }
}

// Добавляем прослушиватель событий для поля ввода
textInput.addEventListener('keydown', handleEnterKeyPress);

function addUserMessage(message) {
    if (message !== '') {
        document.getElementById('text-input').value = "";
        let messageContainer = document.createElement("div");
        messageContainer.className = "user-message";
        messageContainer.innerHTML = '<p>'+message+'</p>';
        chatBox.append(messageContainer);
    }
}

function scrollToBottom() {
    chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById('send-message-button').addEventListener('click', function(event) {
    var message = messageInput.value;

    console.log(message);
    addUserMessage(message);
    addAnswer();
    scrollToBottom();
});


function addAnswer() {
    let answer = document.createElement('div');
    answer.className = "message";
    answer.innerHTML = '<p class="loading">...</p>';

    chatBox.append(answer);
    // Запускаем таймер на 3 секунды
    scrollToBottom();
    setTimeout(() => {
        // answer.innerHTML = '<div class="message"><p>'+phraseGenerator()+'</p></div>';
        // answer.lastElementChild.className = ""
        let answerP = answer.querySelector("p");
        answerP.className = "";
        answerP.textContent = "";
        printText(phraseGenerator(), answerP);
    }, 3000);
}

function printText(text, element, index = 0) {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(function () {
            printText(text, element, index);
        }, 50);
    }
    else
        scrollToBottom();
}

function phraseGenerator() {
    const phrases = [
        'Для уточнения напишите на почту',
        'Пожалуйста, подождите немного.',
        'Могу я вам чем-то еще помочь?',
        'Позвольте мне проверить это для вас.',
        'Один момент, я сверю информацию.',
        'Пожалуйста, опишите проблему подробнее.',
        'Благодарим за ваш вопрос! Ответим в ближайшее время.',
        'Ваш вопрос очень важен для нас.',
        'Пожалуйста, перезагрузите страницу и попробуйте снова.',
        'Извините за предоставленные неудобства.'
    ];
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}
