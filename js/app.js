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
// testing connection 
// 
/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const page__header=document.getElementsByClassName("page__header");
const navbar__menu=document.getElementsByClassName("navbar__menu");
const navbar__list = document.getElementById("navbar__list");
const btn_add = document.getElementsByClassName("btn_add");
const main = document.querySelector("main");
const up =document.querySelector('.up');
const upTop =document.querySelector(".Top__btn");
const [...sectionsss] = document.getElementsByTagName("section");
const btn_arr=document.getElementsByClassName("menu__link");

 



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * function to create the nav bare to ul li 
 * and the number of section nav equal number of section content numbers 
 */



// as number of section is 4 as the number of navbar equal 4 
// make function loop to create navbar 
 let num_nav = 4;
const create_Nav = () => {
    // num_nav++;
    for(let i=1;i<=4;i++){
// the content html nave 
      const Nav_content = `<li><a href="#section${i}" data_nav_head="${i}" id="sec${i}" class="menu__link " > section ${i}</a></li>`;
  navbar__list.insertAdjacentHTML("beforeend", Nav_content);
    }
  
};





 /**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
////////////////////////////////////////////////////////////

// Add class 'active' to section when near top of viewport



// this function define the section position on window and return true if window have this section
// it have pramiter of section on it 
  // defind top & bottom of section to used it return it to add class active 
  // have a height of sections in window and stor it in const 
  // return true if bottom of section beger than zero &top smaller than height of section  

const def_section_position = (sec) => {
  const top = sec.getBoundingClientRect().top;
  const bottom = sec.getBoundingClientRect().bottom;
  const have_sec_height = window.innerHeight || document.documentElement.clientHeight;
  return bottom >= 0 && top <= have_sec_height
};



// this function test if window have section[i] add active section  class 
    // add event when scroll 
      // action when event scroll of sections ,call def_section_position function  to defind height section
      // if true add active section 

const Add_Active_Section = () => {
	sectionsss.map((sec) => {
	  window.addEventListener("scroll", (event) => {
      def_section_position(sec)
		 ? sec.classList.add("your-active-class")
     : sec.classList.remove("your-active-class")
	  });
	});
  };


///////////////////////////////////////////////////////////////////////////
// Scroll to anchor ID using scrollTO event
// function to show and hidden button of top header of bage 
  // testing function 

window.onscroll = function () {
  this.scrollY >= 1500 ?upTop.classList.add('show'):upTop.classList.remove('show');
};

// function to up top header 
const scroll_Top_btn=(addEventListener,function(){
 window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

});

/**
 * End Main Functions
 * Begin Events
 * 
*/

create_Nav();
Add_Active_Section();
