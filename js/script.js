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
    title: 'Multi-Post Stories Gain+Glory',
    card_list: ['Ruby on rails', 'html', 'css', 'javascript'],
    image: '../image/SnapshootPortfolio.jpg',
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea ",
    demo: '',
  },
  {
    id: 'project-2',
    title: 'Multi-Post Stories Gain+Glory',
    card_list: ['Ruby on rails', 'html', 'css', 'javascript'],
    image: '../image/SnapshootPortfolio.jpg',
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea ",
    demo: '',
  },
  {
    id: 'project-3',
    title: 'Multi-Post Stories Gain+Glory',
    card_list: ['Ruby on rails', 'html', 'css', 'javascript'],
    image: '../image/SnapshootPortfolio.jpg',
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea ",
    demo: '',
  },
  {
    id: 'project-4',
    title: 'Multi-Post Stories Gain+Glory',
    card_list: ['Ruby on rails', 'html', 'css', 'javascript'],
    image: '../image/SnapshootPortfolio.jpg',
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea ",
    demo: '',
  },
  {
    id: 'project-5',
    title: 'Multi-Post Stories Gain+Glory',
    card_list: ['Ruby on rails', 'html', 'css', 'javascript'],
    image: '../image/SnapshootPortfolio.jpg',
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea ",
    demo: '',
  },
  {
    id: 'project-6',
    title: 'Multi-Post Stories Gain+Glory',
    card_list: ['Ruby on rails', 'html', 'css', 'javascript'],
    image: '../image/SnapshootPortfolio.jpg',
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea ",
    demo: '',
  },
];
section.appendChild(dataObj);
section.removeChild(dataObj);

// Add main Popup//

const mainPopup = document.createElement('div');
mainPopup.className = 'mainPopup';
const popup = document.createElement('div');
popup.className = 'popup';
popup.innerHTML = `
    <div>
      <img class="imagePopup" src="../image/SnapshootPortfolio.jpg" alt="image" />
      <a href="#" id="close-btn1"
        ><ion-icon name="close-outline"></ion-icon
      ></a>
    </div>
    <div class="content">
      <h2>Keeping track of hundreds of components</h2>
      <div id="flex-container" class="flex-container-div">
        <ul class="flex-container">
          <li class="flex-items"> Ruby on rails</li>
          <li class="flex-items">css</li>
          <li class="flex-items">JavaScript</li>
          <li class="flex-items">html</li>
        </ul>
      </div>
      <p class="textPopup"
        >Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it 1960s with the releaLorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it 1960s with
        the relea</p
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

function openProject() {
  main.appendChild(mainPopup);
  const closePopup = document.querySelector('#close-btn1');
  closePopup.addEventListener('click', () => {
    main.removeChild(mainPopup);
  });
}

/// // *** POPUP WINDOW desktop *** /////

const mainPopupDesktop = document.createElement('div');
mainPopupDesktop.className = 'mainPopupDesktop';
mainPopupDesktop.innerHTML = `<div class="popupDesktop">
<div class="imagePopupDesktop">
  <button class="exitBtn"></button>
  <img src="../image/SnapshootPortfolioDesktop.jpg" alt="Project image" />
</div>
<div class="components">
  <h2>Keeping track of hundreds of components</h2>
  <div class="btnPopup"
    ><a href="#" id="livePopup" class="btn-see-project"
      >See Live
      <ion-icon name="caret-forward-circle-outline"></ion-icon></a
    ><a href="#" id="sourcePopup" class="btn-see-project"
      >See Source <ion-icon name="logo-github"></ion-icon></a
  ></div>
</div>
<div class="flex-container-div">
  <ul class="flex-container" id="flex-container">
    <li class="flex-items"> Codekit</li>
    <li class="flex-items">GitHub</li>
    <li class="flex-items">JavaScript</li>
    <li class="flex-items">Bootstrap</li>
    <li class="flex-items">Terminal</li>
    <li class="flex-items">Codepen</li>
  </ul>
</div>
<p class="textPopupDesktop"
  >Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text ever
  since the 1500s, when an unknown printer took a galley of type and
  scrambled it 1960s with the releaLorem Ipsum is simply dummy text of
  the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown
  printer took a galley of type and scrambled it 1960s with the relea</p
>
</div>`;

function openProjectDesktop() {
  main.appendChild(mainPopupDesktop);
  const closePopupDesktop = document.querySelector('.exitBtn');
  closePopupDesktop.addEventListener('click', () => {
    main.removeChild(mainPopupDesktop);
  });
}

function checkMeadiaQuery() {
  if (window.innerWidth > 768) {
    openProjectDesktop();
  } else {
    openProject();
  }
}

checkMeadiaQuery();
