$( document ).ready(function() {

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