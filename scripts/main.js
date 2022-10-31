window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "40px 10px";
    document.getElementById("logo-2").style.width = "80%";
  } else {
    document.getElementById("navbar").style.padding = "55px 0px";
    document.getElementById("logo-2").style.width = "90%";
  }
}
