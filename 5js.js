function repeat(operation, interval, repetitions) {
    let count = 0;
    const intervalId = setInterval(() => {
        operation();
        count++;

        if (count === repetitions) {
            clearInterval(intervalId);
        }
    }, interval);
}


function exampleOperation() {
    console.log("Операция выполнена: " + new Date());
}

repeat(exampleOperation, 1000, 5); 