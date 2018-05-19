/* ----------------------------- */
/* Lesson 22 - Sliding Elements */
/* --------------------------- */
/*
$(document).ready(function(){
    $(".slide-button-up").on("click", function(){
       $("#lead-banner").slideUp(100);
    });
    $(".slide-button-down").on("click", function(){
       $("#lead-banner").slideDown(4000, function(){
           alert("Animation done");
       });
    });
});
*/
/*
$(document).ready(function(){
    $(".slide-button-up").on("click", function(){
       $("#lead-banner").slideToggle(1000, function(){
           alert("Animation complete");
       });
    });
  
});
*/

/* ---------------------------------------------- */
/* Lesson 23 - Animation example: 1 Quote Fader  */
/* -------------------------------------------- */

/*
$(document).ready(function(){
    var allQuotes=$("blockquote");
    var currentQuote=0;
    function changeQuote(){
        $(allQuotes[currentQuote]).fadeOut(200, function(){
            if (currentQuote == allQuotes.length - 1){
                currentQuote=0;
            } else {
                currentQuote++;
            }
            $(allQuotes[currentQuote]).fadeIn(200);
    
        });
    } 
    var quoteTimer= setInterval(changeQuote, 3000);
});
 */

/* --------------------------------------------------- */
/* Lesson 24 - Animation Example 2: Sliding Animation */
/* --------------------------------------------------*/

/*
$(document).ready(function(){

    var items=$("#points-of-sale li");
    items.on("click",function(){
        $(this).find("p").slideToggle(500);
    });    


});
*/


