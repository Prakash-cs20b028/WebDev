
console.log(10, typeof 10);
console.log(3.14, typeof 3.14);
console.log(NaN, typeof NaN);
console.log("Prakash",typeof "Prakash")
console.log('a',typeof 'a');
console.log(undefined, typeof undefined);
console.log(true, typeof true);
console.log(null, typeof null);


function func(a,b){
    return a+b;
}
func(1,2);

console.log(func(1,2), typeof func(1,2));
console.log(func, typeof func);

var a = 10;
console.log(a, typeof a);
a = "Prakash";
console.log(a, typeof a);

let b = function(){
    return 10*2;
}
console.log(b(), typeof b());
console.log(b, typeof b);

//console.log(temp()) //can't use before initialization
console.log(temp) //only works for var not for let. 
var temp = function(){
    return 'abc';
}
console.log(temp2());

function temp2(){
    return 'abc';
}

function area(len,bre)
{
    return len*bre;
}
console.log(area(10,20));
console.log(area(10)); //second part is undefined though it doesn't give any error.
