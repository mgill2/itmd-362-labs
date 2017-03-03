// Tell jQuery to give up the dollar sign
$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  $('#email').on('blur', function() {
    if($('#email').val().length == 0) {
      $('#input-email label').removeClass('active');
    }
   });
   
   $('form').on('click', function(ageV) {
      if($('#age').val() >= 12) {
      $('p').text("Validated").show();
      }
      if($('#age').val() < 12) {
        $('p').text("Not a valid age!").show();
      }
  });
    /*
    $('form').onsubmit(function(submit) {
      
      submitMessage();
      
    }); */
    WebFontConfig = {
      google: {
        families: ['Signika', 'sans-serif']
      }
    };
    WebFontConfig = {
      google: {
        families: ['Vollkorn', 'serif']
      }
    };
 });

 //JavaScript
function submitMessage() {
   alert ("Thank you for signing up! If you wish to personalize your account there is more settings once you login! Have a great day!");
};