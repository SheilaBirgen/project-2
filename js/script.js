var maleAkanNames = [
  "Kwame",
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi"
];
var femaleAkanNames = [
  "Ama",
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua"
];
var daysofTheWeek = [
  "Sunday",
  "Monday",
  "Teusday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
function akanName() {
  var yy = parseInt(document.getElementById("yy").value);
  var mm = parseInt(document.getElementById("mm").value);
  var dd = parseInt(document.getElementById("dd").value);
  var male = document.getElementById("male");
  var female = document.getElementById("female");

  if (dd <1 || dd > 31) {
    alert("Enter a valid date");
  } else if (mm < 1 || mm > 12) {
    alert("Enter a valid month");
  }

  var birthDate = new Date(dd + "/" + mm + "/" + yy);
  var day = birthDate.getDay();
  if (male.checked == true) {
    alert(
      "you were born on" +
        daysofTheWeek[day] +
        "and your Akan name is" +
        maleAkanNames[day]
    );
  } else if (female.checked == true) {
    alert(
      "you were born on" +
        daysofTheWeek[day] +
        "and your Akan name is" +
        femaleAkanNames[day]
    );
  }
}
