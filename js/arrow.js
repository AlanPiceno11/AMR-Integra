window.onscroll = function () {
  if (document.documentElement.scrollTop < 100) {
    document.querySelector(".float-arrow ").classList.add("remove");
  } else document.querySelector(".float-arrow ").classList.remove("remove");
};
