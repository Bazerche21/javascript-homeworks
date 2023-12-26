$(document).ready(function () {
    $("#greetButton").click(function () {
        var name = $("#nameInput").val();

        if (name !== "") {
            $("#greeting").text("Hello there " + name + "!");
        } else {
            alert("Please enter a name.");
        }
    });
});