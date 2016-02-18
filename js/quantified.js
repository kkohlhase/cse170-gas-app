  $(document).ready(function() {
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger-regular').leanModal();
    $('.modal-trigger-sidebar').leanModal();
    $('.modal-trigger-fillup').leanModal();
    $('select').material_select();
});
  $('.datepicker').pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 15 // Creates a dropdown of 15 years to control year
});


  $(document).ready(function($) {
  $(".clickable-row").click(function() {
      console.log($(this).text());
      console.log("clicked");
      });
  });

  // $(".tbodz").find(".clickable-row").each(function() { //get all rows in table 
  //     console.log("yooo");
  //     var ratingTdText = $(this).text(); 
  //     //gets the text out of the rating td for this row
  //     alert(ratingTdText);

  // });