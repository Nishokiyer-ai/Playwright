// Voting pogram

function canVote(age) {
if(age >= 18) {
    console.log("You are eligible to vote.");
}
else {
    console.log("You are not eligible to vote.");
}
}

canVote(20); // Output: You are eligible to vote.
canVote(16); // Output: You are not eligible to vote.   


function Semester_calculation(mark1,mark2,mark3) {
let Avg = (mark1 + mark2 + mark3) / 3;
if(Avg >= 90) {
    console.log("Grade A");
}
    else if(Avg >= 60 & Avg < 90) {
    console.log("Grade B");
}
else if (Avg > 40 & Avg < 60){
    console.log("Grade C");
}
else if (Avg <= 40){
    console.log("Grade D");
}   
}


Semester_calculation(95, 85, 90); // Output: Grade A
Semester_calculation(70, 75, 80); // Output: Grade B
Semester_calculation(50, 55, 45); // Output: Grade C    
Semester_calculation(30, 35, 25); // Output: Grade D

// Local and Global Variable
var eyeColor = "blue"; // Global Variable

function showEyeColor() {
    var hairColor = "black"; // Local Variable
    console.log("Eye Color: " + eyeColor); // Accessing Global Variable
    console.log("Hair Color: " + hairColor); // Accessing Local Variable
}

showEyeColor();


// Local and local Variable


function showEyeColor() {
    var hairColor = "black"; // Local Variable
    
    var eyeColor = "blue"; // Local Variable

    console.log("Eye Color: " + eyeColor); // Accessing Global Variable
    console.log("Hair Color: " + hairColor); // Accessing Local Variable
}

showEyeColor();
//local and global variable in if condition uaing var


if (true) {
    var city = "New York";
    var country = "USA";
    console.log("Inside Block - City: " + city);
    console.log("Inside Block - Country: " + country);
}

console.log("Outside Block - City: " + city); // Accessible

//local and global variable in if condition uaing let
if (true) {
    let city = "New York";
    let country = "USA";
    console.log("Inside Block - City: " + city);
    console.log("Inside Block - Country: " + country);
}

console.log("Outside Block - City: " + city); // Accessible

//local and global variable in if condition uaing const
if (true) {
    const city = "New York";
    const country = "USA";
    console.log("Inside Block - City: " + city);
    console.log("Inside Block - Country: " + country);
}
console.log("Outside Block - City: " + city); // Accessible