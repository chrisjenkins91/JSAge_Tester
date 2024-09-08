//* Created a function to check age of the user using if statements

function ageChecker(){
    debugger

    //*Created variable to grab the user's age they've inputted
    let userInput = document.querySelector(".ageInput input").value;

    if (userInput < 18 && userInput >= 0) {
        document.getElementById("result").innerText = "You are a minor..."
    } else if (userInput >= 18 && userInput < 65) {
        document.getElementById("result").innerText = "You are an adult... "
    } else if (userInput >= 65 && userInput < 120) {
        document.getElementById("result").innerText = "You are a senior"
    } else if (userInput < 0 || userInput >= 120) {
        alert("This is an invalid age") // error handler if any numbers entered that are invalid
    } 
};

function reset(){
    document.getElementById("result").innerText = ""
}

let resetButton = document.getElementById("reset")

//*Created variable to check the age value when clicked

let ageButton = document.querySelector(".ageInput button");
// console.log(ageButton);

//* Added an event listener to run ageChecker function when clicked to determine user age
ageButton.addEventListener("click", ageChecker);

resetButton.addEventListener("click", reset)