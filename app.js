const list = document.querySelector("#todo-list ul");

//delete todo
list.addEventListener("click", (e) => {
  if (e.target.id == "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }

  //edit todo
  if (e.target.id == "edit") {
    const li = e.target.parentElement;
    const txt = li.querySelector("span").textContent;
    var addForm = document.forms["add-todo"];
    addForm.querySelector('input[type="text"]').value = txt;
    list.removeChild(li);
  }
  // style="text-decoration: line-through;"

  //mark todo as done
  if (e.target.id == "todo-done") {
    const txt = e.target.previousElementSibling;
    if (txt.getAttribute("style") == "text-decoration: line-through;") {
      txt.setAttribute("style", "");
    } else {
      txt.setAttribute("style", "text-decoration: line-through;");
    }
  }
});

//delete all
const listAll = document.querySelector("#todo-list");
listAll.addEventListener("click", (e) => {
  if (e.target.className == "clear-all") {
    const ul = e.target.previousElementSibling;
    const li = document.querySelector("#todo-list li");
    document.querySelectorAll("#todo-list li").forEach((element) => {
      ul.removeChild(element);
    });
  }
});

//add todo
const addForm = document.forms["add-todo"];
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  //create elements
  const li = document.createElement("li");
  const todo = document.createElement("span");
  const doneBtn = document.createElement("i");
  const editBtn = document.createElement("i");
  const deleteBtn = document.createElement("i");

  //add content
  todo.textContent = value;

  //add attributes
  doneBtn.setAttribute("id", "todo-done");
  doneBtn.setAttribute("class", "fa fa-check-circle-o");
  editBtn.setAttribute("id", "edit");
  editBtn.setAttribute("class", "fa fa-edit");
  deleteBtn.setAttribute("id", "delete");
  deleteBtn.setAttribute("class", "fa fa-times-circle-o");

  //append
  li.appendChild(todo);
  li.appendChild(doneBtn);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  addForm.querySelector('input[type="text"]').value = "";
});
