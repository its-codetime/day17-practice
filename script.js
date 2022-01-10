// task 1
const selectElement = document.querySelector("#countries");
const form = document.querySelector("form");
const input = document.querySelector("#input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const country = input.value;
  if (country.length < 1) return;
  const option = document.createElement("option");
  option.innerText = country;
  option.value = country;
  console.log({ country, option });
  selectElement.appendChild(option);
  input.value = "";
});

// task-2
const colors = Array.from(document.querySelectorAll(".color"));
const output = document.querySelector(".output");

colors.forEach((color) => {
  color.addEventListener("click", () => {
    output.innerText = color.dataset.color;
  });
});
