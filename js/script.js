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
 