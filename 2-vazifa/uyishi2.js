let form = document.querySelector("form");
let ul = document.querySelector("ul");
let reset = document.querySelector(".reset");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = e.target[0];
  let text = input.value;
  if (!text) {
    alert("Katak bo'sh bo'lmasligi kerak!");
    return;
  }

  ul.innerHTML +=
    "<li>" +
    '<i class="fa-solid fa-circle-check" style="color: #49b800;"></i>   ' +
    text +
    "</li>";
  e.target.reset();
});

reset.addEventListener("click", () => {
  ul.textContent = "";
});
