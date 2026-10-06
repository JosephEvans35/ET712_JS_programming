console.log("---- example 1 object ----");
//Create an object 'car'
const car = {
    //properties
  type: "Fiat",
  model: "500",
  color: "white",

  //method
  carname: function() {
    return this.type + " " + this.model;
  }
}

//call the properties of the object 'car'
console.log(car.color); 
console.log(car["type"]);
console.log(car.carname());

console.log("---- example 2 object Constructor ----");
function Course(title, instructor, code, session, students) {
    this.t = title;
    this.i = instructor;
    this.c = code;
    this.s = session;
    this.number_students = students;
}

//create an object of the Course
let course1 = new Course("Computer Applications", "Joseph Evans", "TECH100", "M1", 20);
let course2 = new Course("Web Development", "John Smith", "TECH200", "C3", 18);

//access to the Course object values
console.log(course1.i);
console.log(course2.number_students);

console.log("---- example 3 Methods of an object ----");
const Square = {
    //methods
    area(side){
        return side * side;},
    perimeter(side){return 4 * side;}

    }

    //access to the methods of the object
    let s = 9
    let area1 = Square.area(s);
    let perimeter1 = Square.perimeter(s);
    console.log(`The square with side ${s} has an area of ${area1} and a perimeter of ${perimeter1}`);

    console.log("---- example 4 methods of an object using 'this' statement ----");
    const hen = {
        //properties
        name: "Helen",
        eggcount: 0,
        
        //methods
        lay_an_egg(){
            this.eggcount++
            return 'EGG'}

    }

    console.log("---- Lab Exercise  ----");
    const mycalculator = {
        //properties
        message: "This is my Square calculator",
        description: "This calculator can calculate the area and volume of squares and cubes",
        //methods
        area_square(side) {
            
            return Math.pow(this.side, 2);
        },
        volume_cube(side) {
            return Math.pow(this.side, 3);
        }
    }
    // Math.pow(base, exponent) returns base raised to the exponent.
    // For example, Math.pow(2, 3) is 2 * 2 * 2, which equals 8.
    console.log(mycalculator.message);
    console.log(`Area of square: ${mycalculator.area_square(2)}`);
    console.log(`Volume of cube: ${mycalculator.volume_cube(2)}`);

    console.log("---- Lab Exercise 2 ----");
    function readProperty(obj, prop) {
    try {
        return obj[prop];
    } catch (error) {
        return "Error accessing property";
    }
}
// Example 1
const student = {
name: "John",
age: 20
};
console.log(readProperty(student, "name"));
// Example 2
console.log(readProperty(null, "name"));

/* Reflection:
1) AI helped me understand object methods.
2) AI helped me understand exception handling and debugging errors.
*/
