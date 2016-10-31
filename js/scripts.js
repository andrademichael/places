//backend

function Place(name, date, country, activity, notes) {
  this.placeName = name;
  this.placeDate = date;
  this.placeCountry = country;
  this.placeActivity = activity;
  this.placeNotes = notes;
}

Place.prototype.details = function() {
  return [this.placeName, this.placeDate, this.placeCountry, this.placeActivity, this.placeNotes];
}

$(document).ready(function() {
  //add form?
  $("#places").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#placeName").val();
    var dateInput = $(".input-daterange").val();
    var countryInput = $("input#country").val();
    var mainInput = $("input#mainActivity").val();
    var notesInput = $("input#notes").val();

    if ((nameInput === "" || /\d/.test(nameInput)) || (countryInput === "" || /\d/.test(nameInput)) || (mainInput === "" || /\d/.test(nameInput))) {
      $("#placeName, #mainActivity, #country").addClass("alert-danger");
      $(".warning").text("Please make sure to enter some text.");
    } else {
      var newPlace = new Place(nameInput, dateInput, countryInput, mainInput, notesInput);
      var thisPlace = newPlace.details();

      $("#placeInfo").append("<h3><span class='placeTitle'>" + newPlace.placeName + "</span></h3>");

      for (i = 1; i < thisPlace.length; i++) {
         $("ul#placeInfo").append("<li><span class='place'>" + thisPlace[i] + "</span></li>");
      };

      // thisPlace.forEach(function(detail) {
      //   $("ul#placeInfo").append("<li><span class='place'>" + detail + "</span></li>");
      // });

      $(".place").last().click(function() {
      });

    };
  });
});
