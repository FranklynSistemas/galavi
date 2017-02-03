$(function() {
	var h = window.innerHeight;
	var menu = false;
	var $body = $('body');

	var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

	$("#menuFooter").click(function(){
		menu = !menu;
		menu ? $("#menuContent").fadeIn(300) : $("#menuContent").fadeOut(300);
	
	});

	$('#flechaOne').click(function(e){
		e.preventDefault();
		$body.animate({scrollTop:h}, '6000');
	});

	$('#flechaTwo').click(function(e){
		e.preventDefault();
		$body.animate({scrollTop:(h*2)+30}, '6000');
	});

	$('#flechaThree').click(function(e){
		e.preventDefault();
		$body.animate({scrollTop:h*3}, '6000');
	});

	$('#flechaFour').click(function(e){
		e.preventDefault();
		$body.animate({scrollTop:0}, '6000');
	});

	$('#flechaOneAcerca').click(function(e){
		e.preventDefault();
		$body.animate({scrollTop:h+80}, '6000');
	});

	function isTouchDevice(){
		if ("ontouchstart" in document.documentElement)
		{
		  // It's a touch screen device.
		  return true;
		}
		else
		{
		  // Others devices.
		  return false;
		}
	}
	
	function touchScroll(id){
		if(isTouchDevice()){ //if touch events exist...
			var el=document.getElementById(id);
			var scrollStartPos=0;

			document.getElementById(id).addEventListener("touchstart", function(event) {
				scrollStartPos=this.scrollTop+event.touches[0].pageY;
				event.preventDefault();
			},false);

			document.getElementById(id).addEventListener("touchmove", function(event) {
				this.scrollTop=scrollStartPos-event.touches[0].pageY;
				event.preventDefault();
			},false);
		}
	}

	$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}
	//touchScroll("page");
	/*$(document).ready(function() {
		$("#oneAcerca").smoothTouchScroll({ 
			continuousScrolling: true
		});
	});*/

	
})