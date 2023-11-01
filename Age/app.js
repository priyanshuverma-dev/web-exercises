$(document).ready(function() {
    const mydob = 1177804800000; // Your DOB in milliseconds

    $("#timer").css("display", "block");

    setInterval(function() {
        var now = new Date();
        var duration = now - mydob;
        var years = duration / 31556900000; // Milliseconds in a year

        var majorMinor = years.toFixed(9).toString().split('.');
        var ageHtml = majorMinor[0] + "<sup>." + majorMinor[1] + "</sup>";

        $("#age").html(ageHtml);
    }, 100);
});
