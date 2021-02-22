// from data.js
var tableData = data;

// 1. appends a table to your web page and then adds new rows of data for each UFO sighting
var tbody = d3.select("tbody");

tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});


// 2. search through the date/time column to find rows that match user input

// select the button
var button = d3.select("#filter-btn");
// select the form
var form = d3.select("form");

// create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// complete the event handler function for the form
function runEnter() {

    d3.select("tbody").html("");

    // prevent the page from refreshing
    d3.event.preventDefault();

    // select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    // create a new table showing only the filtered results
    var filteredData = tableData.filter(ufoReport => ufoReport.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach((filteredReport) => {
        var row = tbody.append("tr");
        Object.entries(filteredReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}