let listArticle = [
  {
    name: "app test 1", //REQUIRED
    description: "somthing longer", //REQUIRED
    brand: "nokia", //REQUIRED
    imageUrl:
      "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
    price: 100, //REQUIRED
  },
  {
    name: "app test 1", //REQUIRED
    description: "somthing longer", //REQUIRED
    brand: "nokia", //REQUIRED
    imageUrl:
      "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
    price: 100, //REQUIRED
  },
  {
    name: "app test 1", //REQUIRED
    description: "somthing longer", //REQUIRED
    brand: "nokia", //REQUIRED
    imageUrl:
      "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
    price: 100, //REQUIRED
  },
  {
    name: "app test 1", //REQUIRED
    description: "somthing longer", //REQUIRED
    brand: "nokia", //REQUIRED
    imageUrl:
      "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
    price: 100, //REQUIRED
  },
];

const postArticle = async function (newArticle) {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/product/",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzA3OWY4MWI0MjAwMTM5YjI3ZTUiLCJpYXQiOjE2NzkwNDQ3MzAsImV4cCI6MTY4MDI1NDMzMH0.gy8K_14ePxxMXiiSIbFr9hNNWic0Oe_T9TQCmJAmkdA",

          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: `POST`,
        body: JSON.stringify(newArticle),
      }
    );

    //console.log("Post");
    //console.log(response);
  } catch (error) {
    console.log(error);
  }
};
let articleColle = [];
const getArticle = async function () {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/product/",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzA3OWY4MWI0MjAwMTM5YjI3ZTUiLCJpYXQiOjE2NzkwNDQ3MzAsImV4cCI6MTY4MDI1NDMzMH0.gy8K_14ePxxMXiiSIbFr9hNNWic0Oe_T9TQCmJAmkdA",
        },
      }
    );
    //console.log(response);
    if (response.ok) {
      articleColle = await response.json();
      console.log("get");
      console.log(articleColle);

      start();
    } else {
    }
  } catch (error) {
    console.log(error);
  }
};
getArticle();
//listArticle.forEach((newArticle) => {
// postArticle(newArticle);
//});
let cardContainerReference = document.getElementById("row");

const renderCard = function (article) {
  cardContainerReference.innerHTML += `   
    <div class="col">
    <div class="card h-100">
      <img
        src="${article.imageUrl}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">${article.name}</h5>
        <h5 class="card-title">${article.brand}</h5>
        
        <a  href="dettagli.html?id=${article._id}2" class="btn btn-primary btn-sm">dettagli</a>

      </div>
      <div class="card-footer">
        <small class="text-muted"></small>
      </div>
    </div>
  </div>`;
};

const start = function () {
  for (let i = 0; i < articleColle.length; i++) {
    renderCard(articleColle[i]);
  }
};

//passaggio parametri dettegli
