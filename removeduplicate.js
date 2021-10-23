let array1 = [1, 2, 3];
let array2 = [2, 30, 1];

let merge=array1.concat(array2);
console.log(merge);

let dup=merge.filter((m,index)=> merge.indexOf(m)!==index);
console.log(dup);
let rem=merge.filter((m,index)=> merge.indexOf(m)===index);
console.log(rem);

