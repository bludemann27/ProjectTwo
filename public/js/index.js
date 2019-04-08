//Get references to page elements
//test
//test again
var $drugEntryDrugName = $("#drugEntry-drugName");
var $drugEntryDescription = $("#drugEntry-description");
var $drugEntryDosage = $("#drugEntry-dosage");
var $submitBtn = $("#submit");
var $adminEntryList = $("#drugEntry-list");

// The API object contains methods for each kind of request we'll make
var API = {
  savedrugEntry: function(drugEntry) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/drugEntry",
      data: JSON.stringify(drugEntry)
    });
  },
  getdrugName: function() {
    return $.ajax({
      url: "api/drugEntry",
      type: "GET"
    });
  },
  deleteDrugName: function(id) {
    return $.ajax({
      url: "api/drugEntry/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshDrugName = function() {
  API.getdrugName().then(function(data) {
    var $drugEntry = data.map(function(drugEntry) {
      var $a = $("<a>")
        .text(drugEntry.drugName)
        .attr("href", "/drugEntry/" + drugEntry.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": drugEntry.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $adminEntryList.empty();
    $adminEntryList.append($drugEntry);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var drugEntry = {
    drugName: $drugEntryDrugName.val().trim(),
    description: $drugEntryDescription.val().trim(),
    dosage: $drugEntryDosage.val().trim()
  };

  if (!(drugEntry.drugName && drugEntry.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.savedrugEntry(drugEntry).then(function() {
    refreshDrugName();
  });

  $drugEntryDrugName.val("");
  $drugEntryDescription.val("");
  $drugEntryDosage.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteDrugName(idToDelete).then(function() {
    refreshDrugName();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$adminEntryList.on("click", ".delete", handleDeleteBtnClick);
