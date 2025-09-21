const input = document.querySelector("#taskInput");
const button = document.querySelector("#addBtn");
const list = document.querySelector("#taskList");

button.addEventListener("click", function () {
  if (input.value === "") {
    alert("please write something below");
  } else {
const li = document.createElement("li");
li.textContent = input.value;
list.appendChild(li);
input.value = "";
const delBtn = document.createElement("button");
delBtn.textContent = "🔴";
delBtn.classList.add("delete");

const editBtn = document.createElement("button");
editBtn.textContent = "Edit";
editBtn.classList.add("edit");


li.appendChild(delBtn);
li.appendChild(editBtn);
saveData()
  }
});
list.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    saveData();
  }

  if (e.target.classList.contains("edit")) {
    let li = e.target.parentElement;
    let newTask = prompt("Enter a new text", li.firstChild.textContent);
    if (newTask && newTask.trim() !== "") {
      li.firstChild.textContent = newTask;
      saveData();
    } else {
      alert("Enter some text");
    }
  }
});
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    e.preventDefault(); 
    button.click();    
  }
});

function saveData() {
  localStorage.setItem("Data", list.innerHTML);
}

function loadData() {
  list.innerHTML = localStorage.getItem("Data") || "";
}
loadData();
