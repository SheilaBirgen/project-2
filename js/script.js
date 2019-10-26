function weekdays() {
    var day = document.getElementById("day").value;
    var enterDate = day.split("-");
    var dd = parseInt(enterDate[2]);
    var mm = parseInt(enterDate[1]);
    var yy = parseInt(enterDate[4]);
    //General Array Function
function MakeArray(n) {
    this.length = n;
    for (var i = 1; i <=n; i++) {
      this[i] = 0;
    }
 }
 
 //male Initialize Days of Week Array
 days = new MakeArray(7);
 days[0] = "Kwame"
 days[1] = "Kwasi"
 days[2] = "Kwadwo"
 days[3] = "Kwabena"
 days[4] = "Kwaku"
 days[5] = "Yaw"
 days[6] = "Kofi"
 
 //female Initialize Days of Week Array
 day = new MakeArray(7);
 day[0] = "Ama"
 day[1] = "Akosua"
 day[2] = "Adwoa"
 day[3] = "Abenaa"
 day[4] = "Akua"
 day[5] = "Yaa"
 day[6] = "Afua"
 //Initialize Months Array
 months = new MakeArray(12);
 months[1] = "January" 
 months[2] = "February" 
 months[3] = "March" 
 months[4] = "April" 
 months[5] = "May" 
 months[6] = "June" 
 months[7] = "July" 
 months[8] = "August"
 months[9] = "September" 
 months[10] = "October"
 months[11] = "November"
 months[12] = "December"