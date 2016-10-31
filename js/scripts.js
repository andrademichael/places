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
    var dateInput = $("input#dateVisited").val();
    var countryInput = $("input#country").val();
    var mainInput = $("input#mainActivity").val();
    var notesInput = $("input#notes").val();

    var newPlace = new Place(nameInput, dateInput, countryInput, mainInput, notesInput);
    console.log(newPlace);
    var thisPlace = newPlace.details();
    thisPlace.forEach(function(detail) {
      if (detail === nameInput) {
        $("#placeInfo").append("<h3><span class='place'>" + detail + "</span></h3>");
      } else {
        $("ul#placeInfo").append("<li><span class='place'>" + detail + "</span></li>");
      };
    });
  });
});
