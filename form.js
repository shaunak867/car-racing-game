class Form{

constructor(){
    this.input = createInput("name")
    this.button = createButton("play")
    this.greetings = createElement('h2')





}
hide(){
this.input.hide()
this.button.hide()
this.greetings.hide()
}
display(){
var title = createElement('h3')
title.html("Shaunak's car racing game")
title.position(230,150)


this.input.position(250,250)


this.button.position(230,280)


this.button.mousePressed(()=>{
this.input.hide();
this.button.hide();

player.name = this.input.value()
playerCount = playerCount +1
player.index = playerCount
player.update()
player.updateCount(playerCount)
this.greetings.html("Hi"+player.name)
this.greetings.position(250,250)
})
}



}