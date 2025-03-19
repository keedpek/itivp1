document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector('.burger-menu')
  const menu = document.querySelector('.mobile-menu')
  
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("active");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  })
})