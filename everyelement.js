let n=[1,2,3,4,5];

n.forEach(n=>{
    console.log(n);
});


function every(array){
    for(let values of array)
    console.log(values);
}
every(n);