{
    // created typescript  class  Car 

    class Car{
        make:string;
        model:string;
        year:number;
        constructor(make:string,model:string,year:number){
            this.make=make;
            this.model=model;
            this.year=year;
        }
        getCarAge(){
            const CurrentYear =new Date().getFullYear();
            if(CurrentYear>=this.year){
                const carAge = CurrentYear - this.year;;
            console.log(`${this.make} ${this.model} car age is ${carAge}`);
            }else{
                console.log(`${this.make} ${this.model} car is upcoming...`);
                
            }
        }
    }
    
    const car = new Car("Honda", "Civic", 2010);
    car.getCarAge();
    



    





















}