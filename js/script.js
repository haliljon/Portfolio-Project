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
      '../image/SnapshootPortfolio.jpg',
      '../image/SnapshootPortfolioDesktop.jpg',
    ],
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea ",
    demo: '',
  },
  {
    id: 'project-1',
    title: 'Keeping track of hundreds of components',
    card_list: ['Ruby on rails', 'html', 'css', 'javascript'],
    image: [
      '../image/SnapshootPortfolio.jpg',
      '../image/SnapshootPortfolioDesktop.jpg',
    ],
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea ",
    demo: '',
  },
  {
    id: 'project-1',
    title: 'Keeping track of hundreds of components',
    card_list: ['Ruby on rails', 'html', 'css', 'javascript'],
    image: [
      '../image/SnapshootPortfolio.jpg',
      '../image/SnapshootPortfolioDesktop.jpg',
    ],
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea ",
    demo: '',
  },
  {
    id: 'project-1',
    title: 'Keeping track of hundreds of components',
    card_list: ['Ruby on rails', 'html', 'css', 'javascript'],
    image: [
      '../image/SnapshootPortfolio.jpg',
      '../image/SnapshootPortfolioDesktop.jpg',
    ],
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea ",
    demo: '',
  },
  {
    id: 'project-1',
    title: 'Keeping track of hundreds of components',
    card_list: ['Ruby on rails', 'html', 'css', 'javascript'],
    image: [
      '../image/SnapshootPortfolio.jpg',
      '../image/SnapshootPortfolioDesktop.jpg',
    ],
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea ",
    demo: '',
  },
  {
    id: 'project-1',
    title: 'Keeping track of hundreds of components',
    card_list: ['Ruby on rails', 'html', 'css', 'javascript'],
    image: [
      '../image/SnapshootPortfolio.jpg',
      '../image/SnapshootPortfolioDesktop.jpg',
    ],
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea ",
    demo: '',
  },
];

// Add main Popup//
const buttonProject = document.querySelectorAll('.btn-see-project');

const mainPopup = document.createElement('div');
mainPopup.className = 'mainPopup';
buttonProject.forEach((element, index) => {
  element.addEventListener('click', () => {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
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
    `;
    mainPopup.appendChild(popup);
  });
});

function openProject() {
  main.appendChild(mainPopup);
}
function closeProject() {
  mainPopup.style.display = 'none';
}

/// // *** POPUP WINDOW desktop *** /////

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

/* eslint-disable */
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
/* eslint-enable */
