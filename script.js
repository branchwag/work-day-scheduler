// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  var saveButtonEl = $('.saveBtn');

//the save button must be clicked first before we can set localstorage values
  saveButtonEl.on('click', function (event) {
    localStorage.setItem("hour", (event.target.closest("div").id));

    var actualEventtext = ($($(this).prev()[0]).val());
    localStorage.setItem("event", actualEventtext);

    //push to array? may not be needed
    getLocalStorageValues();
    
  });

// var testingforhour = localStorage.getItem("hour");
// console.log(testingforhour)



  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  function getLocalStorageValues() {
    // console.log(localStorage.getItem("hour"));
    // console.log(localStorage.getItem("event"));
    var hourID = localStorage.getItem("hour");
    var hour = hourID.replace('hour-', '');
    var eventText = localStorage.getItem("event"); 
    
    console.log(hour);
    console.log(eventText);
    }

  //
  // TODO: Add code to display the current date in the header of the page.
  function getDate() {
    console.log(dayjs());
    var dateValue = (dayjs().$d);
    console.log(dateValue);
    console.log(typeof(dateValue)); // returns Object Wed May 24 2023 09:09:16 GMT-0400 (Eastern Daylight Time)
    console.log(JSON.stringify(dateValue)); // returns weirdly formatted date "2023-05-24T13:09:16.571Z"
    console.log(dayjs().format('YYYY'));
    console.log(typeof(dayjs().format('YYYY')));
  }
  
  getDate();
  
});


