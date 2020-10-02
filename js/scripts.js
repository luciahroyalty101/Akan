var dayOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleAkanName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleAkanName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function akan() {
    var year = document.getElementById("year").value;
    var month = parseInt(document.getElementById("month").value);
    var Date = parseInt(document.getElementById("date").value);
    var gender = document.getElementById("gender").value;
    var CC = parseInt(year.substr(0, 2));
    var YY = parseInt(year.substr(2, 4)); 
    var MM = month;
    var DD = Date;
    var day = parseInt((5 * YY / 4) + (26 * (MM + 1) / 10) + DD) % 7

    if (gender === "Female") {
        alert("Akan name is " + femaleAkanName[day])
    } else {
        alert("Akan name is " + maleAkanName[day])
        
    }
    if (DD=>0||DD<32) {
        // alert("Valid date")
    } else {
        alert("Enter a valid date")
    }
    if (MM=>o||MM<12) {
        // alert("valid month")
    } else {
         alert("Enter a valid month")
            }
            if (YY=>1800||YY<2020) {
                // alert("valid year")
            } else {
                alert("Enter a valid year")
            }
           


}