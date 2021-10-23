let numbers=[1,2,3,4,5,6];

Math.max
console.log(Math.max(...numbers));
//math.min
console.log(Math.min(...numbers));

function max(array){
    let max=array[0];
    
    for(let i=1;i<=array.length;i++){
    if(array[i]>max)
    max=array[i];
    }
    return max;
}

console.log(max(numbers));

function min(array){
    let min=array[0];
    for(j=1;j<=array.length;j++){
        if(array[j]<min)
        min=array[i];
    }
    return min;
}
console.log(min(numbers));