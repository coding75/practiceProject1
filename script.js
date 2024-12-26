const cur = document.querySelector("#cursor");
const curBlur = document.querySelector("#cursor-blur");
const h4All = document.querySelectorAll("#nav h4");

h4All.forEach(function (ele) {
  ele.addEventListener("mouseenter", function () {
    cur.style.scale = 3;
    cur.style.border = "0.1px solid #fff";
    cur.style.backgroundColor = "transparent";
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
