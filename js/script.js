const menu = document.querySelector('#menu');
const hamburger = document.querySelector('.menu-btn');

menu.style.backgroundColor = '#ffffff';

function openMenu() {
  menu.style.display = 'block';
  hamburger.style.display = 'none';
}

function closeMenu() {
  menu.style.display = 'none';
  hamburger.style.display = 'block';
}

document.querySelector('.menu-btn').addEventListener('click', openMenu());
document.querySelector('#close-btn').addEventListener('click', closeMenu());

/// // *** POPUP WINDOW mobile *** /////

const main = document.querySelector('body');
const section = document.createElement('section');
const aboutMe = document.querySelector('#about-me');
main.insertBefore(section, aboutMe);
section.className = 'works';
const div = document.createElement('div');
div.innerHTML = `
<div>
<h1 class="recent-work">My Recent Works</h1>
</div>
<hr class="hr">`;
const divGrids = document.createElement('div');
divGrids.className = 'outer-grids';
const divGrid = document.createElement('div');
divGrid.className = 'outer-grid';
divGrid.innerHTML = `<div class="picture"></div>
<div class="outer-container">
  <div>
    <h2 class="multi-post">Multi-Post Stories Gain+Glory</h2>
  </div>
  <div class="flex-container-div">
    <ul class="flex-container">
      <li class="flex-items"> Ruby on rails</li>
      <li class="flex-items">css</li>
      <li class="flex-items">JavaScript</li>
      <li class="flex-items">html</li>
    </ul>
  </div>
  <div><a href="#" onclick="checkMeadiaQuery()" class="btn-see-project">See project</a></div>
</div>`;
const divGrid1 = divGrid.cloneNode(true);
const divGrid2 = divGrid.cloneNode(true);
const divGrid3 = divGrid.cloneNode(true);
const divGrid4 = divGrid.cloneNode(true);
const divGrid5 = divGrid.cloneNode(true);
divGrids.append(divGrid1, divGrid, divGrid2, divGrid3, divGrid4, divGrid5);

section.appendChild(div);
section.appendChild(divGrids);

const dataObj = [
  {
    id: 'project-1',
    title: 'Keeping track of hundreds of components',
    card_list: ['Ruby on rails', 'html', 'css', 'javascript'],
    image: [
      '/image/SnapshootPortfolio.jpg',
      '/image/SnapshootPortfolioDesktop.jpg',
    ],
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea ",
    demo: '',
  },
  {
    id: 'project-2',
    title: 'Keeping track of hundreds of components',
    card_list: ['Ruby on rails', 'html', 'css', 'javascript'],
    image: [
      '/image/SnapshootPortfolio.jpg',
      '/image/SnapshootPortfolioDesktop.jpg',
    ],
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea ",
    demo: '',
  },
  {
    id: 'project-3',
    title: 'Keeping track of hundreds of components',
    card_list: ['Ruby on rails', 'html', 'css', 'javascript'],
    image: [
      '/image/SnapshootPortfolio.jpg',
      '/image/SnapshootPortfolioDesktop.jpg',
    ],
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea ",
    demo: '',
  },
  {
    id: 'project-4',
    title: 'Keeping track of hundreds of components',
    card_list: ['Ruby on rails', 'html', 'css', 'javascript'],
    image: [
      '/image/SnapshootPortfolio.jpg',
      '/image/SnapshootPortfolioDesktop.jpg',
    ],
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea ",
    demo: '',
  },
  {
    id: 'project-5',
    title: 'Keeping track of hundreds of components',
    card_list: ['Ruby on rails', 'html', 'css', 'javascript'],
    image: [
      '/image/SnapshootPortfolio.jpg',
      '/image/SnapshootPortfolioDesktop.jpg',
    ],
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea ",
    demo: '',
  },
  {
    id: 'project-6',
    title: 'Keeping track of hundreds of components',
    card_list: ['Ruby on rails', 'html', 'css', 'javascript'],
    image: [
      '/image/SnapshootPortfolio.jpg',
      '/image/SnapshootPortfolioDesktop.jpg',
    ],
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea ",
    demo: '',
  },
];

// Add main Popup//
const buttonProject1 = document.querySelectorAll('.btn-see-project');

