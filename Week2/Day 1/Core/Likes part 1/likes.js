var likeButton = document.getElementById("likeButton");
var likeCount = document.getElementById("likeCount");

likeButton.addEventListener("click", function() {
    var currentLikes = parseInt(likeCount.textContent);
    var newLikes = currentLikes + 1;
    likeCount.textContent = newLikes.toString();
});
