let num=[1,2,3,4];
mul(num);

//custom function
function mul(array){
for(let value of array) 
console.log(value*2);  
}

//map function
   const mul2=num.map(num=> num*2);
    console.log(mul2);