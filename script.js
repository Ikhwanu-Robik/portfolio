document.addEventListener("DOMContentLoaded", () => {
  // TODO: record each visit and send the data to Supabase

  let isMobile = window.matchMedia("(any-pointer: coarse)").matches;

  if (isMobile) {
    let burger = createNavBurger();
    hideNavBar();
    burger.onclick = showNavBarAndChangeListener;
  }
});

const createNavBurger = () => {
  let burger = document.createElement("div");
  burger.classList.add("nav-burger");

  let burgerIcon = document.createElement("img");
  burgerIcon.alt = "burger_icon";
  burgerIcon.src = "./assets/icons/burger.svg";
  burgerIcon.style.height = "1rem";

  burger.appendChild(burgerIcon);

  document.querySelector("header").prepend(burger);
  return burger;
};

const hideNavBarAndChangeListener = () => {
  hideNavBar();

  let crossIcon = document.createElement("img");
  crossIcon.alt = "burger_icon";
  crossIcon.src = "./assets/icons/burger.svg";
  crossIcon.style.height = "1rem";

  document.querySelector(".nav-burger").innerHTML = "";
  document.querySelector(".nav-burger").appendChild(crossIcon);

  document.querySelector(".nav-burger").onclick = showNavBarAndChangeListener;
};

const showNavBarAndChangeListener = () => {
  showNavBar();

  let burgerIcon = document.createElement("img");
  burgerIcon.alt = "cross_icon";
  burgerIcon.src = "./assets/icons/cross.svg";
  burgerIcon.style.height = "1rem";

  document.querySelector(".nav-burger").innerHTML = "";
  document.querySelector(".nav-burger").appendChild(burgerIcon);

  document.querySelector(".nav-burger").onclick = hideNavBarAndChangeListener;
};

const hideNavBar = () => {
  document.querySelector(".navigation-bar").style.display = "none";
};

const showNavBar = () => {
  document.querySelector(".navigation-bar").style.display = "flex";
};
