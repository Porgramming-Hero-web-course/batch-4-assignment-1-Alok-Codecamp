"use strict";
{
    // function update profile 
    const updateProfile = (obj, updateObj = Object.assign({}, obj)) => {
        const updatedObj = Object.assign(Object.assign({}, obj), updateObj);
        return updatedObj;
    };
    const myProfile = { name: "MR.T", age: 25, email: "abc@mail.com" };
    console.log(updateProfile(myProfile, { name: 'MR.W', age: 30, email: 'hello@mail.com' }));
    // Sample Output:
}
