$(document).ready(function(){
 
//RELEASE 0: 
  //Link this script and the jQuery library to the jquery_example.html file and analyze what this code does. 
 
$('body').css({'background-color': '#ffffff'})
 
//RELEASE 1:
  //Add code here to select elements of the DOM 
 bodyElement = $('body')
 headerElement = $('h1')
 imageElement = $('img')
 
//RELEASE 2: 
  // Add code here to modify the css and html of DOM elements
 $('body h1').css( {'color':'blue', 'margin' : '0', 'border': 'none', 'text-align': 'center'} )
 $('.mascot h1').html("<h1>THE WOLVES!</h1>")
 $('img').css( {'width':'300px', 'height':'auto', 'marginLeft' : '500px'})
 $('.hidden').css( {'fontSize':'50px'})
 $('.display').css( {'fontSize':'30px'})

 
//RELEASE 3: Event Listener
  // Add the code for the event listener here 
  $('img').on('mouseover', function(e){
     e.preventDefault()
    $(this).attr('src', 'http://www.all-about-wolves.com/wp-content/gallery/free-wolf-photos-and-wallpaper/lone-wolf.jpg')
  })
 
 $('img').on('mouseleave', function(e){
     e.preventDefault()
    $(this).attr('src', '../../imgs/dbc_logo.jpg')
  })


 $(document).ready(function() {
		setInterval(function(){
			fade();
		},3000);
		function fade(){
			$("display, .hidden").fadeToggle(3000);
		}
	});

 
//RELEASE 4 : Experiment on your own

$( ".mascot" ).click(function() {
  $( ".block" ).animate({
    width: "50%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
  }, 1500 );
});
 
 
 
})  // end of the document.ready function: do not remove or write DOM manipulation below this.
