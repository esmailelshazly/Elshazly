let other = document.querySelector(".other");
let mega = document.querySelector(".mega-menu");
let skills = document.querySelector(".skills");
let prog = document.querySelectorAll(".prog span");
other.addEventListener("click", function() {
  mega.classList.toggle("show");
});
window.onscroll = function () {
  if (window.scrollY >= skills.offsetTop + 30) {
    prog.forEach(function(spans) {
      spans.style.width = spans.dataset.prog;
    });
  };
};
let dateCount = new Date("Dec 31, 2022 23:59:59").getTime();
let counter = setInterval(function() {
  let dateNow = new Date().getTime();
  let date = dateCount - dateNow;
  let days = Math.floor(date / (1000 * 60 * 60 * 24));
  let hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((date % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days < 10? `0${days}`: days;
  document.querySelector(".hours").innerHTML = hours  < 10? `0${hours}`: hours;
  document.querySelector(".minutes").innerHTML = minutes < 10? `0${minutes}`: minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10? `0${seconds}`: seconds;
  if (date < 0) {
    clearInterval(counter);
  };
}, 1000);
let counterStats = document.querySelector(".stats");
let countersSpans = document.querySelectorAll(".stats span");
let starting = false;
window.onscroll = function() {
  if (window.scrollY >= counterStats.offsetTop - 20) {
    if (!starting) {
      countersSpans.forEach(function startCount(el) {
        let counters = el.dataset.counters;
        let interval = setInterval(function() {
          el.textContent++;
          if (el.textContent == counters) {
            clearInterval(interval)
          };
        }, 2000 / counters);
      });
    };
    starting = true;
  };
}
