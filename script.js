//your JS code here. If required.
let form = document.querySelector("form");
let tableBody = document.querySelector("#book-list")
form.addEventListener("click", function (e) {
    e.preventDefault();
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let isbn = document.querySelector("#isbn").value;
    if (title && author && isbn) {
        let newRow = document.createElement("tr");
        newRow.innerHTML=`
		<td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td class="delete" onclick="deleteRow(this)">X</td>
      `;
        tableBody.appendChild(newRow);
        form.reset();
    }

});
function deleteRow(row){
  let rowDel=row.parentNode.parentNode.rowIndex;
  tableBody.deleteRow(rowDel);
}