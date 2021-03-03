var message = "in global";
console.log ("global: message = " + message);

var a = function () {
    var message = "inside a";
    console.log ("a: message = " + message);

    function b () {
        console.log ("b: message = " + message);
    }

    b();

}


a();

//Object Types
firstName: "Yaakov";
lastName:  "Chaikin";
social: {
    linkedin: "yaakovchaikin";
    twitter:  "yaakovchaikin";
    facebook: "CourseraWebDev";
}

//Primitive Types: represents a single, immutable value
    //Primitive Type: Undefined can only have one value (undefined)
    //and you should never set a variable to undefined!
    //Primitive Type: Null - lack of definition, can only have one value (null), can set a variable to null
    //Primitive Type: Number -
//not an object; once it's set, it can't be changed; value becomes read only
//Boolean can only have 2 values: true or false

