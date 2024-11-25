// Space Robotics Themed script.js

// Helper function to toggle element's active state
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Floating element effect for contact links to add a bit of sci-fi aesthetics
  const contactLinks = document.querySelectorAll('.contact-links a');
  contactLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.transform = 'translateY(-5px)';
      link.style.transition = 'transform 0.3s ease-in-out';
    });
    link.addEventListener('mouseout', () => {
      link.style.transform = 'translateY(0)';
    });
  });

  // Starry background effect to enhance the space-themed feel
  const starCount = 100;
  const body = document.querySelector('body');
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${2 + Math.random() * 3}s`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    body.appendChild(star);
  }

  // Glowing effect for stars
  const style = document.createElement('style');
  style.innerHTML = `
    .star {
      position: absolute;
      width: 2px;
      height: 2px;
      background: #ffffff;
      border-radius: 50%;
      box-shadow: 0 0 10px #ffffff;
      animation: twinkle 5s infinite ease-in-out;
    }
    @keyframes twinkle {
      0%, 100% {
        opacity: 0.8;
      }
      50% {
        opacity: 0.3;
      }
    }
  `;
  document.head.appendChild(style);

  // Dynamic typing effect for introduction heading
  const introText = "Hi there, I'm Siddarth Dayasagar 👋";
  const introElement = document.querySelector('h1');
  let index = 0;

  function typeEffect() {
    if (index < introText.length) {
      introElement.innerHTML += introText.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    }
  }

  introElement.innerHTML = ""; // Clear initial text before typing effect
  typeEffect();

  // Add an orbital hover effect for project cards
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    project.addEventListener('mouseover', () => {
      project.style.transform = 'rotate(1deg) scale(1.02)';
      project.style.transition = 'transform 0.3s ease-in-out';
    });
    project.addEventListener('mouseout', () => {
      project.style.transform = 'rotate(0) scale(1)';
    });
  });

  // Sidebar toggle functionality for mobile
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

  // Testimonials modal functionality
  const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
  const modalContainer = document.querySelector("[data-modal-container]");
  const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
  const overlay = document.querySelector("[data-overlay]");

  const modalImg = document.querySelector("[data-modal-img]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalText = document.querySelector("[data-modal-text]");

  const testimonialsModalFunc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }

  testimonialsItem.forEach(item => {
    item.addEventListener("click", function () {
      modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
      modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
      modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
      modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
      testimonialsModalFunc();
    });
  });

  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  overlay.addEventListener("click", testimonialsModalFunc);

  // Custom select functionality
  const select = document.querySelector("[data-select]");
  const selectItems = document.querySelectorAll("[data-select-item]");
  const selectValue = document.querySelector("[data-selecct-value]");
  const filterBtn = document.querySelectorAll("[data-filter-btn]");

  select.addEventListener("click", function () { elementToggleFunc(this); });

  selectItems.forEach(item => {
    item.addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  });

  // Filter functionality for projects
  const filterItems = document.querySelectorAll("[data-filter-item]");

  const filterFunc = function (selectedValue) {
    filterItems.forEach(item => {
      if (selectedValue === "all") {
        item.classList.add("active");
      } else if (selectedValue === item.dataset.category) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  let lastClickedBtn = filterBtn[0];
  filterBtn.forEach(btn => {
    btn.addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);
      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  });

  // Contact form validation functionality
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  formInputs.forEach(input => {
    input.addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  });

  // Page navigation functionality
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  navigationLinks.forEach(link => {
    link.addEventListener("click", function () {
      pages.forEach(page => {
        if (this.innerHTML.toLowerCase() === page.dataset.page) {
          page.classList.add("active");
          link.classList.add("active");
          window.scrollTo(0, 0);
        } else {
          page.classList.remove("active");
          link.classList.remove("active");
        }
      });
    });
  });
});
