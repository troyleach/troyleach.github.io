const displayWorkImages = ['bluecrew.png', 'canceriq1.png', 'divegalaxsea.png', 'divegalaxseaAdmin.png']
const jobImagesBc = ['bc1.png', 'bc2.png', 'bc3.png', 'bc4.png', 'bc5.png', 'bc6.png']
const jobImagesCiq = ['ciq1.jpg', 'ciq2.jpg', 'ciq3.jpg', 'ciq4.jpg', 'ciq5.jpg', 'ciq6.png']
const jobImagesDga = ['dga1.png', 'dga2.png', 'dga3.png']
const COMPANY_INFORMATION = {
  'bluecrew': {
    'name': "Bluecrew",
    'lang': "Backend built with NodeJS, Express, Front End built with React, Redux",
    'description': ""
  },
  'canceriq1': {
    'name': "Cancer IQ",
    'lang': "Built with Ruby on Rails, Microservice built with NodeJS, Express",
    'description': ""
  },
  'divegalaxseaAdmin': {
    'name': "Dive Galaxsea Admin panel",
    'lang': "Built with Angular 1.x",
    'description': "Allows the user to change pricing. Consumes Rails API."
  },
  'divegalaxsea': {
    'name': "Dive Galaxsea web site",
    'lang': "Built with Angular 1.x",
    'description': "Very first web site I built that is in production.\n This is site is getting rebuilt using react. Consumes Rails API."
  }
}

const displayImage = document.querySelector('DisplayImage');
const ModalImages = document.querySelector('ModalImages');

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

// getWorkModal
function testThis(arg) {
  // TODO: i will need to set the class based on what comes in
  console.log('did this fire YO =>', arg)
  // FIXME: don't mix jquery

  const test = buildModal(arg)
  // ModalImages.append(divContainer);
  $('#exampleModal').modal()
}

function buildModal(company) {
  console.log('company', company)
  const companyName = company.match(/.*(?=\.)/)
  let jobImages;
  console.log('compaing now', companyName)
  if (companyName[0] === 'bluecrew') {
    jobImages = jobImagesBc
  } else if (companyName[0] === 'canceriq1') {
    jobImages = jobImagesCiq;
  } else if (companyName[0] === 'divegalaxseaAdmin') {
    jobImages = jobImagesDga;
  } else if (companyName[0] === 'divegalaxsea') {
    window.open('http://divegalaxsea.com', '_blank');
  }
  const title = document.getElementById('exampleModalLabel');
  title.setAttribute('class', 'modal-title')
  title.innerText = COMPANY_INFORMATION[companyName].name;

  const description = document.getElementById('modalDescription')
  const secondDescription = document.getElementById('modalSecondDescription')
  description.innerText = COMPANY_INFORMATION[companyName].lang;
  secondDescription.innerText = COMPANY_INFORMATION[companyName].description;

  // get the images for the company hardcoded for now 
  console.log('images', jobImages)
  if (jobImages)
    for (let i = 0; i < jobImages.length; i++) {
      const img = document.createElement('img');
      const div = document.createElement('div');

      div.setAttribute('class', 'item')
      img.setAttribute('class', 'bluecrew-img')
      img.setAttribute('src', `images/${jobImages[i]}`)
      div.append(img);
      ModalImages.append(div);
    };
};

function getCompany(company) { };

function getWorkImages() {
  console.log('getWorkImages')
  for (let i = 0; i < displayWorkImages.length; i++) {
    const img = document.createElement('img');
    const divItem = document.createElement('div');
    // divItem.addEventListener('onClick', testThis())
    divItem.setAttribute('onClick', `testThis("${displayWorkImages[i]}")`)
    divItem.setAttribute('class', 'workImage')
    img.setAttribute('class', 'bluecrew-img')
    img.setAttribute('src', `images/${displayWorkImages[i]}`)
    divItem.append(img);
    divContainer.append(divItem);
  }

  displayImage.append(divContainer);
}



window.onload = function () {
  // getWorkImages(param1, param2);
  getWorkImages();
};

$('#exampleModal').on('hidden.bs.modal', function () {
  // remove the data from <ModalImages/>
  $('modalimages').empty();
});
