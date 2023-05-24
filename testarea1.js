//playpen for figuring this out

var saveButtonEl = $('.saveBtn');

saveButtonEl.on('click', function (event) {
  //console.log("Save button clicked")
  //console.log(event.target)
  //console.log(event.target.closest("div"));
  //console.log(typeof(event.target.closest("div")));
  //console.log((event.target.closest("div")).id); // ;_; finally returns the hour id
  //may need to replace or slice 'hour-' off of it later or before putting it in local storage

  //putting the hourid of the closet div into storage
  localStorage.setItem("hour", event.target.closest("div").id);

  var hourID = localStorage.getItem("hour");

  //console.log(hourID) // logs the id! yayyyy!
  //console.log(hourID.replace('hour-', '')); 
  
  // gets just the hour within the id

  var hour = hourID.replace('hour-', '');
  console.log(hour);


  //WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
//so going to need to store text as well
//localStorage.setItem("event", event.target.closest("textarea").innerText);
//console.log(event.target.prev("textarea"));
//console.log($(this).prev());
console.log($(this).prev()[0]);
var eventText = $(this).prev()[0];

//console.log(eventText.val());
console.log(typeof(eventText));
//console.log($(eventText).attr("class")); // jquery is evil -_- need to put dollar sign to get the functions to work on these things
console.log($(eventText).val()) //FINALLY GETS EVENT TEXT
var actualEventtext = ($(eventText).val()); //setting event text as variable

//console.log(eventText[2]);


  //Failed attempts at trying to find the id:
  //console.log((event.target.closest("div")).children());
  //console.log((event.target.closest("div")).attr());
  //console.log($(event.target).attr());
  //console.log($(event.target).attr(event.target.closest("div")))
});

//$('.container-fluid').on('click', '.saveBtn', runSchedule());


console.log($(dayjs()).text());


  //var hour = hourID.replace('hour-', '');