let counter = 0;

function incrementCounter() {
    counter++;
    incrementCounter();
}

try {
    incrementCounter();
} catch (error) {
    console.log(error);
    console.log(counter);
}

// InternalError: too much recursion
// 31,000