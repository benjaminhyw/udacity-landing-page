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
let sectionsFragmentClone;

const mainChildren = document.getElementsByTagName("main")[0];
const mainChildrenClone = mainChildren.cloneNode(true);
const mainHeaderHTML = mainChildren.getElementsByClassName("main__hero")[0]
  .outerHTML;

const navUl = document.getElementById("navbar__list");

mainChildrenClone.childNodes.forEach((childElement) => {
  if (childElement.nodeName === "SECTION") {
    sectionsFragment.appendChild(childElement);
  }
});

const getSectionTitle = (sectionNode) => {
  return sectionNode.getElementsByTagName("h2")[0].innerText;
};

const cloneSectionsFragment = () => {
  sectionsFragmentClone = sectionsFragment.cloneNode(true);
};

const applyActiveClass = (event) => {
  cloneSectionsFragment();
  sectionsFragmentClone.childNodes.forEach((childNode) => {
    const sectionTitle = getSectionTitle(childNode);

    if (event.target.innerText === sectionTitle) {
      childNode.className = "your-active-class";
    } else {
      childNode.className = "";
    }
  });
};

const scrollToActiveElement = () => {
  let elementToScrollTo = document.getElementsByClassName(
    "your-active-class"
  )[0];

  window.scroll({ top: elementToScrollTo.offsetTop, behavior: "smooth" });
};

const setActiveElement = (event) => {
  event.preventDefault();
  applyActiveClass(event);

  mainChildren.innerHTML = mainHeaderHTML;
  mainChildren.appendChild(sectionsFragmentClone);
  cloneSectionsFragment();

  scrollToActiveElement();
};

sectionsFragment.childNodes.forEach((childNode) => {
  const sectionTitle = getSectionTitle(childNode);
  const navItem = document.createElement("li");
  const link = document.createElement("a");

  link.innerText = sectionTitle;
  link.className = "menu__link";
  link.href = "#" + childNode.id;
  navItem.onclick = setActiveElement;

  navItem.appendChild(link);
  navUl.appendChild(navItem);
});

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
