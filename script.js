window.onload = function() {
    var navLinks = document.querySelectorAll("nav a");
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", function() {
        var target = document.getElementById(this.getAttribute("href"));
        var scrollY = target.offsetTop;
        window.scrollTo(0, scrollY);
      });
    }
  };
  