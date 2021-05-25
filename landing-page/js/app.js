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
const main = document.querySelector('main');
const sections = document.getElementsByTagName('section');
const ul = document.getElementById('navbar__list');



// section 4 variables
const newSection = document.createElement('section');
const divElement = document.createElement('div');
const h2 = document.createElement('h2');
const p = document.createElement('p');
const p2 = document.createElement('p');



/**
 * End Global Variables
*/


// Add section 4
newSection.id = "section4";
newSection.setAttribute("data-nav", "Section 4");
divElement.className = ("landing__container");


h2.textContent = "Section 4";
p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod."
p2.textContent = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."



main.appendChild(newSection);
newSection.prepend(divElement);
divElement.appendChild(h2);
divElement.appendChild(p);
divElement.appendChild(p2);

//declared below to be able to query the added dynamic section 
const sectionArr = document.querySelectorAll('section');



/**
 
 * Begin Main Functions
 * 
*/
function menuBuild(){
    for (section of sections){
         
        let sectionName= section.getAttribute('data-nav');
        let sectionAnchor= section.getAttribute('id');
        
        let li = document.createElement('li');
        //create hyperlink links to the sections
        let link = document.createElement('a');
        link.className ="menu__link";
        link.innerText = sectionName;
        link.href = `#${sectionAnchor}`;
        
        
        ul.append(li);
        li.appendChild(link);
}}


// Build menu 
  menuBuild();
   

/**
 * End Main Functions
 * Begin Events
 * 
*/


   

// Add class 'active' to section when near top of viewport

  
window.addEventListener('scroll' ,function(){
  sectionArr.forEach(function (section) {
     //determines section into view  
    let scrollPos = section.getBoundingClientRect().top;
      if(scrollPos<300 && scrollPos>=-50){
     section.classList.add('your-active-class');
}
  else {
    section.classList.remove('your-active-class');
    
  }
}
  )})



  // Add class 'active' to link

const linkArr = document.querySelectorAll('a');

 linkArr.forEach(function (link) {
   
  link.addEventListener('click', function(){
      
      //select current link with active class
      let linkElement = document.querySelector('.your-active-class');
      //replace the active class with blank text
      linkElement.className = linkElement.className.replace(" your-active-class", "");
      //add new active class on link click
      link.classList.add('your-active-class');
      
      
   
    
   });
 });
 
    
  




 
