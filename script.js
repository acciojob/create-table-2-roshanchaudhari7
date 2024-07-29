function createTable() {
    //Write your code here
  let numberOfRows = parseInt(prompt("Input number of rows"), 10);
  let numberOfCols = parseInt(prompt("Input number of columns"), 10);
  let tableData = document.getElementById("myTable");
  tableData.innerHTML = "";
  
  for(let i = 0; i < numberOfRows; i++) {
    let row = document.createElement("tr");
    
    for(let j = 0; j < numberOfCols; j++) {
      let cell = document.createElement("td");
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }
    tableData.appendChild(row);
  }
  
}
