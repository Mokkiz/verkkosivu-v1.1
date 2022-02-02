const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links-container');
    const navLinks = document.querySelectorAll('.links-container li');
  

    burger.addEventListener('click',()=>{
        //toggle nav
        nav.classList.toggle('nav-active');
        
            //animate links
        navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation =''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.35}s`
        }
        
        });
        //burger animation
        burger.classList.toggle('toggle')

    });
    }
    
navSlide();


var btn = true;


function noScroll() {
    if (btn)  {
    window.onscroll = function() { window.scroll(0, 0); };
    } else  {
        window.onscroll=function(){};
        
    }
    btn = !btn
  } 
