$(document).ready(function() {
   
   var CardOne = 0;
   var CardTwo = 0;
   var cardsFlipped = 0;
   var numMatches = 0;
   var flipped = [];
   var numArray = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15];
   
   function shuffle(array) {
    var currentIndex = array.length, 
                       temporaryValue,
                       randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    } 

    return array;
   }

   
   shuffle(numArray);
   
   
   for (var i = 0; i < numArray.length; i++) {
    $('#p' + (i+1)).append(numArray[i]);

   };
   
   function matchCards(obj) {
    
      if (CardOne === CardTwo) {
          
          flipped[0].css("background-color", 'green');
          flipped[1].css("background-color", 'green');
           numMatches = numMatches + 1;
          if (numMatches === 15) {
              $("#messages").append("You Won!");
          
          } else {
                $("#messages").append("Match!");
           }
      
      } else {
          flipped[0].css("background-color", 'red');
          flipped[1].css("background-color", 'red');
          $("#messages").append("No match. Try again :( ");
          
    setTimeout(function() {
          flipped[0].css("background-color", 'black');
          flipped[1].css("background-color", 'black');
        }, 1500);
    }
    cardsFlipped = 0;
  }
   
   $('.card').click(function() {
    $("#messages").empty();
    $(this).css("background-color", 'black');

    if (cardsFlipped === 0) {
        CardOne = $(this).text();
        flipped[0] = $(this);
        cardsFlipped = 1;

        
    }
    else {
        CardTwo = $(this).text();
        flipped[1] = $(this);
        matchCards(this);
    }
   });
   
});