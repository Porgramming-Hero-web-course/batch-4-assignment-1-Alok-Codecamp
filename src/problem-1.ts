//function sumArray

function sumArray(param:number[]):number{
        const sum = param.reduce((total:number,currentValue:number)=>total+currentValue);
        return sum;
}

const res:number = sumArray([2,2,6]);
console.log(res);
