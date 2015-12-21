$(document).ready(function() {
  for(var i=0;i < 16;i++) {
    $("#board").append('<div id="card' + i + '" class="card"><div class="front clearfix"></div><div class="back"></div> </div>');    
  }
  
  $(".card").flip({trigger: 'manual'});
   
   var CardOne = 0;
   var CardTwo = 0;
   var cardsFlipped = 0;
   var numMatches = 0;
   var flipped = [];
   
   var numArray = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
   
// First methode to shuffle a set of HTML divs   
// $(function () {
//     $("#board .card .back").forEach(function(item) {
//       item.text("test");
//     });

    // var parent = $("#board .card .back");
    // var divs = parent.children();
    // while (divs.length) {
    //     parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);        
    // }
});

// Second Method
   function shuffle(array) {
    var currentIndex = array.length, 
                       temporaryValue,
                       randomIndex;

    while (0 !== currentIndex) {
    
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;

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

    
      if (CardOne === CardTwo ) {
          
          flipped[0].css("background-color", 'green');
          flipped[1].css("background-color", 'green');
           numMatches = numMatches + 1;
          if (numMatches === 8) {
              $("#messages").append("You Won!");
          
          } else {
                $("#messages").append("Match!");
           }        
      } else {
          flipped[0].css("background-color", 'red');
          flipped[1].css("background-color", 'red');
          $("#messages").append("Sorry, try again ");
          
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
    // $(this).css("background-color", 'black');
    console.log("has class", $(this).hasClass('selected'));

    if(!$(this).hasClass('selected')) {      
      $(this).addClass('selected');
    
      if (cardsFlipped === 0) {
          CardOne = $(this).text();
          flipped[0] = $(this);
          cardsFlipped = 1; 
      } else if (e.target.id != flipped[0].id){
          console.log(e.target.id);
          console.log(flipped);
          $('.selected .back').css('position', 'relative !important');
          $('.selected').flip('toggle', function(){
            $('.back').css('position', 'none');
          });
          
          // console.log(e.target.id === flipped[0].attr('id'));
          CardTwo = $(this).text();
          flipped[1] = $(this);
          matchCards(this);
          // $('.card').removeClass('selected');          
      }
    }
  });
     
   });

   // document.getElementById('container2').style.display = 'none';
   // document.getElementById('container3').style.display = 'none';
    // }
});