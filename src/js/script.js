$(document).ready(function(){
	var scrollLink = $('.scroll');
	var duration = 700;
	scrollLink.click(function(e){
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		},duration);
	});
})