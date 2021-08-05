export const run = () => {
  $('.product-swiper-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.product-small-swiper-wrapper',
    prevArrow: $('.swiper-button-prev'),
    nextArrow: $('.swiper-button-next'),
  })

  $('.product-small-swiper-wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.product-swiper-wrapper',
    centerMode: true,
    focusOnSelect: true
  })
}
