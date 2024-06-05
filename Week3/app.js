
const h1 = document.querySelector("h1");
h1.remove(h1);
console.log(h1);

const body = document.querySelector("body");
const h3 = document.createElement("h3");
h3.textContent = "Testing DOM";
body.appendChild(h3);
console.log(h3);

const h4 = document.querySelector("h4");
h4.textContent = "DOMs";