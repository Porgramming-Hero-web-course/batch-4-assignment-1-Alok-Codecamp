
{

//Defined interface Profile

interface Profile{
    name:string;
    age:number;
    email:string;
}

// define type Update profile 

type UpdateProfile = {
    name?:string;
    age?:number;
    email?:string;
};

// function update profile 

const updateProfile =(obj:Profile,updateObj:UpdateProfile={...obj})=>{

    const updatedObj ={...obj,...updateObj} 
    return updatedObj;
}



const myProfile = { name: "MR.T", age: 25, email: "abc@mail.com" };
console.log(updateProfile(myProfile, {name:'MR.W',age: 30,email:'hello@mail.com'}));

// Sample Output:

















}