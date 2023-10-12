var luffyC={
cards:["./images/sabo.png","./images/akaino.png","./images/aoukiji.png","./images/OP05-065.png","./images/usopp.png"],
name:['Shanks','Benn Beckman','Lucky Roux','Limejuice','Bonk Punch','Monster','Building Snake','Hongo','Gab',],
power:[6000,5000,1000,1000,1000,1000,1000,1000,1000 ] 
 }
 function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
var card1=$(".card-1")[0]
var card2=$(".card-2")[0]
var card3=$(".card-3")[0]
var getCards=$(".getcard")
 getCards.on("click",function(){
    card1.src=luffyC.cards[getRandomInt(luffyC.cards.length-1)]
    card2.src=luffyC.cards[getRandomInt(luffyC.cards.length-1)]
    card3.src=luffyC.cards[getRandomInt(luffyC.cards.length-1)]
})
var clickcards=$(".click")
var cardPlacement=$("#mycard")[0]
console.log(cardPlacement);
clickcards.on("click",function(){
  var clicked=$(this)
  cardPlacement.app

})

    