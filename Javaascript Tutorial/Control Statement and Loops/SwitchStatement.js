var area = "rectangle";
var pi = 3.14,r = 3,l=3,b=5,h=4;
switch(area){
    case "circle" :
        console.log("Area of circle is ", pi*r**2);
        break;
    case "rectangle" :
        console.log("Area of rectangle is ", l*b);
        break;
    case "triangle" :
        console.log("Area of traingle is ", (1/2)*b*h);
        break;
    default :
    console.log("Invalid data");
    break;

}


