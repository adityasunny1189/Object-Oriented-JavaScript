class user 
{
    constructor(email , pass , name) 
    {
        this.email = email;
        this.pass = pass;
        this.name = name;
    }
    login() 
    {
        console.log(this.email , ' has logged in.');
    }
    logout() 
    {
        console.log(this.email , " has logged out.");
    }
}

class admin extends user 
{
    deleteUser(u) 
    {
        users = users.filter(u => {return u.email != user.email;})
    }
}

var userOne = new user("userOne@gmail.com" , "123$%6" , "Ram");
var userTwo = new user("userTwo@gmail.com" , "1@#45^" , "Shyam");
var userThree = new admin("userThree@gmail.com" , "12#$56" , "Aditya" , "19");


var users = [userOne , userTwo , userThree];

console.log(userOne);
userThree.login();
userThree.logout();
console.log(userTwo);
console.log(userThree);