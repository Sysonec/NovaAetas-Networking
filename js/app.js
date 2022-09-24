// Preloader
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".loader-wrap").style.opacity = "0";
  document.querySelector("body").style.overflowY = "hidden";
  document.querySelector(".loader-wrap").style.visibility = "hidden";
  document.querySelector(".loader").style.display = "block";

  setTimeout(loaderOff, 2000);
});

function loaderOff() {
  document.querySelector(".loader-wrap").style.opacity = "1";
  document.querySelector("body").style.overflowY = "scroll";
  document.querySelector(".loader-wrap").style.visibility = "visible";
  document.querySelector(".loader").style.display = "none";
}

// AOS Library customization
AOS.init({
  easing: "ease-in-out",
  once: "true",
});

// Sticky back to top button
$(window).scroll(function () {
  if ($(window).scrollTop() + $(window).height() > $(document).height() - 250) {
    document
      .querySelector("#btn-top")
      .setAttribute("style", "opacity: 1; pointer-events: all;");
  } else {
    document
      .querySelector("#btn-top")
      .setAttribute("style", "opacity: 0; pointer-events: none;");
  }
});

// Navbar elements collapsing on click
$(document).ready(function () {
  $("body").click(function () {
    $(".collapse").collapse("hide");
  });
  $(".collapse-search, .slick-dots-custom, .card-item-image").click(function (
    e
  ) {
    e.stopPropagation();
  });
});

// Smooth Scrolling
$("#main-nav a, .smooth").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {
        window.location.hash = hash;
      }
    );
  }
});

// Get the current year for the copyright
$("#year").text(new Date().getFullYear());

// Slider Config
$("carousel").carousel({
  interval: 5000,
});

// Customizing slick slide dots
$(".slider, .team-slider, .card-item-slider").on(
  "init",
  function (event, slick) {
    var $items = slick.$dots.find("li");
    $items.addClass("slick-dots-custom");
    $items.find("button").remove();
  }
);

$(".card-item-slider").slick({
  infinite: true,
  autoplay: true,
  autoplayspeed: 6000,
  dots: true,
  arrows: false,
});

// Slick slider config
$(".slider").slick({
  infinite: true,
  slideToShow: 1,
  slideToScroll: 1,
  autoplay: true,
  autoplayspeed: 6000,
  dots: true,
  arrows: false,
});

// Team Slider
$(".team-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 4000,
      settings: "unslick",
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
});

// Google Maps
function initMap() {
  // Map options
  var options = {
    zoom: 13,
    center: { lat: 51.50986, lng: -0.118092 },
  };

  // New map
  var map = new google.maps.Map(document.getElementById("map"), options);

  //Add Marker
  var marker = new google.maps.Marker({
    position: { lat: 51.508641, lng: -0.131719 },
    map: map,
  });
}

// Leaflet map
const map = L.map("map").setView([51.50826, -0.46633], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([51.50826, -0.46633]).addTo(map).bindPopup("We are here!").openPopup();
