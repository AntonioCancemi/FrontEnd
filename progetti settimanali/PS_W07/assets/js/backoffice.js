let previewReference = document.getElementById("preview");
let URLgenerico = "https://striveschool-api.herokuapp.com/api/product/";
let articleId = new URLSearchParams(window.location.search).get("id");

console.log(articleId);
const renderCard = function () {
  previewReference.classList.remove("d-none");
  let article = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("url").value,
    price: document.getElementById("price").value,
  };
  previewReference.innerHTML = `
  <div class="col">
  <div class="card h-100">
  <div class="d-flex felx-collum align-itmes-center">      <img
    
  src="${article.imageUrl}"
  class="card-img-top "
  alt="..."
/></div>

    <div class="card-body  d-flex align-items-end ">
    <div class="border-top w-100">        
    <h5 class="card-title  w fw-bold">${article.name}</h5>
      <h5 class="card-title">${article.brand}</h5>
      <h5 class="card-title text-secondary">${article.price} €</h5>
      
      <a  href="dettagli.html?id=${article._id}" class="btn btn-primary btn-sm">DETAILS</a>
      <a  href="backoffice.html?id=${article._id}" class="btn btn-secondary btn-sm">EDIT</a>
    </div>

    </div>
    <div class="card-footer">
      <small class="text-muted">User: ${article.userId}</small>
    </div>
  </div>
</div>`;
  previewReference.classList.add("previewShow");
};
let btnDelete =
  '<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdropDelete"> DELETE</button>';
if (articleId) {
  console.log(document.getElementById("btnGroup"));
  document.getElementById("btnGroup").innerHTML += btnDelete;
  document.getElementById("publish").innerText = "MODIFICA";
  fetch(URLgenerico + articleId, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzA3OWY4MWI0MjAwMTM5YjI3ZTUiLCJpYXQiOjE2NzkwNDQ3MzAsImV4cCI6MTY4MDI1NDMzMH0.gy8K_14ePxxMXiiSIbFr9hNNWic0Oe_T9TQCmJAmkdA",
    },
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        return new Error("Error!");
      }
    })
    .then((articleData) => {
      //console.log(articleData);
      document.getElementById("name").value = articleData.name;
      document.getElementById("description").value = articleData.description;
      document.getElementById("brand").value = articleData.brand;
      document.getElementById("url").value = articleData.imageUrl;
      document.getElementById("price").value = articleData.price;
      hideSpinner();
    })
    .catch((err) => {
      console.log(err);
    });
}
const saveArticle = async function (newArticle) {
  try {
    let url = articleId ? URLgenerico + articleId : URLgenerico;

    let response = await fetch(url, {
      method: articleId ? "PUT" : "POST",
      headers: {
        "content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzA3OWY4MWI0MjAwMTM5YjI3ZTUiLCJpYXQiOjE2NzkwNDQ3MzAsImV4cCI6MTY4MDI1NDMzMH0.gy8K_14ePxxMXiiSIbFr9hNNWic0Oe_T9TQCmJAmkdA",
      },
      body: JSON.stringify(newArticle),
    });
    if (response.ok) {
      reset();
      previewReference.classList.remove("previewShow");
    } else {
      alert("Problema nella creazione dell'articolo");
    }
  } catch (error) {
    console.log(error);
  }
};

let formReference = document.getElementsByTagName("form")[0];
formReference.addEventListener("submit", (e) => {
  e.preventDefault();
  let newArticle = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("url").value,
    price: document.getElementById("price").value,
  };

  saveArticle(newArticle);
  return newArticle;
});
const reset = function () {
  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
  document.getElementById("brand").value = "";
  document.getElementById("url").value = "";
  document.getElementById("price").value = "";
  previewReference.classList.add("d-none");
};
const deleteThis = async function () {
  try {
    let response = await fetch(URLgenerico + articleId, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzA3OWY4MWI0MjAwMTM5YjI3ZTUiLCJpYXQiOjE2NzkwNDQ3MzAsImV4cCI6MTY4MDI1NDMzMH0.gy8K_14ePxxMXiiSIbFr9hNNWic0Oe_T9TQCmJAmkdA",
      },
    });
    if (response.ok) {
      window.location.href = "/backoffice.html";
    } else {
      alert("Problema nella CANCELLAZIONE dell'articolo");
    }
  } catch (error) {
    console.log(error);
  }
};
