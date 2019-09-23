//Declaring Functions or Methods inside function and using this keyword

var userOne = {
    propOne : "property one",
    propTwo : 2,
    propThree : true,
    funcOne() {
        console.log(this.propOne, " is a property!");
    },
    funcTwo() {
        // console.log(this.propTwo, " is a number!");
        return "This is a number";
    }
};

userOne.funcOne();
console.log(userOne.funcTwo());