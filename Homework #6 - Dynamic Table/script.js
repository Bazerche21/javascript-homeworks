let submBtn = document.getElementById("submitBtn");

submBtn.addEventListener("click", function createTable() {

    let numberOfRows = document.getElementById("rows").value;
    let numberOfColumns = document.getElementById("columns").value;

    numberOfColumns = parseInt(numberOfColumns);
    numberOfRows = parseInt(numberOfRows);

    let table = "<table>"

    for (let i = 0; i < numberOfRows; i++) {
        table += "<tr>";

        for (let j = 0; j < numberOfColumns; j++) {
            table += "<td>" + 'Row -' + (i + 1) + ' Column -' + (j + 1) + "</td>"
        }
        table += "</tr>";
    }

    table += "</table>";
    document.getElementById("tableArea").innerHTML = table;

});
