
function add()
{
    console.log('Hello add');
    return arguments[0]+arguments[1];
}

console.log(add(10,20));

function subtract(x,y)
{
    return x;
}
console.log(subtract(20,10));
console.log(subtract(10)); 
console.log(subtract()); 
console.log(subtract(100,20,30,40)); //extra arguments are ignored.

/*
    Case1: if calling function has less arguments than defined in function then it captures only those who has on the same corresponding indices.
    Case2: if calling function has more arguments than defined in function then it gives no error like NaN as long as I didn't use the extra variables.
    Case3: if calling function has no arguments then it returns NaN. But internally it has arguments object which stores the passed arguments.
    
*/