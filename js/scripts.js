var dayOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleAkanName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleAkanName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function akan() {
    var year = document.getElementById("year").value;
    var month = parseInt(document.getElementById("month").value);
    var date = parseInt(document.getElementById("date").value);
    var gender = document.getElementById("gender").value;

    var CC = parseInt(year.substr(0, 2));
    prompt(CC);
    var YY = parseInt(year.substr(2, 3));
    // prompt(cc)

    
    prompt(YY)


}