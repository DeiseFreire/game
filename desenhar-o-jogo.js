//CLASSE PRELOADER.js    
//FUNCTION PRELOADER
//carregando imagem do fundo
this.load.image('background','images/backGroundGame800x600.png');
//carregando imagem da nuvem
this.load.image('cloud','images/Cloud.png');
//CLASSE GAME.js
//FUNCTION CREATE
// Adicionando nuvens a camada cloudLayer.this.cloudOne=this.add.sprite(0,0,'cloudOne'); 
// Para desenhar as imagens de fundo a gente vai usar o objeto sprite 
// O sprite é um objeto com várias funcionalidades não só de desenho
// A gente vai usar o sprite para  desenhar todos os objetos 2D 
// Ele atualiza automaticamente a visualização 
// A gente não vai precisar usar a função render 
// O sprite tem o update dele quando chega no laço principal é a hora de fazer o update 
this.clo
udLayer.add(this.cloudOne);
//FUNCTION UPDATE
// A gente chama o Update do sprite para atualizar o estado lógico do objeto associado ao sprite
// Por exemplo, a gente tem um inimigo que enquanto ele não for vencido ele vai ficando mais forte. A gente pode programar isso no Update do sprite 
// Isso pode ter alguma visualização depois, ou pode ser só o estado do jogo 
// O input é como que o sprite responde às entradas 
//movimentando a nuvem
this.cloudOne.x+=this.directionCloud;
if(this.directionCloud>0){
if(this.cloudOne.x-=this.game.width;
} else if(this.cloudOne.x<-163){
this.cloudOne.x += this.game.width;
}
}   
