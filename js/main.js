$(function() {
  // add item to basket
  $(document).ready(function() {
    var low  = $('.products-cart__basket-low');
    var numb = $('span.products-cart__basket-value');
    var high = $('.products-cart__basket-high');

        high.click(function(event) {
          numb = numb + 1
          alert(numb)
        });

  });
// img dragable
$('img,a').on('dragstart', function(event) {
  event.preventDefault();
});
// aside
$('.content__aside').click(function() {
  $('.content__sidebar').slideToggle(0);
});

// serach
$(document).ready(function() {
  $('.main-header__icon--search').click(function(event) {
    $('.shop-header__search-box').toggleClass('active-search');
    if ( $('.shop-header__search-box').is(':visible') ) { //если popup виден, то
    document.body.style.overflow = "hidden"; //прячем скролл. Нет скролла - нет проблем
    }
    else {
      document.body.style.overflow = "visible";
    }
  });
});
// main toggle menu
$('.main-header__hamburger').click(function() {
   var toggle = 1;
   return function() {
     if (toggle === 1) {
       toggle = 2;
       $('.main-header__item').css('transform', 'translate(0%)');
       $('.main-header__line1').addClass('main-header__line--1')
       $('.main-header__line2').addClass('main-header__line--2')
       $('.main-header__line3').addClass('main-header__line--3')
       document.body.style.overflow = "hidden"; //прячем скролл. Нет скролла - нет проблем
     }
     else if(toggle === 2) {
       toggle = 1;
       $('.main-header__item').css('transform', 'translate(-200%)')
       $('.main-header__line1').removeClass('main-header__line--1')
       $('.main-header__line2').removeClass('main-header__line--2')
       $('.main-header__line3').removeClass('main-header__line--3')
        document.body.style.overflow = "visible"; //прячем скролл. Нет скролла - нет проблем
     }
   }
}());

// basket menu function
$(document).ready(function() {
	$('a.main-header__icon--hamburger').click(function(event) {
		$('.main-header__basket-menu').css('transform', 'translate(0,0)');
	});
	$('.main-header__close-menu').click(function(event) {
		$('.main-header__basket-menu').css('transform', 'translate(100%,0)')
	});
});
$(document).ready(function() {
	$('.main-header__close-btn--1').click(function(event) {
		$('.main-header__products-box--1').toggleClass('off-element');
	});
	$('.main-header__close-btn--2').click(function(event) {
		$('.main-header__products-box--2').toggleClass('off-element');
	});
	$('.main-header__close-btn--3').click(function(event) {
		$('.main-header__products-box--3').toggleClass('off-element');
	});
	$('.main-header__close-btn--4').click(function(event) {
		$('.main-header__products-box--4').toggleClass('off-element');
	});
	$('.main-header__close-btn--5').click(function(event) {
		$('.main-header__products-box--5').toggleClass('off-element');
	});

});
// Плавный скрол вниз
	jQuery(document).ready(function($) {
		$('a.link').click(function(event) {
			var elementClick = $(this).attr('href');
			var dest = $(elementClick).offset().top;
			$('html,body').animate({scrollTop: dest}, 1100);
		});
	});

/* Magnific Popup  doc/GitHub        ->  https://github.com/dimsemenov/Magnific-Popup
website how us it                    ->  http://dimsemenov.com/plugins/magnific-popup/documentation.html
js file generator default all in     ->  http://dimsemenov.com/plugins/magnific-popup//
*/
$('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});

/* Slider Slick  doc/GitHub          ->  https://github.com/kenwheeler/slick/
website how us it                 ->  http://kenwheeler.github.io/slick/
*/
$(document).ready(function(){
	$('.main-header__slider,.bestseller__products-slider,.brands__slider, .featured__tabs-slider, .featured__tabs-slider1, .featured__tabs-slider2, .collection__slider').slick({
		dots: true,
		infinite: true,
		arrows: false,
		speed: 900,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '<i class="fa fa-chevron-right">',
		prevArrow: '<i class="fa fa-chevron-left">',
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
});

///

// Ajax Send Form
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});


// Responsive-Tabs doc/GitHub    ->  http://vdw.github.io/Tabslet/
$('.tabs, .tabs1, .tabs2').tabslet({
  mouseevent: 'click',
  attribute: 'href',
  animation: true
});

// Acardion   page --> http://apps.komposta.net/jquery/navgoco/demo/
$(document).ready(function() {
    $("#demo2").navgoco({accordion: true});
});

// jQuery Mask Plugin  ---> https://igorescobar.github.io/jQuery-Mask-Plugin/
// github              ---> https://github.com/igorescobar/jQuery-Mask-Plugin
$(document).ready(function(){
  $('.date').mask('00/00/0000');
  $('.time').mask('00:00:00');
  $('.date_time').mask('00/00/0000 00:00:00');
  $('.cep').mask('00000-000');
  $('.phone').mask('0000-0000');
  $('.phone_with_ddd').mask('(00) 0000-0000');
  $('.phone_us').mask('(000) 000-0000');
  $('.mixed').mask('AAA 000-S0S');
  $('.cpf').mask('000.000.000-00', {reverse: true});
  $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
  $('.money').mask('000.000.000.000.000,00', {reverse: true});
  $('.money2').mask("#.##0,00", {reverse: true});
  $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
    translation: {
      'Z': {
        pattern: /[0-9]/, optional: true
      }
    }
  });
  $('.ip_address').mask('099.099.099.099');
  $('.percent').mask('##0,00%', {reverse: true});
  $('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
  $('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
  $('.fallback').mask("00r00r0000", {
      translation: {
        'r': {
          pattern: /[\/]/,
          fallback: '/'
        },
        placeholder: "__/__/____"
      }
    });
  $('.selectonfocus').mask("00/00/0000", {selectOnFocus: true});
});


}); // End
