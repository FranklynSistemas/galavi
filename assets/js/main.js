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
	
})