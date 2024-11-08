{
    type Circle = {
    shape:'circle';
    radius:number;
}

type Rectangle = {
    shape:'rectangle';
    height:number;
    width:number;
}
type CircleRectangleType = Circle | Rectangle;

function calculateShapeArea(param:CircleRectangleType){
   
   if('radius' in param){
        const circleArea= Math.PI*param.radius*param.radius;
        const fixedCircleArea= circleArea.toFixed(2);
        return parseFloat(fixedCircleArea);
        
   }
   if('height' in param ){

    const rectangleArea = param.height*param.width
    const fixedRectangleArea = rectangleArea.toFixed(2);
    return parseFloat(fixedRectangleArea);
    }

    
   }
    
   

//  test circle area 
   const cirleArea = calculateShapeArea({ shape: "circle", radius: 5 })

  //  test rectangleArea

const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4.56,
    height: 6,
  });

  // printed circle area 
console.log(cirleArea);

//printed rectangle area
console.log(rectangleArea);



}