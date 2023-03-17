let genericoUrl = "https://striveschool-api.herokuapp.com/api/product/";
let articleId = new URLSearchParams(window.location.search).get("id");
console.log(articleId);

const getArticle = async function () {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/product",
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
      findArticle(articleColle);
    } else {
    }
  } catch (error) {
    console.log(error);
  }
};
const findArticle = function (articleColle) {
  articleColle.forEach((element) => {
    console.log(element._id);
    console.log(articleId);
    if (element._id == articleId) {
      console.log("diocane");
    }
  });
};
/*const getSingleArticle = async function () {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/product",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzA3OWY4MWI0MjAwMTM5YjI3ZTUiLCJpYXQiOjE2NzkwNDQ3MzAsImV4cCI6MTY4MDI1NDMzMH0.gy8K_14ePxxMXiiSIbFr9hNNWic0Oe_T9TQCmJAmkdA",
        },
        method: "GET",
      }
    );
    console.log(response);
    if (response.ok) {
      articleColle = await response.json();
      console.log(articleColle);
      findArticle();
    } else {
    }
  } catch (error) {
    console.log(error);
  }
};

const findArticle = function () {
  articleColle.forEach((article) => {
    if (param_id == article._id) {
      let cardContainerReference = document.getElementById("row");
      cardContainerReference.innerHTML = `   
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
                        
                        <a href="dettagli.html?id=${article._id}2" class="btn btn-primary btn-sm">dettagli</a>
  
                    </div>
                    <div class="card-footer">
                        <small class="text-muted"></small>
                    </div>
                    </div>
                </div>`;
    }
  });
};
getSingleArticle();
*/
getArticle();
