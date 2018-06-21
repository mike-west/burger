$(function() {
  $(".change-status").on("click", function(event) {
    var id = $(this).data("id");
    var thisStatus = $(this).data("data-devoured");
    var newStatus = (thisStatus === true) ? false : true;
    console.log("newStatus: "  + newStatus);

    var newDivouredState = {
      id: id,
      divoured: newStatus
    };
    console.log(newDivouredState);
    // Send the PUT request.
    $.ajax("/api/" + id, {
      type: "PUT",
      data: newDivouredState
    }).then(
      function() {
        console.log("changed divoured to", newStatus);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      name: $("#bu").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
