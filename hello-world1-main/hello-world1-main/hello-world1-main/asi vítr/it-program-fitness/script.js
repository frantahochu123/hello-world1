function logActivity() {
    var activityInput = document.getElementById("activity");
    var dateInput = document.getElementById("date");
    var calendar = document.getElementById("calendar");
 
    if (activityInput.value !== "" && dateInput.value !== "") {
        var date = new Date(dateInput.value);
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
 
        var cell = document.createElement("div");
        cell.innerHTML = `<strong>${activityInput.value}</strong><br>${day}.${month + 1}.${year}`;
        calendar.appendChild(cell);
 
        activityInput.value = "";
        dateInput.value = "";
    }
}