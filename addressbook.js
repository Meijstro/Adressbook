window.onload = function(){

  // get all buttons
  var overviewButton = document.getElementById('overviewButton');
  var newButton = document.getElementById('newButton');


  // get all buttons when adding contact
  var Addbutton = document.getElementById('add');
  var cancelButton = document.getElementById('cancelButton');

  // get all the contact information
  var name = document.getElementById('name');
  var phone = document.getElementById('phone');
  var email = document.getElementById('email');

  var overviewForm = document.getElementById("overviewForm");
  var noContacts = document.getElementById("noContacts");
  var newForm = document.getElementById("newForm");



// what happens when u click on contacts
  overviewButton.addEventListener("click", function(){
    newForm.style.display = "none";
    overviewForm.style.display = "block";

  });

// what happens when u click on addcontact
  newButton.addEventListener("click", function(){
    newForm.style.display = "block";
    overviewForm.style.display = "none";
  });

  // what happens when u click on cancel
  cancelButton.addEventListener('click', function(){
    newForm.style.display = "none";
    overviewForm.style.display = "block";
 });

var addressID = 0;

 // what happens when u click on add
 addButton.addEventListener('click', function(){
   addressID++;

   newForm.style.display = "none";
   overviewForm.style.display = "block";
   noContacts.style.display = "none";

   overviewForm.innerHTML += "<div id='addressEntry" + addressID + "' class='addressEntry'>" +
   name.value + "</br>" + phone.value + "</br>" + email.value +
   "</br>" + "</br>" +
  "<button class=\"deleteButton\" onclick='document.getElementById(\"addressEntry" + addressID + "\").remove();countEntries();'>Delete</button>" +
  "<hr>" + "<br></div>";

 });






};

 function countEntries() {
   if (document.getElementsByClassName("addressEntry").length == 0) {
     document.getElementById("noContacts").style.display = "block";
   }
 }
