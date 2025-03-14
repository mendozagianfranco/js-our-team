const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];
// Elementi
const parentElement = document.querySelector('.grid');
const formElement = document.getElementById('form-new-members');
const nameElement = document.getElementById('name-member');
const emailElement = document.getElementById('email-member');
const roleElement = document.getElementById('role-member');
const imgElement = document.getElementById('img-member');


// Aggiungere Elementi nella pagina prendendolo dai dai forniti
renderHTML(parentElement, teamMembers);

formElement.addEventListener('submit', addMembers);

function renderHTML(parent, elements) {
  let item = '';

  for (let i = 0; i < elements.length; i++) {
    let currentMember = elements[i];
    item += makeStructureCardHTML(currentMember);
  }
  parent.innerHTML = item;
}

// Struttura della card 
function makeStructureCardHTML(member) {
  return ` <div class="card">
              <img src="${member.img}" class="card-img" alt="${member.name}" />
              <div class="card-info">
                <h2 class="card-name">${member.name}</h2>
                <p class="card-role">${member.role}</p>
                <a href="#" class="card-email">${member.email}</a>
              </div>
            </div>`;
}

function addMembers(e) {
  e.preventDefault();
  const name = nameElement.value;
  const email = emailElement.value;
  const role = roleElement.value;
  const img = imgElement.value;

  const newMember = {
    name,
    email,
    role,
    img,
  };

  teamMembers.push(newMember);
  formElement.reset();

  renderHTML(parentElement, teamMembers);
}

