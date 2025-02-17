function alwaysHungry(arr) {
    var foodCount = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == "food") {
            console.log("yummy");
            foodCount++;
        }
    }
    if(foodCount == 0) {
        console.log("I'm hungry")
    }
}
// alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"


function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i<arr.length; i++) {
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}


function betterThanAverage(arr) {
    var sum = 0;

    for(var i=0; i<arr.length; i++) {
        sum += arr[i];
    }

    var avg = sum / arr.length;
    var count = 0

    for(var i=0; i<arr.length; i++) {
        if(arr[i] > avg) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);



function reverse(arr) {
    var left = 0;
    var right = arr.length - 1;
    while(left < right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    // your code here
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);




function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    while(fibArr.length < n) {
        var prev = fibArr[fibArr.length-1];
        var prevprev = fibArr[fibArr.length-2];
        fibArr.push(prev + prevprev);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result);
