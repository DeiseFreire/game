// CLASSE GAME.js
// FUNCTION CREATE
// entradas
cursors = game.input.keyboard.createCursorkeys(); // Função create primeira função que é chamada quando começa o estado para a gente fazer a inicialização das coisas que a gente vai usar
// Sintaxe para entrada para o teclado: input.keyboard
// Função input.keyboard.createCursorKeys igual a crie essas teclas de cursor. Que automaticamente vai associar as setas do teclado 
This.game.input.keyboard.addkeyCapture([ Phaser.keyboard.SPACEBAR]); // Avisando para o Phaser que a gente vai querer capturar a tecla de espaço para a gente poder atirar com ela
// FUNCTION UPDATE
// consequência dos comandos
// Entradas lógicas left, light, up e down
// As setas movem o canhão  
// Seta para a esquerda vai mover o canhão para a esquerda
// Seta para a direita vai mover o canhão a direita  
// Seta para cima e para baixo para aumentar e diminuir a força do tiro
// Tecla de espaço para atirar 
if (this.input.keyboard.isDown(Phaser.keyboard.LEFT)){ // Função que a gente usa para saber se a tecla está apertada, função isDown
this.playerOne.body.angularVelocity = -200; // A gente vai fazer o canhão girar para um lado usando a velocidade angular
// velocidade angular é uma velocidade que faz os objetos girarem. A gente está usando isso para não mudar a posição do canhão de uma vez só. A gente dá uma velocidade angular e aí ele vai mudando suavemente
} else if (this.input.keyboard.isDown(Phaser.keyboard.RIGHT)){
this.playerOne.body.angularVelocity = 200;
} else if (this.input.keyboard.isDown(Phaser.keyboard.SPACEBAR)){ 
this.firePlayerOne();
} else if (this.input.keyboard.isDown(Phaser.keyboard.UP)){ // Olhar se as teclas estão apertadas ou não em cada update que a gente chegar. O loop principal está rodando chegou em uma função update que foi chamada a gente olha se a tecla que interessa para a gente está apertada 
if (this.velocitybulletPlayerOne < this.velocityMax-49){
this.velocityBulletPlayerOne += 50;
} 
} else if (this.input.keyboard.isDown(Phaser.keyboard.DOWN)){
if (this.velocityBulletyPlayerOne > this.velocityMin+49){
this.velocityBulletPlayerOne -= 50;
}
}
