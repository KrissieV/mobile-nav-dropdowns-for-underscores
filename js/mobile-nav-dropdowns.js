// Mobile Nav Setup
(function( $ ){
   $.fn.MobileNavSetupHS = function() {
      jQuery('.menu > .menu-item-has-children').each(function(){
			jQuery(this).children('.sub-menu').prepend('<li class="toplevel"></li>');
			jQuery(jQuery(this).find('> a')).clone().prependTo(jQuery(this).find('.toplevel'));
			jQuery(jQuery(this).find('.toplevel a')).append(' Homepage');
			jQuery(jQuery(this).find('> a')).wrap('<a class="dropdown-trigger"></a>');
			jQuery('.dropdown-trigger a').contents().unwrap();
			jQuery(jQuery(this).find('> .dropdown-trigger')).click(function(){
				jQuery(this).siblings('.sub-menu').toggleClass('open');
				jQuery(this).parent().toggleClass('active');
			});
		});
      return this;
   }; 
})( jQuery );

jQuery( document ).ready(function() {
	// what to do on initial page load
	if (jQuery(window).width() < 601) {
		var WinWidth = 'Mobile';
		jQuery().MobileNavSetupHS();
	} else if (jQuery(window).width() > 600) {
		var WinWidth = 'Desktop';
	};
	// when window is resized
	var resizeTimer;
	jQuery(window).on('resize', function(e) {
	  clearTimeout(resizeTimer);
	  resizeTimer = setTimeout(function() {
	  	if (WinWidth == 'Mobile') {
		    if (jQuery(window).width() < 601) {
			    // do nothing
			} else if (jQuery(window).width() > 600) {
				location.reload();
			}
		} else if (WinWidth == 'Desktop') {
			if (jQuery(window).width() < 601) {
				WinWidth = 'Mobile';
				jQuery().MobileNavSetupHS();
			} else if (jQuery(window).width() > 600) {
				// do nothing
			}
		}
	            
	  }, 250)
	});
});