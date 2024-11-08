{
// function removeDuplicates

function removeDuplicates(arr:number[]):number[]{

    return arr.filter((element:number,index:number):boolean=>arr.indexOf(element)===index)

}

// here created an array for test the function removeDuplicates

const result1:number[] = removeDuplicates([1, 2, 2, 3, 4, 4, 5,5,6,6])

// here printed the result
console.log(result1);

//
}
