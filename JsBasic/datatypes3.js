//this is the higher order function
function createGreet(greeting)
{
    //name2 is string type parameter
    function greet(name2){
        console.log(greeting,name2);
    }
    return greet;
}
let g1 = createGreet('Good Morning');
//g1('Prakash');
let g2 = createGreet('Good Evening');
//g2('Deepak');

function getName(){
    return document.getElementById('txtName').value;
}

/*
    Steps: 1. The name got from the input box using getName() function.
           2. g1(getName()) is called to the greet function
           Even if we pass name2 as a function it will work. 
*/