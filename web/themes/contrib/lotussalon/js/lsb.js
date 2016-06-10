(function ($) {

	$(document).ready(function(){
		// 'use strict';
		
		//$("#block-lotussalon-mainnavigation").addClass('navbar-fixed-top');
		$(".form-text, .form-textarea, .form-search, select").addClass('form-control');
		$(".form-submit").addClass('btn btn-default');
		$(".cta").addClass('btn btn-secondary');
		$("#block-lotussalon-mainnavigation ul").addClass('nav navbar-nav');
		$("button.link").removeClass('btn-primary').addClass('label label-default');
		$("#fallback-page-menu").css("display","none");
		$(".navbar-nav li").addClass('nav-link');

	});
})(jQuery);



// (function ($) {  

//   Drupal.behaviors.lotussalon = {

//     attach: function (context, settings) {            

//       console.log('02');

//   }};

// })(jQuery);