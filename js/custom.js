(function() {

	jQuery(function($){


		/* 
		Subscribe Field Focus
		______________________________________
		*/
		$('#subscribe-email').focus(function(){
			$(this).closest('.form-group').addClass('focus');
		})
		$('#subscribe-email').focusout(function(){
			if ($(this).val() === "" ) {
				$(this).closest('.form-group').removeClass('focus');
			}
		})
		
		/* 
		Hover Effects
		______________________________________
		*/
		function hoverEffects(){
			$('.hover-img').mouseenter(function(){
				$(this).addClass('hovered');
			}).mouseleave(function(){
				$(this).removeClass('hovered');
			});
		}
		hoverEffects();
		function zoomEffects(){
			$('.zoom').mouseenter(function(){
				$(this).addClass('zoomed');
			}).mouseleave(function(){
				$(this).removeClass('zoomed');
			});
		}
		zoomEffects();


		/* 
		Owl Carousel 
		Carousel Project
		______________________________________
		*/
		var owl = $('.owl-carousel');
		owl.on('initialized.owl.carousel', function( event ){
		   hoverEffects();
		});

		owl.owlCarousel({
	    loop: true,
	    margin: 0,
	    lazyLoad: true,
	    responsiveClass: true,
	    dots: true,
	    nav: true,
	    center: true,
	    smartSpeed: 500,	
	    callbacks: true,
	    navText: [
	      "<i class='ti-arrow-left owl-direction'></i>",
	      "<i class='ti-arrow-right owl-direction'></i>"
      ],
	    responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 2,
          nav: true,
        },
        1000: {
          items: 3,
          nav: true,
        }
	    }
		});
		owl.on('changed.owl.carousel', function(event) {
			hoverEffects();
		});

		


		/* 
		Owl Carousel 
		Carousel Posts
		______________________________________
		*/
		var owl2 = $('.owl-carousel-posts');
		owl2.on('initialized.owl.carousel', function( event ){
		   hoverEffects();
		});
		owl2.owlCarousel({
		    loop: true,
		    margin: 20,
		    lazyLoad: true,
		    responsiveClass: true,
		    dots: true,
		    nav: true,
		    smartSpeed: 500,
		    navText: [
		      "<i class='ti-arrow-left owl-direction'></i>",
		      "<i class='ti-arrow-right owl-direction'></i>"
	     	],
		    responsive: {
		        0: {
		          items: 1,
		          nav: true
		        },
		        600: {
		          items: 2,
		          nav: true,
		        },
		        1000: {
		          items: 3,
		          nav: true,
		        }
	    	}
		});
		owl2.on('changed.owl.carousel', function(event) {
			hoverEffects();
		});


		/* 
		Owl Carousel 
		Carousel Twitter or Carousel Testimony
		______________________________________
		*/
		var owl3 = $('.owl-carousel-fullwidth');
		owl3.owlCarousel({
		    loop: true,
		    margin: 20,
		    autoplay: true,
		    responsiveClass: true,
		    nav: false,
		    dots: true,
		    autoheight: true,
		    items: 1,
		    smartSpeed: 500,
		    navText: [
		      "<i class='ti-arrow-left owl-direction'></i>",
		      "<i class='ti-arrow-right owl-direction'></i>"
	      	],
	      	responsive: {
		        0: {
		          items: 1,
		          nav: true
		        },
		        600: {
		          items: 1,
		          nav: true,
		        },
		        1000: {
		          items: 1,
		          nav: true,
		        }
	    	}
		    
		});
		
		/* 
		Nav Slide
		______________________________________
		*/		
		$('.js-nav-toggle').click(function(){
			if($(this).hasClass('active')) {
				$(this).removeClass('active');

				$(this).find('i').addClass('ti-menu');
				$(this).find('i').removeClass('ti-close');
			} else {
				$(this).addClass('active');
				$(this).find('i').removeClass('ti-menu');
				$(this).find('i').addClass('ti-close');
			}
			$('#fh5co-nav-slide').slideToggle(400, 'easeInOutExpo');
		});

		/* 
		Smooth Scroll
		Reference:
		http://stackoverflow.com/questions/7717527/jquery-smooth-scrolling-when-clicking-an-anchor-link
		______________________________________
		*/
		var $root = $('html, body');
		$('.smoothscroll').click(function() {
		    var href = $.attr(this, 'href');
		    $root.animate({
		        scrollTop: $(href).offset().top
		    }, 1000, 'easeInOutExpo', function () {
		        window.location.hash = href;
		    });
		    return false;
		});

		/* 
		Nav Slide
		______________________________________
		*/	
		$('.image-popup').magnificPopup({
			type: 'image',
		  gallery:{
		    enabled:true
		  }
		});
		


	});

})();