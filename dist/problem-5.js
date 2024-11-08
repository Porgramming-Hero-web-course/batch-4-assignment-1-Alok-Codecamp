"use strict";
{
    // define generic function
    const getPropertiy = (inputObject, propertyName) => {
        return inputObject[propertyName];
    };
    // created object person 
    const person = { name: "MR.X", age: 30, email: 'abc.bd@gmail.com' };
    // printed the function return value 
    console.log(getPropertiy(person, "age"));
}
