export const run = () => {
  initSlick();
  // productLeft()
};

const productLeft = () => {
  const stickyProduct = document.querySelector(".product-sticky-view");
  const stickyPointer = document.querySelector(".product-sticky-pointer");

  const observer = new IntersectionObserver(
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        stickyProduct.style = `${stickyProduct.style};position: relative; top: 0px;`;
      } else {
        stickyProduct.style = `${stickyProduct.style};position: fixed;top: 25px;`;
      }
    },
    {
      root: document,
      rootMargin: `0px`,
      threshold: [0],
    }
  );

  observer.observe(stickyPointer);
};

const initSlick = () => {
  $(".product-swiper-wrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: ".product-small-swiper-wrapper",
    prevArrow: $(".swiper-button-prev"),
    nextArrow: $(".swiper-button-next"),
  });

  $(".product-small-swiper-wrapper").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".product-swiper-wrapper",
    centerMode: true,
    focusOnSelect: true,
  });
};
