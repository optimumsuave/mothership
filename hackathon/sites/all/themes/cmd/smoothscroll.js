jQuery(document).ready(function($)
   {      
   	$('a[href*=#]').click(function() {
         if($(this).parent().hasClass('scrollable_navigation') || $(this).attr('href').indexOf('javascript')>-1) 			return;
         var duration=1000;

         var easing='swing';

         var newHash=this.hash;
         var oldLocation=window.location.href.replace(window.location.hash, '');
         var newLocation=this;
     
         if(oldLocation+newHash==newLocation)
         {

            var target=$(this.hash+', a[name='+this.hash.slice(1)+']').offset().top;

            
            if(target > $(document).height()-$(window).height()) target=$(document).height()-$(window).height();         

            
            if($.browser.safari) var animationSelector='body:not(:animated)';
            else var animationSelector='html:not(:animated)';

            
            $(animationSelector).animate({ scrollTop: target}, duration, easing, function() {

               
               window.location.href=newLocation;
            });

            
            return false;
         }
      });
   });
