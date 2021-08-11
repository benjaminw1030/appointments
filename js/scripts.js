$(document).ready(function() {
  $("form#appointment").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const description = $("#description").val();
    const date = $("#date").val();
    const startTime = $("#start-time").val();
    const endTime = $("#end-time").val();
    $(".output").text("Booking Successful!");
  });
});