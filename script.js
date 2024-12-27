const cur = document.querySelector("#cursor");
const curBlur = document.querySelector("#cursor-blur");
const h4All = document.querySelectorAll("#nav h4");

h4All.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    cur.style.transform = "scale(3)";
    cur.style.border = "1px solid #fff";
    cur.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    cur.style.transform = "scale(1)";
    cur.style.border = "0px solid #95c11e";
    cur.style.backgroundColor = "95c11e";
  });
});

document.addEventListener("mousemove", function (e) {
  cur.style.left = e.x + "px";
  cur.style.top = e.y + "px";
  curBlur.style.left = e.x - 250 + "px";
  curBlur.style.top = e.y - 250 + "px";
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
