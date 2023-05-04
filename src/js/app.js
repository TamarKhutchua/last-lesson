// Get a reference to the table element
let table = document.getElementById("highlighter2");

// Add an event listener to the table that listens for clicks on the delete buttons
table.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    // Check if the clicked element is a button
    // Get the row that contains the clicked button
    let button = event.target;
    let row = button.parentNode.parentNode; // Assumes button is in a cell in a row

    // Delete the row from the table
    table.deleteRow(row.rowIndex);

    // Send a delete request to the server
    let id = row.getAttribute("data-id"); // Assumes the row has a data-id attribute with the ID of the record to delete
    fetch("/records/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }
});
