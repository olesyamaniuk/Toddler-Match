$(function () {
  $(".q-l-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".q-l-gallery-list-left",
    nextArrow: ".q-l-gallery-list-right",
  });
});
