$( document ).ready(function() {

	$(".home .bg").css("height", $(window).height() + 80 + "px");
	$(".home, .tutors").css("height", $(window).height() + "px");

	$(".menu li").click(function(){
	
		$.smoothScroll({
     		scrollTarget: $(this).find('a').attr('href'),
    	});
	});

	$('a').smoothScroll();


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

    $(document).scroll(function() {
        if (300 <= $(document).scrollTop()) {
            $menu.addClass("shine");
            $('body').addClass("bg");
        } else {
        	$menu.removeClass("shine");
        }
    });

});