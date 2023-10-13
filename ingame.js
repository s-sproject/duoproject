var luffyC={
cards:["./images/sabot.png","./images/akaino.png","./images/aoukiji.png","./images/OP05-065.png","./images/usopp.webp",
"./images/zoro.png","./images/nopower.png","./images/shanks.png","./images/gear5.png","./images/doflamingo.png",
"./images/OP05-033.png","./images/low.png","./images/younglaw.png","./images/kid.png","./images/kaido.png"],
power:[7000,7000,5000,8000,4000,4000,0,10000,12000,8000,1000,1000,2000,6000,12000] 
 }
var myhp=5000
var enemyhp=5000
//controll volume
document.getElementById("vol").volume=0.2
//
 function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
var card1=$(".card-1")[0]
var card2=$(".card-2")[0]
var card3=$(".card-3")[0]

var getCards=$(".getcard")
 getCards.on("click",function(){
    card1.src=luffyC.cards[getRandomInt(luffyC.cards.length)]
    card2.src=luffyC.cards[getRandomInt(luffyC.cards.length)]
    card3.src=luffyC.cards[getRandomInt(luffyC.cards.length)]
    $(".card-1").show()
    $(".card-2").show()
    $(".card-3").show()
    $(".top").show()
})

var clickcards=$(".click")
var cardPlacement=$("#mycard")
clickcards.on("click",function(){
    var enemycard=$("#enemycard")[0]
  var clicked=$(this).attr("src")
  cardPlacement.attr("src",clicked)
  enemycard.src=luffyC.cards[getRandomInt(luffyC.cards.length)]
  $(this).hide()
  $(".top:visible").first().hide()
})  

var displaycard=$(".card")[0]
clickcards.hover(function(){
    var clicked=$(this).attr("src")
    displaycard.src=clicked
},
function(){
    displaycard.src="./images/backside.jpg"
})

var placementcards=$(".placementcard")
placementcards.hover(function(){
    var clicked=$(this).attr("src")
    displaycard.src=clicked
},
function(){
    displaycard.src="./images/backside.jpg"
})
var battle=$("#battle")
battle.on("click",function(){
    var mycard=$("#mycard").attr("src")
    var enemycard=$("#enemycard").attr("src")
    var roundres =document.getElementById("roundres")
    if (luffyC.power[luffyC.cards.indexOf(mycard)]>luffyC.power[luffyC.cards.indexOf(enemycard)]){
        $(".ai span").text(enemyhp=enemyhp-1000)
        alertEndGame()
        roundres.innerText="Player one wins the round player two -1000HP"

    }
    if(luffyC.power[luffyC.cards.indexOf(mycard)]<luffyC.power[luffyC.cards.indexOf(enemycard)]){
        $(".me span").text(myhp=myhp-1000)
        alertEndGame()
        roundres.innerText="Player two wins the round player one -1000HP"
    }
    if (luffyC.power[luffyC.cards.indexOf(mycard)]===luffyC.power[luffyC.cards.indexOf(enemycard)]){
        roundres.innerText="Draw !!!"
        alertEndGame()
    }
    setTimeout(function() {
        roundres.innerText = "";
    }, 2000);
})
function alertEndGame(){
    console.log(enemyhp)
    if (enemyhp===0){
        alert("you win !!")
        return
    }
    if(myhp===0){
        alert("you loose!! better luck next time")
        return
    }
}



    