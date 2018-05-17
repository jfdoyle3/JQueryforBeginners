/* -------------------------- */
/* Lesson 16 - Event Helpers */
/* ------------------------ */

/*
$("#lead-banner").on("dblclick", function(){
    alert("You double clicked me");
    $("#lead-banner").off("dblclick");
});
*/

/*
on() - binds an event to matched elements(s)
off() - unbindes event from matched element(s)
*/


/* ------------------------------------------- */
/* Lesson 17 -  Document Ready vs Window Load */
/* ----------------------------------------- */

/* Few different methods for Doucment Ready */
/*
$(document).on("ready",function(){});
*/
/*
$(doucment).ready(function(){});
*/
/*
$(function(){});
*/

/* Window.load */
/*
$(window).on("load", function(){});
*/
/*
$(window).load(function(){});
*/


/* --------------------------------------- */
/* Lesson 18 - The Event Object in JQuery */
/* ------------------------------------- */

/*
$(document).ready(function(){
    $("*").on("click", function(e){
        console.log(e.target);
        console.log("The evnet Type is: "+ e.type);
        console.log("X co-ordinate of the event is: " + e.pageX);
        console.log("Y co-ordinate of the event is: " + e.pageY);
        e.stopPropagation();
    });

});
*/









