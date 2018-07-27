function loopyLighthouse(range, multiples, words) {
    for (var i = 15; i <= 90; i++) {
        if (i % 2 === 0 && i % 5 === 0) {
            console.log("BattyBeacon");
        } else if (i % 2 === 0) {
            console.log("Batty");
        } else if (i % 5 === 0) {
            console.log("Beacon");
        } else {
            console.log(i);
        }

    }
}


function concat(arr1, arr2){
    var result = [];
    for (i=0; i < arr1.length; i++){
       result.push(arr1[i]);
    }
    for (i=0; i < arr2.length; i++){
       result.push(arr2[i]);
    }
    return result;
}

console.log(concat([1,2], [4,5]));