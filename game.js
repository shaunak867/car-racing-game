class Game{

constructor(){




}
getState(){
var getStateref = database.ref('gameState')
getStateref.on("value",function data(){
gameState = data.val();
})
}

updateState(state){
database.ref('/').update({
gameState:state
})
}
async start(){
if(gameState === 0){
player = new Player();
var playerCountref = await database.ref('playerCount').once("value")
if(playerCountref.exists()){
playerCount = playerCountref.val()
player.getCount()
}
form = new Form();
form.display();


}



}
play(){
    console.log("gameplay")
form.hide()
Player.getPlayerInfo()
if(allPlayers!== undefined){
var yposition = 150
for(var plr in allPlayers){
if(plr === "player"+player.index){
fill("red");

    }
    else{
fill("black")

    }
yposition = yposition+20
textSize(15)
text(allPlayers[plr].name + ":"+allPlayers[plr].distance,120,yposition)
}

}
if(keyIsDown(UP_ARROW)&&player.index!==null){
player.distance+= 50
player.update()

}


}

}