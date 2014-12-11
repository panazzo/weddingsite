		
	'use strict';
	//Check IE11
	function IEVersion() {
 		if (!!navigator.userAgent.match(/Trident\/7\./)) {
   		 	return 11;
		}
	}
		
	// Preloader
	//==================================================================================
	if( !device.tablet() && !device.mobile() ) {
		
		$(document).ready(function () {	
		
			$('#logo, #slide_content').css({
				visibility: 'hidden'
			});
		
    		$("body").queryLoader2({
        		barColor: "#00c0b6",
        		percentage: true,
        		barHeight: 20,
        		completeAnimation: "grow",
				overlayId: "preloader",
				minimumTime: 2500,
				onComplete: function()
				{
					
					// WayPoint
					//====================================================
					$('.animation').css({
						visibility: 'hidden'
					});	
	
					$('.animation').waypoint(function() {
						$(this).css({ visibility: 'visible' });
 						$(this).addClass('animated');
						}, {
							offset: '95%'
					});
					
					// Hide Preloader
					//====================================================
					$("#start_preloader").fadeOut("fast", function(){
                   		$(this).remove();
                	}); 
					
					// Animate Logo and Slide Text
					//====================================================
					$('#logo, #slide_content').css({visibility: 'visible'});
					$("#logo").addClass("animated fadeInDown");
					$("#slide_content").addClass("animated delay1 fadeInRight");
					
				}
    		});
		});	
	}
	else
	{
		
		$('#logo, #slide_content').css({
			visibility: 'hidden'
		});
		
		window.addEventListener("DOMContentLoaded", function() {	
		
    		$("body").queryLoader2({
        		barColor: "#00c0b6",
        		percentage: true,
        		barHeight: 6,
        		completeAnimation: "fade",
				overlayId: "preloader",
				minimumTime: 1000,
				onComplete: function()
				{	
					// Hide Preloader
					//====================================================
					$("#start_preloader").fadeOut("fast", function(){
                   		$(this).remove();
                	}); 
					
					// Animate Logo and Slide Text
					//====================================================
					$('#logo, #slide_content').css({visibility: 'visible'});
					//$("#logo").addClass("animated fadeInDown");
					//$("#slide_content").addClass("animated delay1 fadeInRight");
				}
    		});
		});
	}

	// Supersized Slider
	//==================================================================================
	jQuery(function($){
		$.supersized({
			slides  :  	
			[ 
				{	image : '../images/fotos/DSCN1518.jpg' } ,
				{	image : '../images/fotos/DSCN1877.jpg' } ,
				{	image : '../images/fotos/DSCN6584.jpg' } 
			]
		});
	});
	
	
	jQuery(document).ready(function($){
   		var deviceAgent = navigator.userAgent.toLowerCase();
   		var is_apple_device = deviceAgent.match(/(iphone|ipod|ipad)/);
    	if (is_apple_device) {
			$("#supersized, #supersized li").css("position","absolute");
   	 	}
	});	

	// Sticky
	//==================================================================================
	$(document).ready(function(){
		$("#logo").sticky({ topSpacing: 0 });
		$("#nav").sticky({ topSpacing: 0 });
	});

	// One Page Nav
	//==================================================================================
	$(document).ready(function() {
		$('#nav_list').onePageNav({
    		scrollSpeed: 1200,
    		currentClass: 'active',
    		changeHash: true,
    		filter: ':not(.external)'
		});
	});
	
	// Responsive Nav Hack. Hide Menu After Click It
	//==================================================================================
	$(document).ready(function() {
		var navMain = $(".navbar-collapse");
        navMain.on("click", "a", null, function () {
            if ($(this).attr("href") !== "#") {
                navMain.collapse('hide');
            }
        });
	});
	
	// NiceScroll
	//==================================================================================
	$(document).ready(function() {
		if (IEVersion() != 11) 
		{
			$('html').niceScroll({
    			cursorcolor: "#1A212C",
    			zindex: '99999',
    			cursorminheight: 60,
    			scrollspeed: 80,
    			cursorwidth: 7,
    			autohidemode: true,
    			background: "#aaa",
    			cursorborder: 'none',
    			cursoropacitymax: .7,
    			cursorborderradius: 0,
    			horizrailenabled: false
			});
		}
		
	});
	
	// Photo Divider - Scroll Background Attachment - IE11 
	//==================================================================================
	$(document).ready(function() {
		if (IEVersion() == 11) 
		{
	  		$('.photo_divider').addClass('photo_divider_ie11');
		}
	});
	
	// Photo Item Roll Over 
	//==================================================================================
	$('.photo_item_preview > a').click(function() {
		return false;
	});
	
	// Popup
	//=================================================================================
	$('.popup').magnificPopup({
  		type: 'ajax',
		ajax: {
			settings: {cache:false} 
			// Ajax settings object that will extend default one - http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings
			// For example:
			// settings: {cache:false, async:false}
		},
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened\
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			if (IEVersion() != 11) 
				{
	  				$('body').css('overflow','hidden');
				}
    		}
  		},
	});
	
	// Gallery - Photo Caption Animation
	//==================================================================================
	$('.photo_item').hover(
		function() {
			$(this).find( ".photo_caption" ).addClass('animated');
		},
		function() {
			$(this).find( ".photo_caption" ).removeClass('animated');
		}
	);
	
	// Gallery - Item
	//==================================================================================
	$('#category1').magnificPopup({
    	items: [
      	{
        	src: 'http://placehold.it/600x399'
      	},
     	{
        	src: 'http://placehold.it/399x600',
      	},
      	{
        	src: 'http://placehold.it/600x400',
      	}
    	],
    	gallery: {
     	 	enabled: true
    	},
    	type: 'image', // this is default type
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened\
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			$('body').css('overflow','hidden');
    		}
  		},
	});
	
	$('#category2').magnificPopup({
    	items: [
      	{
        	src: 'http://placehold.it/600x400'
      	},
     	{
        	src: 'http://placehold.it/600x400',
      	},
      	{
        	src: 'http://placehold.it/600x400',
      	}
    	],
    	gallery: {
     	 	enabled: true
    	},
    	type: 'image', // this is default type
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened\
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			$('body').css('overflow','hidden');
    		}
  		},
	});
	
	$('#category3').magnificPopup({
    	items: [
      	{
        	src: 'http://placehold.it/600x400'
      	},
     	{
        	src: 'http://placehold.it/600x400',
      	},
      	{
        	src: 'http://placehold.it/600x438',
      	}
    	],
    	gallery: {
     	 	enabled: true
    	},
    	type: 'image', // this is default type
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened\
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			$('body').css('overflow','hidden');
    		}
  		},
	});
	
	$('#category4').magnificPopup({
    	items: [
      	{
        	src: 'http://placehold.it/600x399'
      	},
     	{
        	src: 'http://placehold.it/600x400',
      	},
      	{
        	src: 'http://placehold.it/600x400',
      	}
    	],
    	gallery: {
     	 	enabled: true
    	},
    	type: 'image', // this is default type
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened\
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			$('body').css('overflow','hidden');
    		}
  		}
	});

	// Gallery - 2
	//==================================================================================
	var $gallery = $('#gallery2');
	// initialize Masonry after all images have loaded  
	$gallery.imagesLoaded( function() {
		$gallery.masonry({
			columnWidth: ".grid_sizer",
			itemSelector: ".masonry_col",
			transitionDuration: "1s",
		});
	});
	
	$('#gallery2').magnificPopup({
 		delegate: '.photo_item_overlay a', // child items selector, by clicking on it popup will open
  		type: 'image',
		gallery: {
          enabled:true
        },
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			$('body').css('overflow','hidden');
    		}
  		},
	});
	
	// Owl Carousel - Gift Registry
	//==================================================================================
	$(document).ready(function() {
    	$("#registry_logo").owlCarousel({
			items : 4, 
			autoPlay: 3500,
			stopOnHover: true,
			pagination: true
		});
    });

    $(document).ready(function() {
    	$("#registry_logo2").owlCarousel({
			items : 4, 
			autoPlay: 3500,
			stopOnHover: true,
			pagination: true
		});
    });

	
	// Blog-2
	//==================================================================================
	var $blog = $('#blog2');
	// initialize Masonry after all images have loaded  
	$blog.imagesLoaded( function() {
		$blog.masonry({
			columnWidth: ".grid_sizer_blog",
			itemSelector: ".masonry_col_blog",
			transitionDuration: "1s",
			gutter: 20
		});
	});
	
	
	$(document).ready(function() {
		var a = 0;
	
		// Get some more blocks
		jQuery('#blogmore').click(function(){
			
			$(this).hide();
			$('#loading_more').show();
			a = a + 1;
			jQuery.get('blog-more.php?page=' + a, function( data ) {
				// Make jQuery object from HTML string
				var $moreBlocks = $($.parseHTML(data)).filter('*');
				
				$moreBlocks.hide();
				// Append new blocks
				jQuery('#blog2').append( $moreBlocks );
				
				$moreBlocks.imagesLoaded().progress( function( imgLoad, image ) {
    				// get item
    				// image is imagesLoaded class, not <img>, <img> is image.img
    				var $item = $( image.img ).parents( ".masonry_col_blog" );
    				// un-hide item
    				$item.show();
    				// masonry does its thing
    				jQuery('#blog2').masonry( 'appended', $item );	
  				});
				
				$moreBlocks.imagesLoaded().done( function() {
					if (data == "empty")
					{
						jQuery('#blogmore').hide();
						$('#loading_more').hide();
					}
					else
					{
						$('#loading_more').hide();
						$('#blogmore').show();
					}
					
					if( !device.tablet() && !device.mobile() ) {
						$.waypoints('refresh');
					}
  				});
						
			}); 	
			return false;				
		});
	});
	
	// Gmap
	//==================================================================================
   	jQuery(document).ready(function($) {
        $("#location_map").gMap({
             maptype: google.maps.MapTypeId.ROADMAP, 
             zoom: 14, 
             markers: 
			 	[
			 		{
                 		latitude: -23.332218, 
                 		longitude: -46.238646, 
                 		html: "<strong>Fazenda</strong>", 
                		popup: true,               
					},
					 {
                 		latitude: -23.317893, 
                  		longitude: -46.223205, 
                  		html: "<strong>Santa Isabel - SP</strong>", 
                  		popup: true,               
                     },
					 {
                 		latitude: -23.335577, 
                  		longitude: -46.222697, 
                  		html: "<strong>Hotel</strong>", 
                  		popup: true,               
                     } 
                ], 
             panControl: true, 
             zoomControl: true, 
             mapTypeControl: true, 
             scaleControl: true, 
             streetViewControl: true, 
             scrollwheel: false, 
             styles: [ { "stylers": [ { "hue": "#00c0b6" }, { "gamma": 1 }, { "saturation": -50 } ] } ], 
             onComplete: function() {
                 // Resize and re-center the map on window resize event
                 var gmap = $("#location_map").data('gmap').gmap;
                 window.onresize = function(){
                     google.maps.event.trigger(gmap, 'resize');
                     $("#location_map").gMap('fixAfterResize');
                 };
            }
        });
    });
	
	
	// Style Switcher
	//==================================================================================
	var clicked = 0;
	$('#theme_options').click(function(){
		if (clicked == 0)
		{
			$( "#style_switcher" ).animate({ "left": "0px" }, "fast" );
			clicked = 2;
			return false;
		}
		else
		{
			$( "#style_switcher" ).animate({ "left": "-110px" }, "fast" );
			clicked = 0;
			return false;
		}
	});

