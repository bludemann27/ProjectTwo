$(document).ready(function() {
  // blogContainer holds all of our prescription
  var prescriptionContainer = $(".prescription-container");

  // Click events for the edit and delete buttons
  // Variable to hold our prescription
  var prescriptions;

  // The code below handles the case where we want to get prescriptions for a specific user
  // Looks for a query param in the url for user_id
  var url = window.location.search;
  var userId;
  if (url.indexOf("?user_id=") !== -1) {
    userId = url.split("=")[1];
    getPrescriptions(userId);
  }
  // If there's no userId we just get all prescriptions as usual
  else {
    getPrescriptions();
  }

  // This function grabs prescriptions from the database and updates the view
  function getPrescriptions(user) {
    userId = user || "";
    if (userId) {
      userId = "/?user_id=" + userId;
    }
    $.get("/api/prescriptions" + userId, function(data) {
      console.log("prescriptions", data);
      prescriptions = data;
      if (!prescriptions || !prescriptions.length) {
        displayEmpty(user);
      } else {
        initializeRows();
      }
    });
  }

  function initializeRows() {
    prescriptionContainer.empty();
    var prescriptionsToAdd = [];
    for (var i = 0; i < prescriptionsToAdd.length; i++) {
      postsToAdd.push(createRow(prescriptions[i]));
    }
    prescriptionContainer.append(prescriptionsToAdd);
  }

  function createRow(prescription) {
    var prescriptionCard = $("<div>");
    prescriptionCard.addClass("card");
    var prescriptionCardHeading = $("<div>");
    prescriptionCardHeading.addClass("card-header");
    var prescriptionTitle = $("<h2>");
    var prescriptionDate = $("<small>");
    var prescriptionName = $("<h5>");
    prescriptionName.text(
      "insert prescription name here.  do this the same for other fields."
    );
    prescriptionName.css({
      float: "right",
      color: "blue",
      "margin-top": "-10px"
    });
    var prescriptionCardBody = $("<div>");
    prescriptionCardBody.addClass("card-body");
    var prescriptionBody = $("<p>");
    prescriptionTitle.text(prescription.title + " ");
    prescriptionBody.text(prescription.body);
    prescriptionDate.text(formattedDate);
    prescriptionCard.data("prescription", prescription);
    return prescriptionCard;
  }
});
