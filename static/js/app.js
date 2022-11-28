// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
// tell Javascript to look for the <tbody> tags in the HTML
var tbody = d3.select("tbody");


function buildTable(data) {
    //clear table so we don't add to already filtered data and create duplicates
    tbody.html("");


    // With the below function, we have done the following:
    // Looped through each object in the array
    // Appended a row to the HTML table
    // Added each value from the object into a cell


    //added an argument (dataRow) that will represent each row of the data as we iterate through the arra
    data.forEach((dataRow) => {
        // tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr")
        let row = tbody.append("tr");


        // By starting our line of code with Object.values, we're telling JavaScript to reference one object from the array of UFO sightings
        // By adding (dataRow) as the argument, we are saying that we want the values to go into the dataRow
        // We've added forEach((val) to specify that we want one object per row.

        // Let's think of it this way: we're telling our code put each sighting onto its own row of data. The val argument represents each item in the object, such as the location, shape, or duration.
        Object.values(dataRow).forEach((val) => {

          // append each value of the object to a cell in the table
          let cell = row.append("td");
          cell.text(val);
          }
        );
      });
}

function handleClick() { 
    // telling D3 to look for the first #datetime id in the HTML tags
    // By chaining .property("value"); to the d3.select function, we're telling D3 not only to look for where our date values are stored on the webpage, but to actually grab that information and hold it in the "date" variable.
    let date = d3.select("#datetime").property("value");

    // default filter will actually be the original table data because we want users to refine their search on their own terms
    let filteredData = tableData;


    // Check to see if a date was entered and filter the data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);

    // Rebuild the table using the filtered data. If no date was entered, then filteredData will just be the original tableData.
    buildTable(filteredData);
    };
}


// Our selector string contains the id for another HTML tag. 
// (We'll assign a unique id to a button element in the HTML called "filter-btn".) 
// This time it'll be included in the button tags we create for our filter button. 
// By adding this, we're linking our code directly to the filter button. 
// Also, by adding .on("click", handleClick);, we're telling D3 to execute our handleClick() function when the button with an id of filter-btn is clicked
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);