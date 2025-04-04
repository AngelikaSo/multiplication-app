const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", function () {
  let number = prompt("Enter number to multiply");
  console.log(number);
  number = parseInt(number);

  output.innerHTML = " ";

  for (let i = 1; i <= 10; i++) {
    const result = `${number} * ${i} = ${number * i}`;
    const p = document.createElement("p");
    p.textContent = result;
    output.appendChild(p);
  }
});
