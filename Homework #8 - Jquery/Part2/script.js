$(document).ready(function () {
    $("#generateBtn").click(function () {

        $("#message").text("");

        let headerText = $("#headerText").val();
        let headerColor = $("#headerColor").val();

        if (!headerText || !headerColor) {
            $("#message").text("Please enter both text and color.");
        } else if (!isValidColor(headerColor)) {
            $("#message").text("Invalid color format. Please use a valid color.");
        } else {
            let newHeader = $("<h1></h1>").text(headerText).css("color", headerColor);
            $("#headerContainer").append(newHeader);
        }

        function isValidColor(color) {
            let regex = /^#[0-9A-Fa-f]{6}$/;
            return regex.test(color);
        }
    })
})