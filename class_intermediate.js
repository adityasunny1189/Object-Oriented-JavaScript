class student {
    constructor(name, usn, sem) {
        this.name = name;
        this.usn = usn;
        this.sem = sem;
    }
    logIn() {
        console.log(this.usn, " Has logged in!");
    }
    logOut() {
        console.log(this.usn, " Has logged out!");
    }
};

var StudentOne = new student("aditya", "IS003", 3);
var StudentTwo = new student("Sourav", "IS047", 3);

StudentOne.logIn();
StudentTwo.logOut();