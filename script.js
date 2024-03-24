//------------------------------drop down menu----------------------------------
var dropdownOpen = false;

    function toggleDropdown(open) {
        dropdownOpen = open;
        var dropdown = document.getElementById('blogsDropdown');
        if (dropdownOpen) {
            dropdown.style.display = 'block';
        } else {
            if (!dropdown.contains(event.relatedTarget) && event.relatedTarget !== document.querySelector('.dropbtn')) {
                dropdown.style.display = 'none';
            }
        }
    }
let mybutton = document.getElementById("up-arrow");

// -------------------------go to top button---------------------------------
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

//-------------------------hero section---------------------
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slider img");
  let counter = 0;

  function showSlide(index) {
      slides.forEach((slide) => {
          slide.style.display = "none";
      });
      slides[index].style.display = "block";
  }

  function nextSlide() {
      counter = (counter + 1) % slides.length;
      showSlide(counter);
  }

  function prevSlide() {
      counter = (counter - 1 + slides.length) % slides.length;
      showSlide(counter);
  }
  setInterval(nextSlide, 3000);
  document.querySelector(".next-btn").addEventListener("click", nextSlide);
  document.querySelector(".prev-btn").addEventListener("click", prevSlide);
});

function toggleDropdown(id) {
  var dropdown = document.getElementById(id);
  dropdown.classList.toggle("show");
}

function toggleNavMiddle() {
  var navMiddle = document.querySelector('.nav-middle');
  navMiddle.classList.toggle('show');
}
function openWhatsApp() {
  var whatsappUrl = 'https://www.whatsapp.com/';
  window.location.href = whatsappUrl;
}
function openTeleApp() {
  var TeleAppUrl = 'https://telegram.org/';
  window.location.href = TeleAppUrl;
}
function getId() {
  var IdAppUrl = 'https://www.google.co.in/';
  window.location.href = IdAppUrl;
}