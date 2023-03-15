let cartListAsin = [];

const delBook = function (id) {
  let cardReference = document.getElementById(`${id}`);
  cardReference.classList.add("deleteClass");
};

const addToCart = function (asin) {
  cartListAsin.push(asin);
  console.log(cartListAsin);
};
