const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach(function (element) {
  const listItem = document.createElement("li");
  listItem.textContent = element;
  listItem.classList.add("item");
  const list = document.querySelector("#ingredients");
  list.append(listItem);
});
