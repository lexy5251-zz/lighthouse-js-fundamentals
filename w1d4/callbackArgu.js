// The second argument/parameter is expected to be a function
var findWaldo = function(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    // console.log(i);
    if (arr[i] === "Waldo") {
      // console.log(arr[i]);
      found(i);   // execute callback

    }

  }

}
// function actionWhenFound is a callback function, first defined.
function actionWhenFound(i) {

// to log the index of the array where Waldo is found.

  console.log("Found Waldo at index " + i + '!');
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);