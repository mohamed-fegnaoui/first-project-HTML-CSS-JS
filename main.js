window.onscroll = function () {changeBack()};

function changeBack() {
  if (document.documentElement.scrollTop > 10) {
      document.querySelector(".content").setAttribute("id", "change-back");
      document.querySelector(".white-img").setAttribute("src", "imgs/black-logo.png");
      document.querySelector(".btn-icon").setAttribute("id", "back-btn");
      document.querySelector(".link-a").setAttribute("id", "grey");
      document.querySelector(".link-a-two").setAttribute("id", "grey");
      document.querySelector(".link-a-three").setAttribute("id", "grey");
  }else {
      document.querySelector(".white-img").setAttribute("src", "imgs/white-logo.png");
      document.querySelector(".content").removeAttribute("id", "change-back");
      document.querySelector(".btn-icon").removeAttribute("id", "back-btn");
      document.querySelector(".link-a").removeAttribute("id", "grey");
      document.querySelector(".link-a-two").removeAttribute("id", "grey");
      document.querySelector(".link-a-three").removeAttribute("id", "grey");
    }
};

// create a side bar

let menu = document.querySelector(".menu");

menu.onclick = function () {
    if (10 > 5) {
        let nav = document.querySelector(".nav");
    nav.classList.toggle("open")
    }
};





























