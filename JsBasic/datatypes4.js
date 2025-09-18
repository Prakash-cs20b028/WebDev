//Concept of var, let, const and global scope

// outside: let, inside: let => inside let will be executed

// outside: let, inside: var but in the if block then it is considered as function scope but its value is undefined.
// if it had declared and initialized outside the if block then it is actually a funciton scope with the correct value. 

let a = 10;
let b = 20;

function fun()
{    
    let a=100;
    if(a === 10)
    {
        
        console.log(a); 
    }
    if(b == 20)
    {
        let b = 200;
        console.log(b);
    }
    console.log("Inside fun", a);
    console.log("Inside fun", b);
}

fun();
// console.log(a);
// console.log(b);