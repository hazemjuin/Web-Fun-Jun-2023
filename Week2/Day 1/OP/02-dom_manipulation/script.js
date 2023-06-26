function deleteElement(id) {
    console.log("Element to remove ID = ",document.getElementById(id) );
    document.getElementById(id).remove
    console.log("Element Removed");
}

function like() {
    console.log("Like", document.getElementById(id).innerText);
    var like = parseInt(document.getElementById(id).innerText);
    like ++
    console.log("Like", like);
    document.getElementById(id).innerText = like
}
function likeTow(e) {
    e.innerText++
}

function onImage(e) {
    console.log(e.src);
    if(e.src == 'http://127.0.0.1:5502/images/1.jpg'){
        e.src = './images/5.png'
    }    
    else{
        e.src ='./images/1.jpg'
    }
}