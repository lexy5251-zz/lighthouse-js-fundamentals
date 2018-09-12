function findWaldo(arr, found) {


  arr.forEach(function(name, index){
   if(name === "Waldo"){
    found(index);
   }

  });
}

// }
// function actionWhenFound is a callback function, first defined.
function actionWhenFound(i) {

// to log the index of the array where Waldo is found.

  console.log("Found Waldo at index " + i + '!');
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);