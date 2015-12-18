$(document).ready(function() {
   
   var CardOne = 0;
   var CardTwo = 0;
   var cardsFlipped = 0;
   var numMatches = 0;
   var flipped = [];
   var numArray = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15];

// First methode to shuffle a set of HTML divs   
$(function () {
    var parent = $("#board");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
});

// Second Method
   // function shuffle(array) {
   //  var currentIndex = array.length, 
   //                     temporaryValue,
   //                     randomIndex;

   //  while (0 !== currentIndex) {
    
   //      randomIndex = Math.floor(Math.random() * currentIndex);
   //      currentIndex = currentIndex - 1;

   //      temporaryValue = array[currentIndex];
   //      array[currentIndex] = array[randomIndex];
   // //      array[randomIndex] = temporaryValue;
   //  } 

   //  return array;
   // }

   
   // shuffle(numArray);
   
   
   for (var i = 0; i < numArray.length; i++) {
    $('#p' + (i+1)).append(numArray[i]);

   };
   
   function matchCards(obj) {
    
      if (CardOne === CardTwo ) {
          
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
          $("#messages").append("Sorry, try again :( ");
          
    setTimeout(function() {
          flipped[0].css("background-color", 'black');
          flipped[1].css("background-color", 'black');
        }, 1500);
    }
    cardsFlipped = 0;
  }
   
   $('.card').click(function(e) {
    // console.log(e.target.id);
    $("#messages").empty();
    $(this).css("background-color", 'black');
    $('.card').rotate(180);


    if (cardsFlipped === 0) {
        CardOne = $(this).text();
        flipped[0] = $(this);
        cardsFlipped = 1;
        $('.card').rotate(180);
       

        
    } else if(e.target.id != flipped[0].id){
        // console.log(e.target.id);
        // console.log(flipped);
        // console.log(e.target.id === flipped[0].attr('id'));
        CardTwo = $(this).text();
        flipped[1] = $(this);
        matchCards(this);
    } 
   });
   
});