/* Understand global scope, function scope, and block scope by using var and let inside
conditional blocks. */

var genderType = "Female"; // Global Scope

function printGender(){
    let color = "Brown"; // Function Scope
    if (genderType === "Female") {
        var age = 30; // Block Scope with var
        let color = "Pink"; // Block Scope with var
        console.log("color is called inside funtion : ", color); // Accessing Global Scope
}
    console.log("age: ", age); // Accessing Function Scope
}
console.log("genderType: ", genderType); // Accessing Global Scope
printGender()
var genderType = "Male";
console.log("genderType: ", genderType); // Accessing Global Scope
printGender()