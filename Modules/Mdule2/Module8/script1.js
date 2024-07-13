const list = document.getElementById("list");
const button = document.getElementById("Add_button");
let index =1;

button.addEventListener("click", function() {
    let element = document.createElement("li")
    element.textContent = "Test #" + index++;
    list.appendChild(element);
});