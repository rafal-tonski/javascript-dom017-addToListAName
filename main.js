const btnAddName = document.querySelector("button");
const input = document.querySelector("input");
let placeForList = document.querySelector("div");
let nameList = [];

btnAddName.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value.trim().length) {
    for (word of nameList) {
      if (word === input.value.trim()) {
        alert("Takie imię już istnieje w bazie");
        return;
      }
    }
    nameList.push(input.value.trim());
    input.value = "";
    placeForList.textContent = nameList.join(", ");
  }
});
