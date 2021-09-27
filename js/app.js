var navbarList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");



// build the nav
window.addEventListener('load', buildNavbar())

// Scroll to anchor ID using scrollTO event
function scrollToSectionClicked() {
    let navbarAnchors = document.querySelectorAll(".nav__hyperlink");
    navbarAnchors.forEach((element) => {
        element.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(element.getAttribute('href')).scrollIntoView(true);
        });
    });
}


// Build menu
function buildNavbar() {
	sections.forEach((element)=>{
	    let listItem = document.createElement("li");
	    listItem.classList.add("navbar__list__item");
    	let sectionName = element.getAttribute("data-nav");
    	let currentSectionId = element.getAttribute("id");
        listItem.innerHTML = `<a href="#${currentSectionId}" class="nav__hyperlink">${sectionName}</a>`;
        navbarList.appendChild(listItem);
    });
}

// Scroll to section on link click
scrollToSectionClicked();
