function displayName(btn) {
    console.log(btn);
}
function clicked(elemet) {
    console.log(clicked);
    elemet.innerText = "Log out"
}
const button = document.getElementById("myButton");

button.addEventListener("click", function() {
    button.remove();
});

function likeClicked() {
    alert("Ninja was liked");
  }
  