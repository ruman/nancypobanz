jQuery(function(){
	 		jQuery(window).load(function(){
	 			resizeLayout();
	 		});
	 		jQuery(window).resize(function(){
	 			resizeLayout();
	 		});
	 	});

	 	function resizeLayout(){
	 		if(jQuery("#footerThumbnails").length){
	 			(jQuery("#wrap >.footerbox").length > 0) ? '' : jQuery('#wrap').prepend('<span class="footerbox" />');
	 		}if(jQuery("#footerThumbnails").length){
	 			(jQuery("#wrap >.rightbox").length > 0) ? '' : jQuery('#wrap').prepend('<span class="rightbox" />');
	 		}
	 		(jQuery("#wrap >.before").length > 0) ? '' : jQuery('#wrap').prepend('<span class="before" />');
	 		(jQuery("#wrap >.smborder").length > 0) ? '' : jQuery('#wrap').prepend('<span class="smborder" />');
	 		( jQuery("#wrap >.rightborder").length > 0) ? '' : jQuery('#wrap').prepend('<span class="rightborder" />');
	 		(jQuery("#wrap >.leftbox").length > 0) ? '' : jQuery('#wrap').prepend('<span class="leftbox" />');
	 		var left = jQuery("#mainContent").offset().left; var margin = (jQuery(window).width()/2) - left; jQuery("#wrap>.before").css({left:'-'+margin+'px'});
	 		var smborder = jQuery("#wrap >.before").width() - margin;
	 		jQuery("#wrap >.smborder").css({left:smborder+'px'});
	 		if(jQuery("aside.rightSidebar").length){
	 			var rightsidebar = jQuery("aside.rightSidebar").offset().left - 15;
	 			var height = jQuery("#innerPage").outerHeight() + 3;
	 			jQuery("#wrap >.rightborder").css({left:rightsidebar+'px'});
	 		}else {
	 			jQuery("#wrap >.rightborder").remove();
	 		}
	 		( jQuery('#innerPage .leftSidebar .leftSpacer').length ) ? '' : jQuery('#innerPage .leftSidebar .contact').before('<span class="leftSpacer" />');
	 		var leftboxwidth 	= smborder+'px';
	 		if(jQuery('#innerPage .boxtitle').length){
	 			leftboxwidth = '100%';
	 			if(jQuery('#innerPage .boxtitle').offset().top > 350){
	 				var leftboxtop = jQuery('#innerPage .boxtitle').offset().top - 25;
	 			}else {
	 				var leftboxtop = 350;
	 			}
	 			var leftbarspace = leftboxtop - jQuery('.leftSidebar .leftSpacer').offset().top - 20;
	 			jQuery('.leftSidebar .leftSpacer').css({height:leftbarspace});
	 		}else {
	 			var leftboxtop = jQuery('#innerPage .widget.contact').offset().top;
	 		}
	 		jQuery("#wrap >.leftbox").css({width:leftboxwidth, top:leftboxtop});
	 		if(jQuery(window).width() > 767){
	 			jQuery('.navbar-nancypobanz ul.navbar-nav li.dropdown >a').removeAttr('data-toggle').stop().removeClass('dropdown-toggle').stop().find('.caret').stop().remove();
	 		}else {
	 			jQuery('.navbar-nancypobanz ul.navbar-nav li.dropdown >a').attr('data-toggle', 'dropdown').addClass('dropdown-toggle').append('<b class="caret" />');
	 		}
	 		var footerboxheight = jQuery('footer#footer').height() + 30;
	 		jQuery("#wrap >.footerbox").css({height:footerboxheight});
	 		if(jQuery(window).width() > 767){
	 			var width = jQuery(window).width() - rightsidebar;
	 			jQuery("#wrap >.rightbox").css({left:rightsidebar,width:width});
	 		}
	 	}