const mainPopup = document.createElement('div');
mainPopup.className = 'mainPopup';
buttonProject1.forEach((element, index) => {
  element.addEventListener('click', () => {
    mainPopup.innerHTML = `
    <div class="popup">  
      <div>
        <img class="imagePopup" src=${dataObj[index].image[0]} alt="image" />
        <a href="#" id="close-btn1" onclick='closeProject()'
          ><ion-icon name="close-outline"></ion-icon
        ></a>
      </div>
      <div class="content">
        <h2>${dataObj[index].title}</h2>
        <div id="flex-container" class="flex-container-div">
        <ul class="flex-container" id="flex-container">${dataObj[
          index
        ].card_list
          .map((elem) => `<li class="flex-items">${elem}</li>`)
          .join('')}   
        </ul>
        </div>
        <p class="textPopup"
          >${dataObj[index].about}</p
        >
      </div>
      <div class="btnPopup"
        ><a href="#" id="livePopup" class="btn-see-project"
          >See Live
          <ion-icon class="ion-icon" name="caret-forward-circle-outline"></ion-icon></a
        ><a href="#" id="sourcePopup" class="btn-see-project"
          >See Source <ion-icon class="ion-icon" name="logo-github"></ion-icon></a
      ></div>
      </div>
    `;
  });
});

function openProject() {
  main.appendChild(mainPopup);
}
function closeProject() {
  mainPopup.style.display = 'none';
}

/// // *** POPUP WINDOW desktop *** /////
const buttonProject = document.querySelectorAll('.btn-see-project');

const mainPopupDesktop = document.createElement('div');
mainPopupDesktop.className = 'mainPopupDesktop';
buttonProject.forEach((element, index) => {
  element.addEventListener('click', () => {
    mainPopupDesktop.innerHTML = `<div class="popupDesktop">
    <div class="imagePopupDesktop">
      <button class="exitBtn" onclick='closeProjectDesktop()'></button>
      <img src=${dataObj[index].image[1]} alt="Project image" />
    </div>
    <div class="components">
      <h2>${dataObj[index].title}</h2>
      <div class="btnPopup"
        ><a href="#" id="livePopup" class="btn-see-project"
          >See Live
          <ion-icon name="caret-forward-circle-outline"></ion-icon></a
        ><a href="#" id="sourcePopup" class="btn-see-project"
          >See Source <ion-icon name="logo-github"></ion-icon></a
      ></div>
    </div>
    <div class="flex-container-div">
      <ul class="flex-container" id="flex-container">${dataObj[index].card_list
        .map((elem) => `<li class="flex-items">${elem}</li>`)
        .join('')}   
      </ul>
    </div>
    <p class="textPopupDesktop"
      >${dataObj[index].about}</p
    >
    </div>`;
  });
});

function openProjectDesktop() {
  main.appendChild(mainPopupDesktop);
}

function closeProjectDesktop() {
  mainPopupDesktop.style.display = 'none';
}

function checkMeadiaQuery() {
  if (window.innerWidth > 768) {
    openProjectDesktop();
    mainPopupDesktop.style.display = 'block';
  } else {
    openProject();
    mainPopup.style.display = 'block';
  }
}

function meadiaQueryClose() {
  if (window.innerWidth > 768) {
    closeProjectDesktop();
  } else {
    closeProject();
  }
}

checkMeadiaQuery();
meadiaQueryClose();

// Validation FORMS //

const form = document.querySelector('form');
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const textArea = document.querySelector('#text');
const errorFName = document.querySelector('#small-1');
const errorLName = document.querySelector('#small-2');
const errorEmail = document.querySelector('#small-3');
const errorText = document.querySelector('#small-4');

form.addEventListener('submit', (element) => {
  if (firstName.value === '' || firstName.value == null) {
    element.preventDefault();
    errorFName.innerText = 'First name is required';
  } else {
    errorFName.innerText = '';
  }
  if (lastName.value === '' || lastName.value == null) {
    element.preventDefault();
    errorLName.innerText = 'Last name is required';
  } else {
    errorLName.innerText = '';
  }
  if (email.value === '' || email.value == null) {
    element.preventDefault();
    errorEmail.innerText = 'Email is required';
  } else if (email.value.toLowerCase() !== email.value) {
    element.preventDefault();
    errorEmail.innerText = 'Please fill in your email address in lower case';
  } else {
    errorEmail.innerText = '';
  }
  if (textArea.value === '' || email.value == null) {
    element.preventDefault();
    errorText.innerText = 'Text is required';
  } else {
    errorText.innerText = '';
  }
});

/******  Local Storage     ******/

let btnGetInTouch = document.querySelector('.get-in-touch');

btnGetInTouch.onclick = function () {
  let dataStorage = {
    'First Name': firstName.value,
    'Last Name': lastName.value,
    Email: email.value,
    Text: textArea.value,
  };
  for (let i = 0; i < 4; i++) {
    localStorage.setItem(
      Object.keys(dataStorage)[i],
      Object.values(dataStorage)[i]
    );
  }
  console.log(localStorage);
};

firstName.value = localStorage.getItem('First Name');
lastName.value = localStorage.getItem('Last Name');
email.value = localStorage.getItem('Email');
textArea.value = localStorage.getItem('Text');
