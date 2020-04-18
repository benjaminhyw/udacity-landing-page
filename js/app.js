/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

let sectionsFragment = document.createDocumentFragment();

const main = document.getElementsByTagName("main");
const mainHeader = document.getElementsByClassName("main__hero")[0].outerHTML;
const mainChildren = main[0];
const mainChildrenClone = mainChildren.cloneNode(true);
mainChildrenClone.childNodes.forEach((childElement) => {
  if (childElement.nodeName === "SECTION") {
    sectionsFragment.appendChild(childElement);
  }
});
let sectionsFragmentClone = sectionsFragment.cloneNode(true);
console.log(sectionsFragmentClone);

const setActiveElement = (event) => {
  event.preventDefault();
  sectionsFragmentClone.childNodes.forEach((childNode) => {
    const sectionTitle = childNode.getElementsByTagName("h2")[0].innerText;
    if (event.target.innerText === sectionTitle) {
      childNode.className = "your-active-class";
    } else {
      childNode.className = "";
    }
  });

  mainChildren.innerHTML = mainHeader;
  mainChildren.appendChild(sectionsFragmentClone);
  sectionsFragmentClone = sectionsFragment.cloneNode(true);
  let elementToScrollTo = document.getElementsByClassName(
    "your-active-class"
  )[0];

  window.scroll({ top: elementToScrollTo.offsetTop, behavior: "smooth" });
};

const navUl = document.getElementById("navbar__list");
sectionsFragment.childNodes.forEach((childNode) => {
  const sectionTitle = childNode.getElementsByTagName("h2")[0].innerText;
  const navUlChild = document.createElement("li");
  const link = document.createElement("a");

  link.innerText = sectionTitle;
  link.className = "menu__link";
  link.href = "#" + childNode.id;
  navUlChild.onclick = setActiveElement;

  navUlChild.appendChild(link);
  navUl.appendChild(navUlChild);
});
console.log(navUl);

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
