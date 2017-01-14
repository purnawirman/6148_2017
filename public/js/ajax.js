$(document).ready(function() {

  $(".find-submit").click(function() {

    // get the username
    var name = $(".find").val();

    // send the AJAX request
    $.ajax({
      url: '/findfruit',
      data: {
        username: name,
      },
      type: 'GET',
      success: function(data) {
        // update the HTML element with the returned data
        $(".find-output").text(data);
      },
      error: function(xhr, status, error) {
        console.log("Uh oh there was an error: " + error);
      }
    });
  });


  $(".add-submit").click(function() {

    // get the username and fruit
    var name = $(".username-add").val();
    var fruit = $(".userfruit-add").val();

    // send the AJAX request
    $.ajax({
      url: '/adduser',
      data: {
        username: name,
        userfruit: fruit
      },
      type: 'POST',
      success: function(data) {
        // add a new list element containing the returned data
        $(".user-add").append("<li>" + data + "</li>");
      },
      error: function(xhr, status, error) {
        console.log("Uh oh there was an error: " + error);
      }
    });
  });
});
