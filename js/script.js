const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
})
const mobileToggle = document.querySelector("#mobile-toggle"),
      navbar = document.querySelector(".navbar");

    const mobleMenu = () => {
        mobileToggle.classList.toggle("is-active");
        navbar.classList.toggle("active");
    }
    window.onscroll = () => {
        mobileToggle.classList.remove("is-active");
        navbar.classList.remove("active");
    }
    mobileToggle.addEventListener("click", mobleMenu);

    // border move
const border = document.querySelector("#border"),
      navLink = document.querySelectorAll(".navbar-container ul li a");
      
      function indicator(e) {
        border.style.left = e.offsetLeft + 'px';
        border.style.width = e.offsetWidth + 'px';
      }
      
      navLink.forEach((link) => {
        link.addEventListener("mouseover", (e) => {
          e.preventDefault();
          indicator(e.target);
        })
      })

      const carousel = document.querySelector(".review-carousel"),
            arrowBtn = document.querySelectorAll(".review-container i"),
            firstContentWidth =document.querySelector(".review-content").offsetWidth;

      let isDragging = false, startX, startScrollLeft;

      arrowBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ? -firstContentWidth : firstContentWidth;
        })
      })

      const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
      }

      const dragging = (e) => {
        if(!isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
      }

      const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
      }

      carousel.addEventListener("mousedown", dragStart);
      // carousel.addEventListener("touchstart", dragStart);

      carousel.addEventListener("mousemove", dragging);
      // carousel.addEventListener("touchmove", dragging);

      document.addEventListener("mouseup", dragStop);
      // document.addEventListener("touchend", dragStop);
