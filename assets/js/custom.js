

// menu js-----------------------------------------------

document.getElementById("ham1").addEventListener("click", function () {
    document.querySelector(".parent_nav").classList.add("active");
    document.querySelector("html").classList.add("cm-overflow");
});
document.getElementById("ham2").addEventListener("click", function () {
    document.querySelector(".parent_nav").classList.remove("active");
    document.querySelector("html").classList.remove("cm-overflow");

});
 


var get_select = document.querySelectorAll(" .nav .color_hover , .login_block li");
console.log(get_select);
get_select.forEach(index => {
    index.addEventListener('click', function () {
        document.querySelector(".parent_nav").classList.remove("active");
        document.querySelector("html").classList.remove("cm-overflow");
    });
});
 

// section-10-collapes---------------------------------------------------------


var acc = document.getElementsByClassName("accordion");
       
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + "px"
        }
    });
}


// footer-collapes------------------------------------------------------------
var acc2 = document.getElementsByClassName("accordion-2");
var i;
for (i = 0; i < acc2.length; i++) {
    acc2[i].addEventListener("click", function () {
        this.classList.toggle("active1");
        var panel2 = this.nextElementSibling;
        if (panel2.style.maxHeight) {
            panel2.style.maxHeight = null;
        }
        else {
            panel2.style.maxHeight = panel2.scrollHeight + "px"
        }
    });
}

//---paralaxx mouse move---------------------------------------------------------------

 var scene = document.getElementById('js-scene');
 var parallax = new Parallax(scene);


//---paralaxx mouse move class remove--------------------------------------------------
const navbar = document.getElementById("remove-parx");
window.addEventListener("scroll", function (event) {
    var top = window.pageYOffset || document.documentElement.scrollTop,
        left = window.pageXOffset || document.documentElement.scrollLeft;
   // console.log(top, left);
    if (window.innerWidth > 991) {
        if (top >= 290) {
           // console.log('removing_in large device...........')
            navbar.classList.remove('items__layer', 'layer');
            navbar.removeAttribute("style");
        } else {
            //console.log('applying_in large device...........')
            navbar.classList.add('items__layer', 'layer');
            navbar.setAttribute("style");
        }
    } else {
       // console.log('removing_under_991_in small device...........')
        navbar.classList.remove('items__layer', 'layer');
        navbar.removeAttribute("style");
    }
}, false);
 
