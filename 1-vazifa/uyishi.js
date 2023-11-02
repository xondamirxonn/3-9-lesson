let image = [
  "/of.jpg",
  "/on.jpg",
];

let images = document.querySelector(".image");
let button = document.querySelector(".button");
let i = 0;


button.addEventListener("click", () =>{
  if (++i === image.length) {
    i = 0;
    button.textContent = "On"
  }
  else{
    button.textContent = "Of"
  }
  images.setAttribute("src", image[i])
})