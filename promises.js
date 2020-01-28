console.log("Start...");

const p1 = new Promise((resolve) =>{
    setTimeout(() => {
        console.log("Performing Operation 1...");
        resolve(1);
    }, 2000);
});

const p2 = new Promise((resolve) =>{
    setTimeout(() => {
        console.log("Performing Operation 2...");
        resolve(2);
    }, 2000);
});

p2.then(result => console.log("Output from Operation 2:", result));
p1.then(result => console.log("Output from Operation 1:", result));

//Return a single promise with the result of both promises in array
//In case any promise failed, result promise is considered failed
//Operation wont be exceuted again if its already executed, it will only use that promise result
Promise.all([p1, p2])
    .then(result => console.log("Output from both fulfilled promises:", result));

Promise.race([p1, p2])
    .then(result => console.log("Output from first fulfilled promise:", result));


console.log("End...")