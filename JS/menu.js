var hiddenBox = $( "#banner-message" );
$( "#button-container button" ).on( "click", function( event ) {
  hiddenBox.show();
});


function addMega(){
  $(this).addClass("hovering");
  }

function removeMega(){
  $(this).removeClass("hovering");
  }


  var megaConfig = {    
     interval: 500,
     sensitivity: 4,
     over: addMega,
     timeout: 500,
     out: removeMega
     };

     $("li.mega").hoverIntent(megaConfig);

