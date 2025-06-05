// Dark and Light Theme Toggle

function isLight() {
  return localStorage.getItem("dark-mode");
}

function toggleRootClass() {
  document.querySelector("body").classList.toggle("dark");
}

function toggleLocalStorageItem() {
  if (isLight()) {
    localStorage.removeItem("dark-mode");
  } else {
    localStorage.setItem("dark-mode", "set");
  }
}

if (isLight()) {
  toggleRootClass();
}

function themeToggle() {
  toggleLocalStorageItem();
  toggleRootClass();
}

// Navbar Footer Sticky While Scroll For Mobile Device Only

function stickyNavFooter() {
  var navbar = document.querySelector("header");
  var scrollValue = window.scrollY;

  if (scrollValue > 300) {
    navbar.classList.add("footer-sticky");
  } else if (scrollValue < 300) {
    navbar.classList.remove("footer-sticky");
  }
}

window.addEventListener("scroll", stickyNavFooter);

// Navbar Toggle For Mobile Devices

function navbarToggle() {
  document.querySelector(".portfolio-navbar").classList.toggle("show");
}

// Hides Navbar When User Clicks Nav Link

const items = document.querySelectorAll(".navbar-link");
items.forEach((item) =>
  item.addEventListener("click", function () {
    document.querySelector(".portfolio-navbar").classList.remove("show");
  })
);

// Portfolio Filter

const filterContainer = document.querySelector(".portfolio-filter-nav");
const galleryItems = document.querySelectorAll(".portfolio-item");

filterContainer.addEventListener("click", (e) => {
  e.preventDefault();
  filterContainer.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");
  const filterValue = e.target.getAttribute("data-id");
  galleryItems.forEach((item) => {
    if (item.classList.contains(filterValue) || filterValue === "all") {
      item.classList.remove("hide");
      item.classList.add("show");
    } else {
      item.classList.remove("show");
      item.classList.add("hide");
    }
  });
});

// Navbar Header Sticky While Scroll

function stickyNav() {
  var headerHeight = document.querySelector("#about").offsetHeight;
  var navbar = document.querySelector("header");
  var scrollValue = window.scrollY;

  if (scrollValue > headerHeight) {
    navbar.classList.add("header-sticky");
  } else if (scrollValue < headerHeight) {
    navbar.classList.remove("header-sticky");
  }
}

window.addEventListener("scroll", stickyNav);

// Active Link On Page Scroll

const sections = document.querySelectorAll("section[id]");

function scrollTracker() {
  const currentYScroll = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const id = section.getAttribute("id");
    const currentNavLink = document.querySelector(
      `header .portfolio-navbar a[href*="#${id}"]`
    );
    if (
      currentYScroll > sectionTop &&
      currentYScroll <= sectionTop + sectionHeight
    ) {
      currentNavLink.classList.add("active-link");
    } else {
      currentNavLink.classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollTracker);
