$(document).ready(function () {
  const width = $(window).width();
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 1000000,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<button class="slice-btn slice-pre" id="slicePre">
      <img src="assets/images/previous-white.svg" alt="prev">
  </button>`,
    nextArrow: ` <button class="slice-btn slice-next" id="sliceNext">
      <img src="assets/images/next-white.svg" alt="next">
  </button>`,
  });

  if (width > 767) {
    slickDots();
  } else {
    slickDots();
    $('.slick-dots').slick('unslick');
  }


  $(window).resize(function () {
  let width = $(window).width();
  if (width > 767) {
      console.log(width);
      $('.slick-dots').slick('unslick');
      slickDots();
    } else {
      $('.slick-dots').slick('unslick');
    }
  });

  $('.slick-dots .dots').click(function () {
    var index = $(this).data('slick-index');
    $('.slider').slick('slickGoTo', index);
  });
})

const slickDots = () => {
  $('.slick-dots').slick({
    slidesToShow: 4,
    prevArrow: `<button class="btn-slice-dots slice-dots-pre">
      <img src="assets/images/previous-white.svg" alt="prev">
    </button>`,
    nextArrow: ` <button class="btn-slice-dots slice-dots-next">
      <img src="assets/images/next-white.svg" alt="next">
    </button>`
  })
}