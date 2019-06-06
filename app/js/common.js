$( document ).ready(function() {

	// Footer. Fixed menu
	let $menu = $('.header__cont');
	let $menuTop = parseInt( $menu.css('top') );
	
	$(window).scroll(function(){
		if ( $(this).scrollTop()  > $menuTop) {
			$menu.addClass('header__cont--fixed');
		} else {
			$menu.removeClass('header__cont--fixed');
		}
	});

	// About. Initialize About-slider
	$('.about__slider .slider').slick({
		dots: true,
		arrows: false
	});

	// Says. Initialize Says-slider
	$('.says__slider .slider').slick({
		dots: true,
		arrows: true
	});

	// Services. Show info
	$('.services__item-button').on('click', function(){
		$('.services__item-info').slideUp();
		$(this).next().slideDown();
	});
	$('.services__item-info-close').on('click', function(){
		$(this).parent().slideUp();
	});

	// Team. Show name
	$('.team__img').on('click', function(){
		$('.team__item-name').slideUp();
		$(this).next().slideDown();
	});

});