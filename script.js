// Declare a global counter variable.
let counter = 0;
// Create a simple function that increments the variable, and then calls itself recursively.
// Surround the initial function call in a try/catch block.
// Within the catch, log the error and the value of the counter variable.
try {
    addOne();
} catch (error) {
    console.log(error);
    console.log(counter)
}

function addOne() {
    counter++;
    //addOne();
}

// returns in the range of 28,000 - 37,000