const googleImages = document.querySelector('GoolgeImages');

let galleryImages, el;
let xCoord = 0;
let yCoord = 265;
let imageURL = 'https://dev-the-api.herokuapp.com/v1/images';

el = document.querySelector('GoolgeImages');
el.innerHTML = `<h1 class="gallery-title">Click on a thumb nail below</h1>`

function generateImageDisplay(imageURL, name) {
  el.innerHTML = `<img
                      src=${imageURL}
                      class="slidea"
                      alt=${name} />`
  window.scrollTo(xCoord, yCoord);
};


function generateImageThumb() {
  const data = JSON.parse(localStorage.images);
  for(cat in data) {
    if (data[cat].folder === 'gallery') {
      galleryImages = data[cat].images; 
    }
  }

  let thumbs = document.getElementById('thumbs');
  let columnCount = 6; // 6 columns accross col-md-2 === 12 units
  let rowDiv = document.createElement("div");
  rowDiv.className = 'row';

  for(let i = 0; i < galleryImages.length; i++) {
    let colDiv = document.createElement("div");
    colDiv.className = 'col-md-2 box';
    
    let img = document.createElement("img");
    img.src = galleryImages[i].webContentLink;
    img.className = 'slidea';
    img.alt = galleryImages[i].name
    img.setAttribute("onclick", `generateImageDisplay('${img.src}', '${galleryImages[i].name}')`)
    colDiv.appendChild(img);

    if (columnCount === 0) {
      // Makes a new row div for every 6 columns
      rowDiv = document.createElement("div");
      rowDiv.className = 'row';
      columnCount = 6;
    }
    columnCount--
    rowDiv.appendChild(colDiv)
    thumbs.appendChild(rowDiv);
  };
};


// When the page has loaded then get the thumbs
$(document).ready(function(){
  generateImageThumb();
});


axios.get(imageURL)
  .then(function (response) {
    console.log('success', response);
    window.localStorage.removeItem('images');
    const newObject = JSON.stringify(response.data)
    window.localStorage.setItem("images", newObject);
  })
  .catch(function (error) {
    // handle error
    console.log('error YO: ', error);
  })
  .then(function () {
    // always executed
  });
