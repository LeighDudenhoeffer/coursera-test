// should be undefined
var x;
console.log(x);

if (x == undefined) {
    console.log ("x is undefined");
}

x = 5;
if (x == undefined) {
    console.log ("x is undefined");
}
else {
    console.log ("x has been defined");
}


//Object Types
//firstName: "Yaakov";
//lastName:  "Chaikin";
//social: {
//    linkedin: "yaakovchaikin";
//    twitter:  "yaakovchaikin";
//    facebook: "CourseraWebDev";
//}

//Primitive Types: represents a single, immutable value
    //Primitive Type: Undefined can only have one value (undefined)
    //and you should never set a variable to undefined!
    //Primitive Type: Null - lack of definition, can only have one value (null), can set a variable to null
    //Primitive Type: Number - the only numeric type in JS - no integers
    ///Primitive Type: String - is a sequence of characters used to represent text and
    //can use single or double quotes to define ('text' or "text")
    ///Primitive Type: Symbol -
//not an object; once it's set, it can't be changed; value becomes read only
//Boolean can only have 2 values: true or false

