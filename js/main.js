/*

~~~~~~~Landing page~~~~~~~~~

*/

// allow the apear effect for h2 and h3 on the landing page
$("#h2_landing").hide();
$("#h3_landing").hide();
$("#h2_landing").show();
$("#h3_landing").show('slow');

/*

~~~~~~~Prestation page~~~~~~~~~

*/

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

// Stop the animation when mousse leaves
  $("#beginner, #regular, #gold").mouseleave(function() {
    $(this).stop(true);
    $(this).animate({bottom: 0},"slow");
  });


/*

~~~~~~~ Calendrier page~~~~~~~~~

*/

// Open prompt dialoge box when click on réserver button
var answer = "";
var up = "";

  $("#reserve_button").click(function() {
    answer = prompt("Êtes-vous sûr de vouloir réserver");
    up = answer.toUpperCase();
    if (up == "OUI") {
      alert ("Parfait votre séance est réservée");
    }
    else {
      alert ("D'accord prenez un peu plus de temps pour réfléchir");
    }
  });

  /*

  ~~~~~~~Contact page~~~~~~~~~

  */

  $("#contact_button").click(function(){
    alert ("Votre message a bien été envoyé, je vous répondrai dans les plus brefs délais");
  });
