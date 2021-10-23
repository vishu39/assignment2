const mycolor = ["Red", "Green", "White", "Black"];

console.log(mycolor.join(','));
console.log(mycolor.join('-'));
console.log(mycolor.join('+'));

// custom function
function join(array){
   let comma=array.join(',');
   console.log(comma);
   let hyphen=array.join('-');
   console.log(hyphen);
   let plus=array.join('+');
   console.log(plus);
}
join(mycolor);