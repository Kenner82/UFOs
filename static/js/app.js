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