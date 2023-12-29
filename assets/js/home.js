window.onload = function () {
    const toggleButton = document.getElementsByClassName("toggle-button")[0];
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];
    const buttonHeader =
      document.getElementsByClassName("btn-header")[0];
  
    toggleButton.addEventListener("click", () => {
      navbarLinks.classList.toggle("active");
      buttonHeader.classList.toggle("active");
      toggleButton.classList.toggle("active");
    });
  };

var burgerMenu = document.getElementById("burger-menu");
var overlay = document.getElementById("menu");
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});


