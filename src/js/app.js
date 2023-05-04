function clearRow(button) {
  let row = button.parentNode.parentNode;
  let cells = row.getElementsByTagName("td");
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
}

let url = "https://borjomi.loremipsum.ge/api/delete_row";
let xhr = new XMLHttpRequest();
xhr.open("DELETE", url);
xhr.send();

function updateRow(button) {
  let row = button.parentNode.parentNode;

  let id = prompt("Enter id:");
  let name = prompt("Enter name:");
  let email = prompt("Enter email:");

  let cells = row.getElementsByTagName("td");
  cells[0].textContent = id;
  cells[1].textContent = name;
  cells[2].textContent = email;

  let url = "https://borjomi.loremipsum.ge/api/update_row";
  let xhr = new XMLHttpRequest();
  xhr.open("PUT", url);
  xhr.send(JSON.stringify({ id: id, name: name, email: email }));
}
