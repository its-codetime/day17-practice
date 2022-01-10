const selectElement = document.querySelector("#countries");
const form = document.querySelector("form");
const input = document.querySelector("#input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const country = input.value;
  const option = document.createElement("option");
  option.textContent = country;
  option.value = country;
  console.log({ country, option });
  selectElement.appendChild(option);
});
