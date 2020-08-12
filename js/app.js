const sidebar = document.querySelector("#mySidebar");
const body = document.querySelector("body");
const overlay = document.querySelector('.overlay');
const openBtn = document.querySelector('.openbtn');


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

sidebar.addEventListener('click', event =>{
const target = event.target;
  if (target.tagName === 'A')
    closeNav();
});
