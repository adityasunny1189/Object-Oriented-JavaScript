//Classes are used to create multiple objects of same type
//constructor is a function or method used to create empty objects
//we can pass arguments inside constructor function same way as in normal function

class Student {
    constructor(name, email, usn, sem) {
        this.name = name;
        this.email = email;
        this.usn = usn;
        this.sem = sem;
    }
}

var StudentOne = new Student("Aditya", "adi@gmail.com", "1SI18IS003", 3);
var StudentTwo = new Student("sunny", "sunny@hotmail.com", "1SI18IS002", 3);

console.log(StudentOne.name);
console.log(StudentTwo.email);