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

// select the form
var form = d3.selectAll(".form-control");

// create event handlers
form.on("click", runEnter);

// complete the event handler function for the form
function runEnter() {

    d3.select("tbody").html("");

    // prevent the page from refreshing
    d3.event.preventDefault();

    // select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

    // get the value property of the input element
    var inputValue1 = inputDate.property("value");
    var inputValue2 = inputCity.property("value");
    var inputValue3 = inputState.property("value");
    var inputValue4 = inputCountry.property("value");
    var inputValue5 = inputShape.property("value");

    // create a new table showing only the filtered results
    var filteredData = tableData.filter(ufoReport => {
        return (ufoReport.datetime === inputValue1) ||
                (ufoReport.city === inputValue2) ||
                (ufoReport.state === inputValue3) ||
                (ufoReport.country === inputValue4) ||
                (ufoReport.shape === inputValue5) 
    })

    filteredData.forEach((filteredReport) => {
        var row = tbody.append("tr");
        Object.entries(filteredReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}