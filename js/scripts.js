//backend
function Place(name, date1, date2, country, activity, notes) {
  this.placeName = name;
  this.startDate = date1;
  this.endDate = date2;
  this.placeCountry = country;
  this.placeActivity = activity;
  this.placeNotes = notes;
}

Place.prototype.details = function() {
  return [this.placeName, this.startDate, this.endDate, this.placeCountry, this.placeActivity, this.placeNotes];
}

// UI
$(document).ready(function() {
  $("#places").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#placeName").val();
    var startDateInput = $("#startDate").val();
    var endDateInput = $("#endDate").val();
    var countryInput = $("input#country").val();
    var mainInput = $("input#mainActivity").val();
    var notesInput = $("textarea#notes").val();

    if ((nameInput === "" || /\d/.test(nameInput)) || (countryInput === "" || /\d/.test(nameInput)) || (mainInput === "" || /\d/.test(nameInput))) {
      $("#placeName, #mainActivity, #country").addClass("alert-danger");
      $(".warning").text("Please make sure to enter some text.");
    } else {
      var newPlace = new Place(nameInput, startDateInput, endDateInput, countryInput, mainInput, notesInput);
      var thisPlace = newPlace.details();
      $("#placeInfo").append("<ul class='placeTitle'>" + newPlace.placeName + "</ul>");

      for (var i = 1; i < thisPlace.length; i++) {
         $(".placeTitle").last().append("<li class='place'>" + thisPlace[i] + "</li>");
      };

      $(".placeTitle").last().click(function() {
        $(this).children().toggle();
      });

    };
  });
});
