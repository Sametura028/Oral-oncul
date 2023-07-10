
$(':checkbox').change(function () {
  $('body').toggleClass('no-scroll', !this.checked);
}).change();
$('#myvideo').hover(function toggleControls() {
  if (this.hasAttribute("controls")) {
    this.removeAttribute("controls")
  } else {
    this.setAttribute("controls", "controls")
  }
})
$('#myvideo2').hover(function toggleControls() {
  if (this.hasAttribute("controls")) {
    this.removeAttribute("controls")
  } else {
    this.setAttribute("controls", "controls")
  }
})
$('#myvideo3').hover(function toggleControls() {
  if (this.hasAttribute("controls")) {
    this.removeAttribute("controls")
  } else {
    this.setAttribute("controls", "controls")
  }
})
$('#myvideo4').hover(function toggleControls() {
  if (this.hasAttribute("controls")) {
    this.removeAttribute("controls")
  } else {
    this.setAttribute("controls", "controls")
  }
})
$('#myvideo5').hover(function toggleControls() {
  if (this.hasAttribute("controls")) {
    this.removeAttribute("controls")
  } else {
    this.setAttribute("controls", "controls")
  }
})

$('.resslide').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
});
$('.centerslide').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 1,
  variableWidth: true,

  prevArrow: '<i class="fa-solid fa-angle-left"></i>',
  nextArrow: '<i class="fa-solid fa-angle-right"></i>',
  responsive: [{}, {
    breakpoint: 768,
    settings: {
      arrows: false,

    }
  }



  ]
});
$('.autoplay').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  loop: true,
  infinite: true,
  swipe: false,
  cssEase: 'linear',
  // pauseOnHover: true,
  dots: false,
  arrows: false,
  responsive: [{}, {
    breakpoint: 1054,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true
    }
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1

    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1

    }
  }]
});
$('.autoplay').on('mouseenter', function (e) {
  console.log('stop autoplay');
  mySwiper.stopAutoplay();
})
$('.autoplay').on('mouseleave', function (e) {
  console.log('start autoplay');
  mySwiper.startAutoplay();
})

const counters = document.querySelectorAll('.num');
const speed = 1000;



counters.forEach(counter => {
  const animate = () => {
    const value = +counter.getAttribute('data-val');
    const data = +counter.innerText;

    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 1);
    } else {
      counter.innerText = value;
    }

  }

  animate();
});


document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector(
      "body").style.visibility = "hidden";
    document.querySelector(
      "#spinner").style.visibility = "visible";
  } else {
  document.querySelector(
      ".inline").style.display = "none";
    document.querySelector(
      "body").style.visibility = "visible";
  }
};