const n=[1,2,3,4,5];

//normal function
sum1(n);
function sum1(array){
    let sum=0;
    for(let value of array)
sum+=value;
console.log(sum);
}

//reduce method
function sum2(array1){
    return array1.reduce((a,array1)=> a+array1);
}
console.log(sum2(n));