function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.querySelector("body").className = 'modal-open';
  document.querySelector('.overlay').style.display = 'block';
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.querySelector("body").className = "";
  document.querySelector('.overlay').style.display = 'none';
}
