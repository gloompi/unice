export const run = () => {
  // Slick configuration
  $('.slick-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    prevArrow: $('.slick-slider-button-prev'),
    nextArrow: $('.slick-slider-button-next'),
  })

  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    appendDots: $('.slick-container'),
    dotsClass: 'swiper-pagination',
    prevArrow: $('.banner-slider-prev'),
    nextArrow: $('.banner-slider-next'),
    customPaging : () => '<span class="swiper-pagination-switch"></span>',
  })
}
