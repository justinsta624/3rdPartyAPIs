// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Indicate the current day on the header 
$(document).ready(function() {
  $("#realtime").text(dayjs().format('MMMM D YYYY, h:mm:ss a'));
// MMMM: month, Do: day, YYYY: year, h=hour, mm=minute, ss=second, a=am/pm
// external source: https://momentjs.com

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
// Update time-block with different color in relation to past/present/future
// external source: "Date constructor" https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
  function realtimeBlocks() {
    var today = dayjs();  
    var timenow = dayjs().hour();
    $(".description").each(function() {
      var timeblock = parseInt($(this).attr("id"));
        if (timeblock < timenow) {
          $(this).addClass("past");
          $(this).removeClass("present");
          $(this).removeClass("future");            
        } else if (timeblock === timenow) {
          $(this).removeClass("past");
          $(this).addClass("present");
          $(this).removeClass("future");      
        } else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }    
    });
  }

  realtimeBlocks();

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
    // Saving the description in local storage
    $(".saveBtn").on("click", function() {
      var Hour = $(this).siblings(".description").attr("id");
      var Text = $(this).siblings(".description").val().trim();
      localStorage.setItem(Hour, Text);
  });

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?  
    // Load events from local storage
    function loadSavings() {
      $(".description").each(function() {
        var Hour = $(this).attr("id");
        var Text = localStorage.getItem(Hour);
        if (Text) {
          $(this).val(Text);
        }
      });
    }

  loadSavings();
});

