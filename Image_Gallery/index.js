const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const images = document.querySelectorAll(".wrapper .image img");
const close = document.querySelector(".close");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const gallery = document.querySelector(".gallery");
const galleryImg = document.querySelector(".gallery__inner img");

let currentIndex = 0;
let sizeImg = images.length;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showGallery();
  });
});

function showGallery() {
  currentIndex == sizeImg - 1
    ? next.classList.add("hide")
    : next.classList.remove("hide");
  currentIndex == 0
    ? prev.classList.add("hide")
    : prev.classList.remove("hide");
  gallery.classList.add("show");
  galleryImg.src = images[currentIndex].src;
}

close.addEventListener("click", () => {
  gallery.classList.remove("show");
});

next.addEventListener("click", () => {
  currentIndex != sizeImg - 1 ? currentIndex++ : undefined;
  showGallery();
});

prev.addEventListener("click", () => {
  currentIndex != 0 ? currentIndex-- : undefined;
  showGallery();
});

// esc click
document.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) gallery.classList.remove("show");
});
