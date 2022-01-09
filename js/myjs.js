

window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
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


const btn = document.querySelector(".form2-btn");
let emailValue = document.getElementById("userMail");
let passwordValue = document.getElementById("passw");
let errorDialogue = document.createElement("p");


btn.addEventListener("click" , (event)=>{
    event.preventDefault();

    if(emailValue.value.trim().length === 0 || passwordValue.value.trim().length === 0 ){
        errorDialogue.innerText = "please fill the form2";
        document.querySelector(".container2").append(errorDialogue);
        return;
    }else if(passwordValue.value.trim().length < 8 ){
        errorDialogue.innerText = "please enter password minimum 8 digit or character";
        document.querySelector(".container2").append(errorDialogue);
        return;
    }else if(!emailValue.value.includes("@")){
        errorDialogue.innerText = "please enter the valid E-mail";
        document.querySelector(".containe2r").append(errorDialogue);
        return;
    }else{
        errorDialogue.innerText = "SUCCESSFULLY FORM SUBMITTED !";
        document.querySelector(".container2").append(errorDialogue);
    }

    console.log(emailValue.value);
    console.log(passwordValue.value);
})





		// INITIALIZING MAGNIFIC POPUP
		jQuery(".magnific-popup-gallery").parent().each(function() {
			magnific_popup_init(jQuery(this))
		});
			
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
		function magnific_popup_init(item) {
			item.magnificPopup({
				delegate: "a[data-gal^='magnific-pop-up']",
				type: "image",
				removalDelay: 500,
				mainClass: "mfp-zoom-in",
				fixedContentPos: false,
				callbacks: {
					beforeOpen: function() {
						// just a hack that adds mfp-anim class to markup 
						this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim");
					}
				},
				gallery: {
					enabled: true
				}
			});
		}


		