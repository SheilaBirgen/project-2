//male Initialize Days of Week Array
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
  "sunday",
  "monday",
  "teusday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];

function akanName() {
  var year = parseInt(document.getElementbyId(yy).value);
  var month = parseInt(document.getElementbyId(mm).value);
  var dob = parseInt(document.getElementbyId(dob).value);

  var birthdate=new Date(dob+"/"+mm+"/"+yy+"/").getDay

  if (dob <= 1 || dob > 31) {
    alert("Enter a valid date");
  } else if (mm <= 1 || mm > 12) {
    alert("Enter a valid month");
  }

  if ((male.checked = true)) {
    alert("your born on" + birthdate + "and your Akan name is" + maleAkanNames);
  } else if ((female.checked = true)) {
    alert(
      "your born on" + birthdate + "and your Akan name is" + femaleAkanNames
    );
  } else {
    alert("An error occured");
  }
}
