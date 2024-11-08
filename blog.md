 # The significance of union and intersection types in typescript

 Here we will discuss about significance of union and intersection types.
 
 ##  union type
    In typescript union types allow you to specify that a single  type
     can hold tow or more types, and during compilation any one of those
      types can be used. It is essential to ensure that at least one of 
      the types in the union includes all the required properties.
    Let's assume, I have type A and type B. By using this tow 
    types a new type can be created. let's assume my new type is C 
    where C can be either type A or type B. union types are widely used in typescript.

###  Usage of union types
    we have a contact form where there is a user name input box. here user can provide a string or a number as input. in this case we should use uinion type. let's see the code below.
    
    type A = string;
    type B = number;

    difine union type C using this tow type A and type B

    type C = A | B;

    in type C we can use either type A or type B



## intersection types
    In typescript intersection types allow you to create a type that is combination of multiple type. let's assume you have type X and type Y and you neeed a new type where you need both of type X and Y. in this case you can use intersection type. intersection allow you to define a new type that's combination of type X and type Y. lets assume our new type Z. here Z can be hold both of type X and type Y. 

### Usage of type intersection

    let's assume you have type Name=string and type Age=string, now you need to create a type Person where you need to define both type Name and Age here you can you type intersection. 
    let's see the code below,

    type Name = string;
    type Age = string;

    type Person = Name & Age;

    here Person is an intersection type that includes both of type Name and Age.

    
