let array=[NaN, 0, 15, false, -22,'',undefined, 47, null];

let truthy=array.filter((value)=>{
        if(value!==NaN && value!==0 && value!==false && value!==undefined && value!==null && value!=='')
        return value;
});
console.log(truthy);
 let falsy=array.filter(value=> value===NaN && value===0 && value===false
     && value===undefined && value===null && value==='');
console.log(falsy);