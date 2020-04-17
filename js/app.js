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

const sectionsFragment = document.createDocumentFragment();

const mainChildren = document.getElementsByTagName("main")[0];
const mainChildrenClone = mainChildren
  .cloneNode(true)
  .childNodes.forEach((childElement) => {
    if (childElement.nodeName === "SECTION") {
      sectionsFragment.appendChild(childElement);
    }
  });
console.log(sectionsFragment);

const navUl = document.getElementById("navbar__list");
sectionsFragment.childNodes.forEach((childNode) => {
  console.log(childNode);
  const sectionTitle = childNode.getElementsByTagName("h2")[0].innerText;
  console.log(sectionTitle);
  const navUlChild = document.createElement("li");
  const link = document.createElement("a");
  link.innerText = sectionTitle;
  link.className = "menu__link";
  navUlChild.appendChild(link);
  //   navUlChild.className("menu__link");
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
