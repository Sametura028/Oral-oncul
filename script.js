
$('.slide').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots:true,
  arrows:false,
  responsive: [
    {
      breakpoint: 994,
      settings: {
        dots: false
      }
    }
  ]
});
$('.resslide').slick({
  dots:false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }

  ]
});