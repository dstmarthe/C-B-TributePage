window.onscroll = function() {scrollLighten()};

function scrollLighten() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("body").className = "lighter";
  } else {
    document.getElementById("body").className = "";
  }
}