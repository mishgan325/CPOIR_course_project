function setLikes() {
    var likeElements = document.querySelectorAll('.like');
    likeElements.forEach(function(element) {
        element.addEventListener('click', function() {
            // console.log(this.childNodes);
            let likeBtn =  this.childNodes[1];
            let numberOfLikesElement = this.childNodes[3];
            let numberOfLikes = Number.parseInt(numberOfLikesElement.textContent, 10);
            if (likeBtn.classList.value !== "heart-icon isLiked") {
                likeBtn.classList.add('isLiked');
                numberOfLikes++;
                numberOfLikesElement.textContent = numberOfLikes;
            } else {
                likeBtn.classList.remove('isLiked');
                numberOfLikes--;
                numberOfLikesElement.textContent = numberOfLikes;
            }
        });
    });
}