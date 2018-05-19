/* -------------------------- */
/* Lesson 25 - Using Plugins */
/* -------------------------*/
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

/* -------------------------- */
/* Lesson 26 - What's Next?  */
/* ------------------------ */

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
