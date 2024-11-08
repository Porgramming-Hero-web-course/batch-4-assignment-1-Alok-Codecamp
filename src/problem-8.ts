{

const validateKeys = <T extends {}>(obj:T,keys:(keyof T)[])=>{

    const res = keys.map(arr=>arr in obj );
const finalRes = res.filter(rr=>rr===true);

return finalRes.length===keys.length?'true':false;
}

const person = {name:'khan',phone:45723847,email:'abc@mail.com',age:30,tel:2222343535};
console.log(validateKeys(person, ["tel"]));








    
    























}