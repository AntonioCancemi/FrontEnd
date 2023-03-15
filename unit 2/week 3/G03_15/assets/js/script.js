fetch(`https://striveschool-api.herokuapp.com/books`)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    let booksList = data;
    let cardContainerReference = document.getElementById("cardContainer");
    let k = 0;
    data.forEach((book) => {
      k++;
      cardContainerReference.innerHTML += `<div id="${k}" class="col-sm-12 col-md-6 col-lg-3  d-flex justify-content-center py-2">
      <div class="card " style="width: 18rem ">
        <img src="${book.img}" class="card-img-top" alt="copertina" />
        <div class="card-body ">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">
            category: ${book.category}
            
          </p>
          <p>price: ${book.price}</p>
          
          <div class="btn-group align-self-end" role="group" aria-label="Basic mixed styles example">
          <a onClick="delBook(${k})" class="delete btn btn-danger">Delete</a>
          <a onClick="addToCart(${book.asin})" class="add btn btn-success">Add to cart</a>
        </div>
        </div>
        </div>
        </div>`;
    });
    return booksList;
  })
  .catch((err) => {
    console.log(err);
  });
