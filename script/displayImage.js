const displayWorkImages = ['bluecrew.png', 'canceriq1.png', 'divegalaxsea.png', 'divegalaxseaAdmin.png']
const displayImage = document.querySelector('DisplayImage');

/* creates <img class... src... />*/
function createImgItem(imageName) {
  const img = document.createElement('img');
  img.setAttribute('class', `${imageName}-img`)
  img.setAttribute('src', `images/${imageName}`)
}

// const div = document.createElement('div');

const divContainer = document.createElement('div');
// const divItem = document.createElement('div');
// const img = document.createElement('img');

divContainer.setAttribute('class', 'grid-container')

for (let i = 0; i < displayWorkImages.length; i++) {
  const img = document.createElement('img');
  const divItem = document.createElement('div');
  divItem.addEventListener('onClick', testThis())
  divItem.setAttribute('onClick', `testThis("${displayWorkImages[i]}")`)
  divItem.setAttribute('class', 'item')
  img.setAttribute('class', 'bluecrew-img')
  img.setAttribute('src', `images/${displayWorkImages[i]}`)
  divItem.append(img);
  divContainer.append(divItem);
}


html = `

      <div class="grid-container">
        <div class='item'>
          <img class='bluecrew-img' src='images/bluecrew.png' alt='CIQ' />
        </div>
        <div class='item'>
          <img class='ciq-img' src='images/canceriq1.png' alt='CIQ' />
        </div>
        <div class='item'>
          <img class='dive-img' src='images/divegalaxsea.png' alt='CIQ' />
        </div>
        <div class='item'>
          <img class='divAdmin-img' src='images/divegalaxseaAdmin.png' alt='CIQ' />
        </div>
      </div>
`

// divItem.append(img);
// divContainer.append(divItem);
displayImage.append(divContainer);


function testThis(arg) {
  // TODO: i will need to set the class based on what comes in
  console.log('did this fire YO =>', arg)
}