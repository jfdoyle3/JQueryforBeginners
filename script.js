/* ------------------------------ */
/* Lesson 19 - JQuery Animations */
/* ---------------------------- */

/*
$(document).ready(function(){
    function complete(){
        alert("animation complete")
    };
    $("section > h2").on("click", function(){
        $(this).animate({"width": "500px", "height" : "100px"},1000, "linear", complete);
    });
});
*/

/* ----------------------------- */
/* Lesson 20 -  Fading Elements */
/* --------------------------- */

/*
$(document).ready(function(){
    $("section > h2").on("click", function(){
        $(this).fadeOut(2000).fadeIn(500); 
        $(this).fadeTo(200, 0.2)
               .fadeTo(200, 0.8)
               .fadeTo(200, 0.2)
               .fadeTo(200, 0.8)
               .fadeTo(200, 0.2)
               .fadeTo(200, 0.8)
    });
});
*/

/*
 fadeIn(), fadeOut(), fadeTo()
*/

/* ------------------------------- */
/* Lesson 21 - Show, Hide, Toggle */
/* ------------------------------*/

$(document).ready(function(){
    $("img[alt=map]").on("click", function(){
      /*  $(this).hide(1000).show(1000); */
      $("section >h2").toggle(1000);
        
    });
});

/*
hide(), show(), toggle()
*/

