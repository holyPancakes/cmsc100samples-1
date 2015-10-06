function cube(n) {
    return n*n*n;
}

var cube=function(n){
    return n*n*n;
}

alert(cube(4545));

function foo(a) {
    a = 100;
    console.log("Inside the function a is " + a);
}

function foo2(myObject) {
    myObject.fname = "John";
}

function foo3(myObject){/*won't work*/
    myObject = {fname:"Jane", lname:"Dizon", age:25};
}

//function definition
function student(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    
    this.changeName = changeName;
    this.updateAge = updateAge;
}

function changeName(newFname, newLname) {
    this.fname = newFname;
    this.lname = newLname;
}

function updateAge(newAge) {
    this.age = newAge;
}