

window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(this.scrollY <= 10){ nav.className =''; }
	else {nav.className = 'scroll'};
  };

  // number count for stats, using jQuery animate

$('.counting').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 3000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  

});

		// INITIALIZING MAGNIFIC POPUP
		jQuery(".magnific-popup-gallery").parent().each(function() {
			magnific_popup_init(jQuery(this))
		});
		$(document).ready(function(){

		
			
		jQuery(".mfp-youtube").magnificPopup({
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 0,
			preloader: false,
			fixedContentPos: false,
			iframe: {
				patterns: {
					youtube: {
						src: "https://youtube.com/embed/%id%?autoplay=1&rel=0"
					},
				}
			}
		});
		jQuery(".mfp-vimeo").magnificPopup({
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 0,
			preloader: false,
			fixedContentPos: false,
			iframe: {
				patterns: {
					vimeo: {
						src: "https://player.vimeo.com/video/%id%?autoplay=1"
					}
				}
			}
		});
	})
	

		
	
		function projectnam(evt, promane) {
		  var i, tabcontent, detapro;
		  tabcontent = document.getElementsByClassName("suctabcontent");
		  for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		  }
		  detapro = document.getElementsByClassName("detapro");
		  for (i = 0; i < detapro.length; i++) {
			detapro[i].className = detapro[i].className.replace(" active", "");
		  }
		  document.getElementById(promane).style.display = "block";
		  evt.currentTarget.className += " active";
		}
		
		// Get the element with id="defaultOpen" and click on it
		
