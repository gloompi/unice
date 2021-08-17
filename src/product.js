export const run = () => {
  initSlick();
  productQuantity();
  // productLeft()
};

const productQuantity = () => {
  const reduceBtn = document.querySelector(".product-detail_qty-reduce");
  const addBtn = document.querySelector(".product-detail_qty-add");
  const qtyInput = document.querySelector(".product-detail_qty-num");

  reduceBtn.addEventListener("click", () => {
    if (!qtyInput.value && qtyInput.value !== 0) {
      qtyInput.value = 1;
    }

    if (qtyInput.value > 1) {
      qtyInput.value--;
    }
  });

  addBtn.addEventListener("click", () => {
    if (!qtyInput.value && qtyInput.value !== 0) {
      qtyInput.value = 1;
    }

    qtyInput.value++;
  });

  qtyInput.addEventListener("change", (e) => {
    if (e.target.value < 1) {
      qtyInput.value = 1;
    }
  });
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
