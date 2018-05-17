/* ---------------------------- */
/* Lesson 13 - Controlling CSS */
/* -------------------------- */

/*  Chaining 
$("#social-nav").css("top","-200px").css("left", "100px");
*/

/* thru an Object
$("#social-nav").css({
    "top": "-400px",
    "left": "150px",
    "opacity": "0.5",
    "border-top": "4px solid red"
});
*/

/* ------------------------------- */
/* Lesson 14 -  Adding & Removing */
/* ----------------------------- */

/* Add & Remove */
/*
$("header .wrapper").removeClass("wrapper");
$("header > div").addClass("wrapper");
*/

/* Toggle Class */

var button= $("#lead-banner a");
button[0].onclick=function(){
    $("#points-of-sale").toggleClass("open");
    return false;
};


/*
removeClass() - removes a class from the matched elements(s)
addClass() - add a class to the matched element(s)
toggleClass() - toggles the class on and off on their matched element(s)
*/

/* -------------------------------- */
/* Lesson 15 - Binding & Unbinding */
/* ------------------------------ */

var myLis=$("#points-of-sale li");
myLis.on("click", function(){
    $(this).css({"background" : "pink"});
    myLis.off("click");
});

/*
on() - binds an event to matched elements
off() - unbinds an event from matched elements
*/