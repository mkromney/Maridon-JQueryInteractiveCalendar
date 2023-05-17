$(document).ready(function() {

  //This section of code displays the current date. //
  var currentDate = new Date(); //This variable sets 'currentDate' to equal a new date which defaults to the current date. //
  
  var dateString = currentDate.toDateString();//This creates a variable 'dateString' which strings new Date stored in 'currentDate'. //
  $('#currentDay').text(dateString); //This bit attaches it to the class that needs to be referenced. //
  console.log(dateString); //This displays the new 'dateString'. //
  

  //This section is meant to get JQuery to compare the current time to the 'hour-#' div and change its class according to that comparison logic. //
  var currentHour = new Date().getUTCHours(); //24-hour format. //

  $('div[id^="hour-"]').each(function() {
    var divHour = parseInt($(this).attr('id').split('-')[1]);
    //for each div id that begins with hour- this .each function iterates over all items that begin with hour and using the if logic below the number that follows hour- is used to compare the id hour with the actual current hour. Help found in multiple places: https://api.jquery.com/attribute-starts-with-selector/ for the '[name^="value"] bit, for the complicated 'split' where I needed to isolate the individual numbers after 'hour-' I found help here: https://teamtreehouse.com/community/split-string-with-jquery. //

    if (divHour < currentHour) {
      $(this).addClass('past');
    } else if (divHour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });
 


// This section is concerned with the click functionality and data storage. //
$(function () {
    
  onclick

  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?

  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the idattribute of each time-block be used to conditionally add or remove thepast, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
    
  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding text area elements. HINT: How can the id attribute of each time-block be used to do this?
  
  // TODO: Add code to display the current date in the header of the page.
  });
});