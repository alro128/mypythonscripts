$(function() {	window.prettyPrint && prettyPrint()		$('.add-class').click(function(e){		e.preventDefault();		var $target = $(e.target);		if($.lastClass) $('.precio').removeClass($.lastClass)		$('.precio').addClass($target.attr('rel'))		$.lastClass = $target.attr('rel')	})})