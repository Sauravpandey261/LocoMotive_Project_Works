function loading() {
  var tl = gsap.timeline();
  tl.to(".yellow1", {
    top: "-100%",
    delay: 0.3,
    duration: 0.5,
    ease: "expo.out",
  });
  tl.from(
    ".yellow2",
    {
      top: "100%",
      delay: 0.1,
      duration: 0.7,
      ease: "expo.out",
    },
    "anim"
  );
  tl.to(
    ".loader h1",
    {
      delay: 0.2,
      duration: 0.7,
      color: "black",
    },
    "anim"
  );
  tl.to(".loader", {
    opacity: 0,
  });
  tl.to(".loader", {
    display: "none",
  });
}
loading();
function loco() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
    lerp:0.04
  });
  var elems = document.querySelectorAll(".elem");
  var page2 = document.querySelector(".page2");
  elems.forEach(function (ele) {
    ele.addEventListener("mouseenter", function () {
      var bgimg = ele.getAttribute("data-img");
      page2.style.backgroundImage = `url(${bgimg})`;
      heading.style.color = "black";
    });
  });
  elems.forEach(function (ele) {
    ele.addEventListener("mouseleave", function () {
      page2.style.backgroundImage = "";
    });
  });
  var backtotop = document.querySelector(".footer h1");
  backtotop.addEventListener("click", () => {
    scroll.scrollTo(0);
  });
}
loco();
