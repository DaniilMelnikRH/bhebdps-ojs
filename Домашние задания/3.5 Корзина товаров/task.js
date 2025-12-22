const products = document.querySelectorAll(".product");
const cartProducts = document.querySelector(".cart__products");

products.forEach(product => {
  const decBtn = product.querySelector(".product__quantity-control_dec");
  const incBtn = product.querySelector(".product__quantity-control_inc");
  const valueElem = product.querySelector(".product__quantity-value");
  const addBtn = product.querySelector(".product__add");

  decBtn.addEventListener("click", () => {
    let value = Number(valueElem.textContent);
    if (value > 1) valueElem.textContent = value - 1;
  });

  incBtn.addEventListener("click", () => {
    let value = Number(valueElem.textContent);
    valueElem.textContent = value + 1;
  });

  addBtn.addEventListener("click", () => {
    const productId = product.dataset.id;
    const productImage = product.querySelector(".product__image").src;
    const quantity = Number(valueElem.textContent);

    let cartProduct = cartProducts.querySelector(
        `.cart__product[data-id="${productId}"]`);

    if (cartProduct){
      const countElem = cartProduct.querySelector(".cart__product-count");
      countElem.textContent = Number(countElem.textContent) + quantity;
    } else{
      const cartItem = document.createElement("div");
      cartItem.className = "cart__product";
      cartItem.dataset.id = productId;

      cartItem.innerHTML = `
        <img class="cart__product-image" src="${productImage}">
        <div class="cart__product-count">${quantity}</div>
      `;

      cartProducts.appendChild(cartItem);
    }
    
  });

});