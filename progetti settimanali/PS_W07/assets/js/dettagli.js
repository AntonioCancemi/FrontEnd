let genericoUrl = "https://striveschool-api.herokuapp.com/api/product/";
let articleId = new URLSearchParams(window.location.search).get("id");
console.log(articleId);
const hideSpinner = function () {
  let spinnerReference = document.getElementsByClassName(
    "spinner-border text-warning"
  )[0];
  spinnerReference.classList.add("d-none");
};

const details = async function () {
  try {
    let url = genericoUrl + articleId;

    let response = await fetch(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzA3OWY4MWI0MjAwMTM5YjI3ZTUiLCJpYXQiOjE2NzkwNDQ3MzAsImV4cCI6MTY4MDI1NDMzMH0.gy8K_14ePxxMXiiSIbFr9hNNWic0Oe_T9TQCmJAmkdA",
      },
    });
    if (response.ok) {
      hideSpinner();
      let articleDetails = await response.json();
      //console.log(articleDetails);

      let containerReference = document.getElementById("details-container");
      let containerImg = document.getElementById("img");
      containerReference.innerHTML = `
        <h3>${articleDetails.name}</h3>
        <p>${articleDetails.brand}</p>
        <p>
            ${articleDetails.description}
        </p>
        <h5>${articleDetails.price}€</h5>
        <div>
            <h6>SERVER INFO</h6>
            <ul>
                <li>${articleDetails.createdAt}</li>
                <li>${articleDetails.updatedAt}</li>
                <li>${articleDetails._id}</li>
            </ul>
        </div>
    `;
      containerImg.innerHTML = `<img class="image-fluid" src="${articleDetails.imageUrl}" alt=""></img>`;
    } else {
      return new Error("OPS SI E` VERIFICA UN PROBLEMA");
    }
  } catch (error) {
    console.log(error);
  }
};
details();
