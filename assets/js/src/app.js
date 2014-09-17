$( document ).ready(function() {

	$(".home .bg").css("height", $(window).height() + 80 + "px");
	$(".home").css("height", $(window).height() + "px");

	setTimeout(function(){
		//$(".logo").addClass("shine");
		// setTimeout(function(){
		$(".home .bg").addClass("shine");
		// 	$(".tagline").fadeIn(3000);
		// }, 500);

		
	}, 500);


	var $menu = $(".mobileactionbar");

    $(document).scroll(function() {
        if (300 <= $(document).scrollTop()) {
            $menu.addClass("shine");
            $('body').addClass("bg");
        } else {
        	$menu.removeClass("shine");
        }
    });

});