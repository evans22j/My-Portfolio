const pop = () => {
  const nav = document.querySelector('.menu-mobile');
  const navList = document.querySelector('.nav-list');
  const blur = document.getElementById('header-text');
  nav.classList.add('popNav');
  document.body.classList.add('hidden');
  navList.classList.add('popUl');
  blur.style.filter = 'blur(5px)';
};

const closePopup = () => {
  const nav = document.querySelector('.menu-mobile');
  const navList = document.querySelector('.nav-list');
  const blur = document.getElementById('header-text');
  nav.classList.remove('popNav');
  navList.classList.remove('popUl');
  document.body.classList.remove('hidden');
  blur.style.filter = 'none';
};

const bars = document.getElementById('bars');
bars.addEventListener('click', pop);

const evans = document.querySelector('.evans');
evans.addEventListener('click', closePopup);

const links = document.querySelectorAll('.link');
links.forEach((link) => {
  link.addEventListener('click', closePopup);
});

// pop up window

const seeProject = document.querySelectorAll('.btn-pop');
const popup = document.querySelector('.pop-bg');

seeProject.forEach((project) => {
  project.addEventListener('click', () => {
    popup.classList.add('display');
  });
});

const ul = document.querySelector('.cards');
const popDiv = document.querySelector('.pop-bg');

const cards = [
  {
    id: 1,
    title: 'Tonic',
    image: './photos/Portfolio_1.png',
    detail: ['Canopy', 'Back End Dev', '2015'],
    description: `A daily selection of privately personalized reads no accounts or
     sign-ups required`,
    language: ['html', 'css', 'JavaScript'],
    links: ['https://www.google.com', 'https://www.google.com'],
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    image: './photos/Portfolio2.png',
    detail: ['Canopy', 'Back End Dev', '2015'],
    description: `A daily selection of privately personalized reads no accounts or
     sign-ups required`,
    language: ['html', 'css', 'JavaScript'],
    links: ['https://www.google.com', 'https://www.google.com'],
  },
  {
    id: 3,
    title: 'Tonic',
    image: './photos/Portfolio3.png',
    detail: ['Canopy', 'Back End Dev', '2015'],
    description: `A daily selection of privately personalized reads no accounts or
     sign-ups required`,
    language: ['html', 'css', 'JavaScript'],
    links: ['https://www.google.com', 'https://www.google.com'],
  },
  {
    id: 4,
    title: 'Multi-Post Stories',
    image: './photos/Portfolio2.png',
    detail: ['Canopy', 'Back End Dev', '2015'],
    description: `A daily selection of privately personalized reads no accounts or
     sign-ups required`,
    language: ['html', 'css', 'JavaScript'],
    links: ['https://www.google.com', 'https://www.google.com'],
  },
];

const projecCards = cards
  .map(
    (card) => `
<li class="card-details">
            <div class="image">
              <img src="${card.image}" />
            </div>
            <div class="text-div">
              <h2 class="title">${card.title}</h2>
              <ul class="tech-btns">
              ${card.detail.map((d) => `<li class="common">${d}</li>`).join('')}
            
              </ul>

              <p class="paragraph">
                ${card.description}
              </p>
              <ul class="languages">
                ${card.language.map((lang) => `<li>${lang}</li>`).join('')}
              </ul>
              <button class="see-project btn-pop" data-index-number="2" href="#"
               onclick=(showpopup(${card.id})) >See Project</button
              >
            </div>
          </li>
`,
  )
  .join('');

ul.innerHTML += projecCards;

const modalData = (card) => {
  const template = document.createElement('template');

  template.innerHTML = `
        <li class="card-details pop-data">
          <div class="close-btn">
          <img class="close-x" onclick=(vanish()) src="./close.png" alt="close"></div>
         <div> <h2 class="title t-pop">${card.title}</h2></div>
         <div>
          <ul class="tech-btns pop-btns">
            <li>CANOPY</li>
            <li class="common">Back End Dev</li>
            <li class="common">2015</li>
          </ul>
          </div>
          <div class="image">
          
            <img src="${card.image}" alt="tonic" />
          </div>
          <div class="text-div pop-div">
            <p class="paragraph p-pop">
            ${card.description}
            </p>
            <div>
            <ul class="languages">
            ${card.language.map((lang) => `<li>${lang}</li>`).join('')}
            </ul>
            <div class="links">

            <button class="see-project see-project-dsk" data-index-number="2" href="${
  card.links[0]
}"
              >See live <span> <img class="logo-tag" src="./Icon.png" alt="" srcset=""></span> </button
            >
             <button class="see-project see-project-dsk" data-index-number="2" href="${
  card.links[1]
}"
              >See source <span><img class="logo-tag" src="./Vector.png" alt="" srcset=""></span> 
            </button>
          </div>
          </div>

          </div>
        </li>
    
    `;

  popDiv.appendChild(template.content);
};

/* eslint-disable */
const seeProjects = document.querySelectorAll(".see-project");
function showpopup(id) {
  cards.find((item) => {
    if (Number(id) === Number(item.id)) return modalData(item);
  });
  popDiv.classList.add("display");
}

function vanish() {
  popDiv.classList.remove("display");
  popDiv.innerHTML = "";
}

// Form Validation

const errorMessage = document.querySelector('.error-message');
const form = document.querySelector('.form');
const formElement = form.querySelectorAll('input, textarea');

formElement.forEach((fe) => {
  fe.addEventListener('input', () => {
    errorMessage.style.display = 'none';
  });
});

document.getElementById('submit').addEventListener('click', (e) => {
  const email = document.getElementById('email').value;
  const emailValidation = /[A-Z]/.test(email);

  if (emailValidation) {
    errorMessage.style.display = 'block';
    e.preventDefault();
  }
});


//local storage

const userName = document.getElementById('name');
const userMail = document.getElementById('email');
const textMessage = document.getElementById('textarea');

function myLocalStorage() {
  const formData = {
    myName: userName.value,
    email: userMail.value,
    message: textMessage.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

const getInput = document.querySelectorAll('input, textarea');
for (let i = 0; i < getInput.length; i += 1) {
  getInput[i].addEventListener('change', () => {
    myLocalStorage();
  });
}

const inputData = JSON.parse(localStorage.getItem('formData'));
if (inputData !== null) {
  userName.value = inputData.myName;
  userMail.value = inputData.email;
  textMessage.value = inputData.message;
}
