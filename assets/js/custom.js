$(document).ready(function(){
  $(".glyphicon-chevron-up").click(function(){
    $(this).toggleClass("glyphicon-chevron-down");
    $(this).nextAll(".toggle-container:first").slideToggle();
  });
  $('.fdw-background').hover(
    function () {
      $(this).animate({opacity:'1'});
    },
    function () {
      $(this).animate({opacity:'0'});
    }
  );
  $('#slidorion').slidorion({
    autoPlay: false,
    speed: 1500,
    effect: 'overDown'
  });
  $('.FlowupLabels').FlowupLabels({
        /*
        These are all the default values
        You may exclude any/all of these options
        if you won't be changing them
         */
        // Handles the possibility of having input boxes prefilled on page load
        feature_onLoadInit: true, 

        // Class when focusing an input
        class_focused:      'focused',
        // Class when an input has text entered
        class_populated:    'populated' 
  });
});
