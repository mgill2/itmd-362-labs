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
});

function submitMessage() {
  alert ("Thank you for signing up! If you wish to personalize your account there is more settings once you login! Have a great day!");
  
};