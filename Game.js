class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.greeting.hide();
    textSize(20);
    text('gameStart',200,200);
    Player.getPlayerInfo();
    if(allPlayers !== null){
      var displayposition=130;
      for(var Plr in allPlayers){
        if(Plr==="player"+player.index)
        fill("red")
        else
        fill('blue');
        displayposition+=20
        text(allPlayers[Plr].name+":"+allPlayers[Plr].distance,120,displayposition)
      }
    }
    if(keyDown(UP_ARROW)&&player.index!==null){
      player.distance+=15;
      player.update();
    }
  
  }
}
