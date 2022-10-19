const time = new Date().getHours();
var greeting; 
if (time < 10) {
    greeting = "Good Morning";
} else if (time < 20 ) {
    greeting = "Good Day";
} else {
    greeting = "Good Evening";
}

console.log(greeting);
