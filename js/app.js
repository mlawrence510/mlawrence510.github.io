const sidebar = document.querySelector("#mySidebar");
const body = document.querySelector("body");
const overlay = document.querySelector('.overlay');




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
