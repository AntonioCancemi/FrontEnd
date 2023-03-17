let previewReference = document.getElementById("preview");
let salvaBtn = document.getElementById("publish");
const renderCard = function () {
  let article = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("url").value,
    price: document.getElementById("price").value,
  };
  previewReference.innerHTML = `
  <div class="row"><div class="col">
          <div class="card h-100">
            <img
              src="${article.imageUrl}"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">${article.name}</h5>
              <h5 class="card-title">${article.brand}</h5>
              <p class="card-text">
                ${article.description}
              </p>
              <a href="#" class="btn btn-primary btn-sm">dettagli</a>

            </div>
            <div class="card-footer">
              <small class="text-muted"></small>
            </div>
          </div>
        </div></div>
          `;
  previewReference.classList.add("previewShow");
};
const saveArticle = async function () {
  let article = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("url").value,
    price: document.getElementById("price").value,
  };
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/product/",
      {
        method: "POST",
        body: JSON.stringify(article),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzA3OWY4MWI0MjAwMTM5YjI3ZTUiLCJpYXQiOjE2NzkwNDQ3MzAsImV4cCI6MTY4MDI1NDMzMH0.gy8K_14ePxxMXiiSIbFr9hNNWic0Oe_T9TQCmJAmkdA",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
    } else {
      alert("PROBLEMA NELLA CREAZIONE DEL PRODOTTO");
    }
  } catch (error) {
    console.log(error);
  }
};
salvaBtn.addEventListener("onclick", saveArticle());
