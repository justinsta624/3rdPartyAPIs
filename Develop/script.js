// Indicate the current day on the header 
// MMMM: month, Do: day, YYYY: year, h=hour, mm=minute, ss=second, a=am/pm
// external source: https://momentjs.com

$(document).ready(function() {
  $("#realtime").text(dayjs().format('MMMM D YYYY, h:mm:ss a'));

// TODO: Add code to apply the past, present, or future class to each time block by comparing the id
// to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally
// add or remove the past, present, and future classes? How can Day.js be used to get the current hour
// in 24-hour time?

// Update time-block with different color in relation to past/present/future
// external source: "DOM navigation: Node relationship" https://www.w3schools.com/js/js_htmldom_navigation.asp 

  function realtimeBlocks() {
    var today = dayjs();  
    var timenow = dayjs().hour();
    $(".description").each(function() {
      var timeblock = parseInt($(this).parent().attr("id"));
      $(this).removeClass("past present future"); // remove all classes EXCEPT
      if (timeblock < timenow) { // if loops add past condition
        $(this).addClass("past"); 
      } else if (timeblock === timenow) { // else if loops add present condition
        $(this).addClass("present");   
      } else { // else loops add future condition
        $(this).addClass("future");
      }
    });
  }

  realtimeBlocks();

// TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block
// as a key to save the user input in local storage. 
// HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x"
// id of the time-block containing the button that was clicked? How might the id be useful when saving the description
// in local storage?

  // Saving description in the local storage
  $(".saveBtn").on("click", function() {
    var Hour = $(this).parent().attr("id");
    var Text = $(this).siblings(".description").val().trim();
    localStorage.setItem(Hour, Text);
  });

// TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
// HINT: How can the id attribute of each time-block be used to do this? 

  // Load saved description from the local storage
  function loadSavings() {
    $(".description").each(function() {
      var Hour = $(this).attr("id");
      var Text = localStorage.getItem(Hour);
      if (Text) {
        $(this).val(Text);
      }
    });
  }

  // JS source code guide from tutorial by A.Al Hilfi
  $("#9").children("textarea").val(localStorage.getItem("9"));
  $("#10").children("textarea").val(localStorage.getItem("10"));
  $("#11").children("textarea").val(localStorage.getItem("11"));
  $("#12").children("textarea").val(localStorage.getItem("12"));
  $("#13").children("textarea").val(localStorage.getItem("13"));
  $("#14").children("textarea").val(localStorage.getItem("14"));
  $("#15").children("textarea").val(localStorage.getItem("15"));
  $("#16").children("textarea").val(localStorage.getItem("16"));
  $("#17").children("textarea").val(localStorage.getItem("17")); 
  $("#18").children("textarea").val(localStorage.getItem("18"));
  $("#19").children("textarea").val(localStorage.getItem("19"));
  $("#20").children("textarea").val(localStorage.getItem("20")); 

  loadSavings();
});

