var studentOne = {
    name : "Aditya Pathak",
    usn : "1SI18IS003",
    branch : "Information Science",
    sem : 3,
    login() {
        console.log(this.usn, " Has Successfully logged in!");
    },
    logout() {
        return "Has Successfully logged out!";
    }
};

studentOne.login();
console.log(studentOne.logout());