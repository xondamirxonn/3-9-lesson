// let images = [
//   "/image/cars.webp",
//   "/image/car2.jpg",
//   "/image/car3.jpg",
//   "/image/car4.jpeg",
// ];


// let imageElem = document.querySelector(".image");

// console.log(imageElem.getAttribute("alt"));
// let i = 0;
// imageElem.setAttribute("scr", images[i]);

// setInterval(() => {
//   if(++i === images.length){
//     i = 0;
//   }
//   imageElem.setAttribute("src", images[i]);
// }, 4000);

// let btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//   alert("salom")
// })

// dbclick => double click 
// btn.addEventListener("dblclick", () => {
//   alert("Salom DBL")
// })

// context menu
// btn.addEventListener("contextmenu", () => {
//   alert("Salom context menu")
// });

// let div = document.querySelector("div");

// div.addEventListener("mouseenter", () => {
//   console.log("Mishka kirdi");
//   div.style.backgroundColor = "blue"
  
// });

// div.addEventListener("mouseleave", () => {
//   console.log("Mishka chiqdi");
//   div.style.backgroundColor = "red"
// })

// div.addEventListener("mouseover", () => {
//   console.log("over");
// })

// div.addEventListener("mouseout", () => {
//   console.log(("out"));
// })



//  amaliyot

let h2 = document.querySelector("h2");
let btn = document.querySelector("#btn");
let reset = document.querySelector(".reset")

btn.addEventListener("click", () => {
  h2.textContent = h2.textContent * 1 + 1
  // console.log(btn)
})

reset.addEventListener("click" , () => {
  h2.textContent = 0
})
