$(document).ready(function () {
    "use strict";
    // nice scroll
    $("html").niceScroll();

    $(".carousel").carousel({

        Interval:6000
    });
    
 // show color option div when click on the cear

    $(".gear-check").click(function () {

        $(".color-option").fadeToggle();
    });
 // change theme color on click

    var colorLi=$(".color-option ul li");

    colorLi  
        .eq(0).css("backgroundColor","#E41B17").end()
        .eq(1).css("backgroundColor","#eeb03e").end()
        .eq(2).css("backgroundColor","#a563eb").end()
        .eq(3).css("backgroundColor","#4664ed");

    colorLi.click(function () {

    $("link[href*='theme']").attr("href",$(this).attr("data-value"));

    // console.log($(this).attr("data-value"))
   });

 // caching the scroll top element
 
 var scrollButton=$("#scroll-top");

 $(window).scroll(function () {
    
    if ($(this).scrollTop() >= 400) {

        scrollButton.show();

    } else {

        scrollButton.hide();
    }
     
    // click on Button to scroll top
    
 });   
 scrollButton.click(function () {
        $("html,body").animate({scrollTop:0}, 600);
    }); 
});

// loading screen 
$(window).load(function () {
        // loading elements
    
        $(".loading-overlay, .loading-overlay .sk-chase").fadeOut(2000)
  
});


