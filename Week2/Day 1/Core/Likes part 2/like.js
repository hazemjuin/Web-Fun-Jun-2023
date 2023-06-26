var likeButtons = document.getElementsByClassName("likeButton");
var likeCounts = document.getElementsByClassName("likeCount");

for (var i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener("click", function() {
    var currentLikes = parseInt(this.nextElementSibling.textContent);
    var newLikes = currentLikes + 1;
    this.nextElementSibling.textContent = newLikes.toString();
});
}
