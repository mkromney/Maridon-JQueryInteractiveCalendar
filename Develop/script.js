$(document).ready(function() {

  //This section of code displays the current date. //
  var currentDate = new Date(); //This variable sets 'currentDate' to equal a new date which defaults to the current date. //
  
  var dateString = currentDate.toDateString();//This creates a variable 'dateString' which strings new Date stored in 'currentDate'. //
  $('#currentDay').text(dateString); //This bit attaches it to the class that needs to be referenced. //
  console.log(dateString); //This displays the new 'dateString'. //
  

  //This section is meant to get JQuery to compare the current time to the 'hour-#' div and change its class according to that comparison logic. //
  var currentHour = new Date().getUTCHours(); //24-hour format. //

  $('div[id^="hour-"]').each(function() {
    var id = $(this).attr('id');
    var divHour = parseInt((id).split('-')[1]);
    console.log(divHour);
    console.log(id);
    var text = localStorage.getItem(id);
    var childEl = $(this).children()[1];
    $(childEl).text(text)


    // currentHour = dayjs().hour()
    // currentHour = 14 //I can use this line for testing but make sure to comment out when not used for testing. //
    console.log(currentHour, divHour)
    //How does the code below work?//
    //The code in line 28 begins an if evaluation that checks if the 'currentHour' is greater than the value of divHour. //
    if (divHour < currentHour) {
      $(this).addClass('past');
    } // Line 29 is used to add the CSS 'past' element to the current element 
     else if (divHour == currentHour) {
      $(this).addClass('present');
      $(this).removeClass('past');
    } // I needed to be able to remove classes that had been set to avoid their continuation later on in the code. //
     else {
      $(this).addClass('future');
      $(this).removeClass('present');
      $(this).removeClass('past');
    }
  });
 


// This section is concerned with the click functionality and data storage. //

   // Click event listener for the save buttons. //
  $('.saveBtn').on('click', function(event) {
    var targetParentId = $(event.target).parent().attr('id');
    console.log(targetParentId)
    // var timeBlockId = $(this).closest('.time-block').attr('id');
    var userInput = $(this).siblings('textarea').val();
    console.log(userInput)
    // Saves user input in local storage using the time block ID as the key
    localStorage.setItem(targetParentId, userInput);
    });

  });
