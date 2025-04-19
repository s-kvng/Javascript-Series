// Global scope 
var scope = "Scope 1";

function scopeFunction() {
    // over here is the scope
    var scope2 = "Scope 2";
    console.log(scope2)
    console.log(scope) // Scope 1

    function innerFunction() {
        console.log("innerFunction")
    }
}

scopeFunction(); // Scope 2

//console.log(scope2); // ReferenceError: scope2 is not defined

// block scope

{
 let scope3 = "Scope 3";
 console.log(scope3) // Scope 3
}


let scope3 = "Scope 3";

if(true){
    let scope4 = "Scope 4";
    console.log(scope4) // Scope 4
}

//console.log(scope3); // ReferenceError: scope3 is not defined

//if(){}

//for(){}