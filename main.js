// querySelector() The Document method querySelector() returns the first Element within 
// the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
let toggle = document.querySelector("#header .toggle-button");
// need of using queryselectorall because we have two collapse classes
let collapse = document.querySelectorAll("#header .collapse");
// The addEventListener() method attaches an event handler to an element without overwriting existing 
// event handlers. You can add many event handlers to one element. You can add many event handlers of 
// the same type to one element, i.e two "click" events.
toggle.addEventListener('click' , function(){
    collapse.forEach(col => col.classList.toggle("collapse-toggle"));
})

// with masonry
new Masonry("#posts .grid", {
    itemSelector : '.grid-item',
    gutter : 20
});

// swiper libray initialization
new Swiper('.swiper-container', {
    direction : 'horizontal',
    loop : true,
    slidesPerView : 5,
    autoplay : {
        delay : 2000
    },
    // responsive brakpoints
    breakpoints : {
        '@0' : {
            slidesPerView : 2
        },
        // 888px
        '@1.00' : {
            slidesPerView : 3
        },
        // 1110px
        '@1.25' : {
            slidesPerView : 4
        },
        // 1330px
        '@1.50' : {
            slidesPerView: 5
        }
    }
})

// Sticky Navigation
window.onscroll = function(){ myFunction()};

// get the current value 
let navbar = document.getElementById("header");

// get the navbar position
let sticky = navbar.offsetTop;

// sticky function
function myFunction(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
}