$(document).ready(function() {
    var max_fields      = 5; //maximum input boxes allowed
    var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
    
    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x <= max_fields){ //max input box allowed
            $(wrapper).append(getSnippetSapato(x)); //add input box
            bindChangeSapato(x);
            x++; //text box increment
        }
        else{
        	alert("Adicione no máximo 5 acompanhantes");
        }
    });
    
    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});

$(document).ready(function(){
	bindChangeSapato(0);
});

function getSnippetSapato(x){

	var snippet = '<div class="col-md-12" style="margin:15px 0 0 0"><div id="fullnameXXX" class="form-group"><label for="inputname">*NOME DO ACOMPANHANTE XXX</label><input type="text" class="form-control" id="inputNomeXXX" placeholder=""></div></div><div class="sapato"><div class="col-md-6"><div id="sexoXXX" class="form-group"><label for="inputname">*SEXO</label><select class="form-control" id="selectSapatoXXX" ref="XXX"><option value="0">--Selecione--</option><option value="m">Masculino</option><option value="f">Feminino</option></select></div></div><div class="col-md-6 hidden" id="divNumeroSapatoXXX"><div id="sapatoXXX" class="form-group"><label for="inputname">NÚMERO DO SAPATO</label><input type="text" class="form-control" id="inputSapatoXXX" placeholder=""></div></div>';

	var snippetReplaced = snippet.replace(/XXX/g, x);
	return snippetReplaced;                          
}

function bindChangeSapato(x){
	$("#selectSapato"+x).change(function(e){
		e.preventDefault();
		var selectedValue = $(this).val();
		if(selectedValue == 'f'){
			$('#divNumeroSapato'+x).removeClass("hidden");
		}
		else{
			$('#divNumeroSapato'+x).addClass("hidden");	
		}
	});
}