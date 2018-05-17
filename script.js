/* ------------------------------------- */
/* Lesson 10 - Wrap and Unwrap Elements */
/* ----------------------------------- */

/* $("section").wrap("<div>");
*/
/* $("section").unwrap();
*/
/* $("section").wrapAll("<div>");
*/

/*
wrap() - wraps all matched elements individually
unwrap() - unwraps all matched elements
wrapAll() - wraps all elements combined with 1 single element
*/


/* Demo */
/*
var wrapper="<div class='wrapper'>";
var button= $(".button");
var wrapped=true;

button[0].onclick=function(){
    if (wrapped){
        $("section").unwrap();
        wrapped=false;
        button.text("Wrap");
    } else {
        $("section").wrapAll(wrapper);
        wrapped=true;
        button.text("Unwrap");
    }
};
*/

/* ----------------------------- */
/* Lesson 11 - Removing Content */
/* --------------------------- */

/*
$(".button").empty();
$("#points-of-sale").empty();
*/
/*
$(".button").remove();
$("#contact img").remove();
*/

/*
.empty() - empties the inner HTML of an Element
.remove() - removes element completely
*/

/* -------------------------------- */
/* Lesson 12 - Changing Attributes */
/* ------------------------------ */

/*
$("#contact img").removeAttr("alt");
*/
/* Set Attribute
$("#contact img").attr("alt", "location");
*/
/* Read Attrubite
console.log($("#contact img").attr("alt"));
*/


/*
.removeAttr() - removes attribute completely
.attr() - can read or set any attribute
*/