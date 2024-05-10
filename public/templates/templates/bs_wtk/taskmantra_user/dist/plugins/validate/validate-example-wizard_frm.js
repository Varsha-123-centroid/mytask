$(function() {

// Override defaults
// $.fn.stepy.defaults.validate 	= true;
$.fn.stepy.defaults.legend 			= false;
// $.fn.stepy.defaults.transition 	= 'fade';
// $.fn.stepy.defaults.duration 	= 150;

$.fn.stepy.defaults.nextLabel 		= 'Remind Me Later<i class="fa fa-angle-right icon-btn m-l"></i>';

// Initialize wizard default
$('#rs-wizard-form').stepy();

// Initialize wizard with title click
$('#rs-wizard-title-click').stepy({
	titleClick: false
});

// Initialize wizard with validation
$('#rs-wizard-validation').stepy({
	validate: true,
	block: false,
	titleClick: false

   
// if ($('[rs-form-wizard="validation"]').validate(formvalidation)) {
//     alert('wedos');
// }

});



$('.stepy-step').find('.button-next').addClass('btn btn-primary btn-wide');


});
