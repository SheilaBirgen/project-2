function akanName() {
  var maleAkanNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
  ];
  var femaleAkanNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
  ];
  var daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Teusday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var year = parseInt(document.getElementById("year").value);
  var month = parseInt(document.getElementById("month").value);
  var day = parseInt(document.getElementById("day").value);
  var male = document.getElementById("male");
  var female = document.getElementById("female");

  var day = new Date(year + "/" + month + "/" + day);
  var dob = day.getDay();

  if (male.checked == true) {
    alert(
      "you were born on " +
        daysOfTheWeek[dob] +
        " and your akan name is " +
        maleAkanNames[dob]
    );
  } else if (female.checked == true) {
    alert(
      "you were born on " +
        daysOfTheWeek[dob] +
        " and your akan name is " +
        femaleAkanNames[dob]
    );
  } else {
    alert("an error occured");
  }
}
function refreshPage() {
	window.location.reload();
}
