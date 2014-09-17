$( document ).ready(function() {

	SCROLL_SPEED = 1000;
	function setBoxHeight(){
		
		$(".home, .tutors, .team").css("min-height", $(window).height() + "px");
		$(".home .bg").css("min-height", $(window).height() + "px");
	}
	setBoxHeight();
	
	$(".menu li").click(function(){
	
		$.smoothScroll({
     		scrollTarget: $(this).find('a').attr('href'),
     		speed: SCROLL_SPEED
    	});
	});

	$('a').smoothScroll({
		speed: SCROLL_SPEED
	});


	setTimeout(function(){
		//$(".logo").addClass("shine");
		// setTimeout(function(){
		$(".home .bg").addClass("shine");
		// 	$(".tagline").fadeIn(3000);
		// }, 500);

		
	}, 500);


	var $menu = $(".mobileactionbar");

	var $team = $("#team").offset().top;
	var $workshops = $("#workshops").offset().top;
	var $events = $("#events").offset().top;
	var $home = $("#home").offset().top;
	var $headernav = $(".header-nav");

    $(document).scroll(function() {
        if (300 <= $(document).scrollTop()) {
            $menu.addClass("shine");
            $headernav.addClass("shine");
            $('body').addClass("bg");
        } else {
        	$menu.removeClass("shine");
        	$headernav.removeClass("shine");
        }
    });

    $(document).on('resize', function(){
    	setBoxHeight();

    });

});