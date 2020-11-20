class Player{

constructor(){
this.name = null
this.index = null
this.distance = 0
}

getCount(){
var getCountref = database.ref('playerCount')
getCountref.on("value",function data(){
    playerCount = data.val();
})

}
update(){
var playerindex = "players/player"+this.index
database.ref(playerindex).set({
    name:this.name,
    distance:this.distance

})
}
static getPlayerInfo(){
var playerinfo = database.ref('players') 
playerinfo.on("value",function data(){
allPlayers = data.val()


})


}
updateCount(Count){
database.ref('/').update({
playerCount:Count
})

}

}
