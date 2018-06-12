//typewriter function
$(function(){
	var app = document.getElementById('typewrl');

	var typewriter = new Typewriter(app, {
		loop: true
	});

	typewriter.typeString('BECAUSE TECHNOLOGY MATTERS')
    	.pauseFor(1500)
    	.deleteAll()
    	.typeString("THERE'S FUTURE, THERE'S INNOVATION.")
    	.pauseFor(1500)
    	.deleteAll()
    	.typeString('WE DO WHAT WE DREAM.')
    	.pauseFor(1500)
    	.deleteAll()
    	.typeString('ENCOURAGING DIVERSITY, IGNITING MINDS.')
    	.start();
});

//function to detect wheather website has been opened in mobile or big devices.
function detectmob() { 
	if( navigator.userAgent.match(/Android/i)
	|| navigator.userAgent.match(/webOS/i)
	|| navigator.userAgent.match(/iPhone/i)
	|| navigator.userAgent.match(/iPad/i)
	|| navigator.userAgent.match(/iPod/i)
	|| navigator.userAgent.match(/BlackBerry/i)
	|| navigator.userAgent.match(/Windows Phone/i)
	){
	   return true;
	 }
	else {
	   return false;
	 }
}


$(function(){
	
	//function to change navbar color on scroll if scroll height is more than 250px
	$(window).scroll(function(){
		if($(document).scrollTop() >350 ){
			$('nav').css({"background-color": "#1e88e5", "box-shadow": "0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)"});
		} else {
			console.log("saurav inside nav");
			$('nav').css({"background-color": "transparent","box-shadow":"none"});
		}
	});

	//navbar collapsible to open in mobile
	$(".button-collapse").sideNav();

	//slick setting for mobile in board
	$('.board-section-mobile').slick({
		dots: true,
	});

	//slick configurations
	$(document).ready(function(){
    	$('.your-class').slick({
    		dots: true,
    		infinite: true,
    		slidesToShow: 3,
  			// slidesToScroll: 1,
  			responsive: [
		    	{
			      	breakpoint: 850,
			      	settings: {
			        	slidesToShow: 1
		    		}
		    	},
		    	{
			      	breakpoint: 480,
			      	settings: {
			        	slidesToShow: 1
			      	}
		    	}
		  	]
    	});
    });


});

if(detectmob()) {

}

// masonry script
// init Masonry
var grid = document.querySelector('.grid');

var msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

imagesLoaded( grid ).on( 'progress', function() {
  // layout Masonry after each image loads
  msnry.layout();
});