const sidebar = document.querySelector("#mySidebar");
const body = document.querySelector("body");
const overlay = document.querySelector('.overlay');
const openBtn = document.querySelector('.openbtn');
const filterArea = document.querySelector('.display-port');


function openNav() {
  sidebar.style.width = "250px";
  body.className = 'modal-open';
  overlay.style.display = 'block';
}


function closeNav() {
  sidebar.style.width = "0";
  body.className = "";
  overlay.style.display = 'none';
}

// Open Nav

openBtn.addEventListener('click', openNav);

//Close Nav

overlay.addEventListener('click', closeNav);

sidebar.addEventListener('click', event => {
  const target = event.target;
  if (target.tagName === 'A')
    closeNav();
});

// Filter Portfolio

function activate(target) {
  const removeActive = document.querySelector('.filter').children;
  if (target.className !== 'active') {
    for (i = 0; i < removeActive.length; i++) {
      removeActive[i].className = '';
    }
    target.className = 'active';
  }
};

function filter(target) {
  if (target.tagName === 'LI') {
    const searchType = target.getAttribute('id');
    const card = document.querySelectorAll('.project-card');

    if (searchType === 'all') {
      for (i = 0; i < card.length; i++) {
        card[i].style.display = '';
      }
    } else {
      for (i = 0; i < card.length; i++) {

        const compare = document.querySelectorAll('.project-card')[i].className;
        const indexSearch = compare.indexOf(searchType);

        if (indexSearch > -1) {
          card[i].style.display = '';
        } else {
          card[i].style.display = 'none';
        }

      }
    }
  }
};




filterArea.addEventListener('click', event => {
  const target = event.target;

  activate(target);
  filter(target);
});
