$(function() {
	var h = window.innerHeight;
	var menu = false;
	var $body = $('body');

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