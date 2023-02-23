const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");
const galleryItems = images
  .map(
    (image) =>
      `<li><img src=${image.url} class="new-img" alt="${image.alt}"></img></li>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryItems);
gallery.style.cssText = `
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 0;
  margin: 0;
  list-style: none;
  `;
const img = document.querySelectorAll(".new-img");
[...img].forEach(function (element) {
  element.style.cssText = `
  width: 100%;
  `;
});
