//Heartbeat

setInterval(function() {
  $(".heart").animate({
    fontSize: "1rem"
  }, 250);
  $(".heart").animate({
    fontSize: ".9rem"
  }, 250);
}, 2000);

$("a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function() {
      window.location.hash = hash;
    });
  }
});
