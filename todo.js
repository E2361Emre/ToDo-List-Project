//Tüm elementleri seçme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("clear-todos");

eventListeners();

function eventListeners() {
  //Tüm event listenerlar
  form.addEventListener("submit", addTodo);
}
function addTodo(e) {
  const newTodo = todoInput.value.trim();

  if (newTodo === "") {
    /*<div class="alert alert-danger" role="alert">
                        This is a danger alert—check it out!
                      </div>*/
    showAlert("danger", "Lütfen bir todo girin...");
  } else {
    addtodoToUI(newTodo);
    showAlert("success", "Todo başarıyla eklendi...");
  }

  e.preventDefault();
}
function showAlert(type, message) {
  const alert = document.createElement("div");

  alert.className = `alert alert-${type}`;

  alert.textContent = message;

  firstCardBody.appendChild(alert);

  //setTimeout

  setTimeout(function () {
    alert.remove();
  }, 1000);
}
function addtodoToUI(newTodo) {
  // String değeri list item olarak UI'ya ekleyecek.

  /*

  <!-- <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li>-->
  */
  // List Item Oluşturma
  const listItem = document.createElement("li");
  // Link oluşturma
  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = "<i class = 'fa fa-remove'></i>";

  listItem.className = "list-group-item d-flex justify-content-between";

  // Text Node Ekleme

  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);

  // Todo List'e List Item'ı Ekleme

  todoList.appendChild(listItem);
  todoInput.value = ""; // Yazılan eklendikten sonra boş bırakmak için kullanılır.
}
