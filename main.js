let menu = document.querySelector(".firstHeader");
let mobile = document.querySelector(".mobileSide");
let header = document.querySelector(".asideHeader");
let tagsHeader = document.querySelectorAll(".tags");

menu.addEventListener("click", function (e) {
  if (e.target.tagName == "I") {
    sideBar.classList.toggle("activeMenu");
    mobile.classList.toggle("activeMobile");
  }
});

header.addEventListener("click", function (e) {
  tagsHeader.forEach((e) => {
    return e.classList.remove("activeTag");
  });
  if (e.target.classList.contains("tags")) {
    return e.target.classList.add("activeTag");
  } else if (e.target.tagName == "P") {
    return e.target.parentElement.classList.add("activeTag");
  }
});

//NAVBAR

let sideBar = document.querySelector(".firstAside");
let navs = document.querySelectorAll(".iconSection");

sideBar.addEventListener("click", function (e) {
  navs.forEach((e) => {
    return e.classList.remove("nav");
  });
  if (e.target.classList.contains("iconSection")) {
    return e.target.classList.add("nav");
  } else if (e.target.tagName == "IMG" || e.target.tagName == "H4") {
    return e.target.parentElement.classList.add("nav");
  }
});

//navBar Mobile

let navMobile = document.querySelectorAll(".MobileIcon");
let mobileSide = document.querySelector(".mobileSide");

mobileSide.addEventListener("click", function (e) {
  navMobile.forEach((e) => {
    return e.classList.remove("activy");
  });
  if (e.target.classList.contains("MobileIcon")) {
    return e.target.classList.add("activy");
  } else if (
    e.target.tagName == "H4" ||
    e.target.tagName == "IMG" ||
    e.target.tagName == "I"
  ) {
    return e.target.parentElement.classList.add("activy");
  }
});

// shorts video

let Close = document.querySelector(".iContainer");
let Shorts = document.querySelector(".shortAllContainer");

Close.addEventListener("click", function () {
  Shorts.style.cssText = "display: none";
});
