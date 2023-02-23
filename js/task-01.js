const categoriesCount = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesCount.length}`);

categoriesCount.forEach(function (element) {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
