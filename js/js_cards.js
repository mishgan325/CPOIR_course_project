function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '…';
    }
    return str;
}

function truncateText() {
    let cardText = document.getElementById('cardText');
    let originalText = cardText.textContent;
    let maxLength = 50; // Максимальная длина текста

    let truncatedText = truncate(originalText, maxLength);
    cardText.textContent = truncatedText;
}
