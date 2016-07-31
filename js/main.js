// allow the apear effect for h2 and h3 on the landing page
$("#h2_landing").hide();
$("#h3_landing").hide();
$("#h2_landing").show();
$("#h3_landing").show('slow');

// Set an animation on prestation page

// hide the packages at the beginning
$(".package").hide();

// Allows the packages to display in cascade
  $("#beginner").fadeIn(1500, function(){
    $("#regular").fadeIn(1500, function nextone (){
      $("#gold").fadeIn(1500);
    });
  });

// hover effect when mouse over fa icons
  $("#beginner, #regular, #gold").mouseenter(function() {
      for (var i=1; i<=3; i++) {
      $(this).animate({bottom: 20},"slow");
      $(this).animate({bottom: 0},"slow");
           }
  });

  $("#beginner, #regular, #gold").mouseleave(function() {
    $(this).stop(true);
    $(this).animate({bottom: 0},"slow");
  });
