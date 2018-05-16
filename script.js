
/* Lesson 7 Traversing the DOM with JQuery */

/* next
$('#contact-methods').next().css({border: '3px solid red'});
 */

/* prev 
$("#social-nav").prev().css({border: "3px solid blue"});
 */

/* parent 
$('.banner-title').parent().css({border: '3px solid pink'}); 
*/

/* childern 
$("#social-nav").children().css({border: '3px solid green'}); 
*/ 

/* find
$('#contact').find('.facebook').css({border: '2px solid purple'});
*/

/* closest
$('#social-nav').closest('.wrapper').css({border: '2px solid orange'});
 */ 

/* Lesson 8 - Chaining*/
/*
$('#contact-methods').css({border: '2px solid red'})
    .next().css({border: '2px solid green'})
    .closest('section').css({border: '2px solid blue'});
*/

/* Lesson 9 - Adding Content to HTML*/

// SOME CODE TO PULL IN MY LATEST TWITTER TWEET
var tweet="<div style='margin 20px 0; padding: 10px; background: #eee'>The big fight live: Ham vs Cheese!</div>";

/* append
$('#tweets div').append(tweet);
*/

/* prepend 
$('#tweets div').prepend(tweet);
*/

/* before
$('#tweets p').before(tweet);
*/

/*after 
$('#tweets div').after(tweet);
*/

/* HTML 
$('#tweets div').html(tweet);
*/

/* text 
var tweet="The big fight live: Ham vs Cheese!";
$('#tweets div p').text(tweet);
*/

/* ADDING & CHANGING CONTENT

.append() adds content to the bottom of the element
.prepend() adds content to the top of the element
.before() adds content before element
.after() adds content after element
.html() changes the whole html of the element
.text() changes the text of an element

*/