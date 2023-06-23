var arr = ["a" , "b" , "c" , "d" , "e"]
function reverse (array) {
    var newArry = []
    for(var i = array.length-1 ; i>-1;i--) {
        console.log(array[i]);
        newArry.push
    }
    return newArry
}
console.log(reverse(arr))

function reverse2 (array){
    for(var i=0;i<= array.length/2 ;i++) {
        var temp = array[i]
        array[i] = array[array.length -1 -i]
        
    }
    return array
}
console.log("reverse2")