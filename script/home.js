var menu = document.querySelector(".menu");

fetch("../data/mock.js")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    data.forEach((item) => {
      var product = document.createElement("div");
      product.innerHTML = `<img src="${item.image}" alt="sample">
<h3>${item.Food.charAt(0).toUpperCase() + item.Food.slice(1)}</h3>
<p>Lorem ipsum <br> dolor sit amet consectetu</p>`;
      product.classList.add("product");
      menu.appendChild(product);
    });
  })
  .catch((err) => console.error(err));
