!function o(r,n,s){function d(a,e){if(!n[a]){if(!r[a]){var t="function"==typeof require&&require;if(!e&&t)return t(a,!0);if(p)return p(a,!0);throw new Error("Cannot find module '"+a+"'")}var i=n[a]={exports:{}};r[a][0].call(i.exports,function(e){var t=r[a][1][e];return d(t||e)},i,i.exports,o,r,n,s)}return n[a].exports}for(var p="function"==typeof require&&require,e=0;e<s.length;e++)d(s[e]);return d}({1:[function(a,e,t){"use strict";
//global variables
//global variables
!function(){
// remove previous loading status and add new one with spinner
function e(){o.innerHTML="",t("The game is loading"),a()}
// add a text loading status to the dom
function t(e){var t=document.createElement("div");t.id="load-div",t.style.cssText="font-family:sans-serif;font-size: 24px;display:block;width: 100%;text-align: center;color:white;position:absolute;top:50%;left:50%;-webkit-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);transform: translate(-50%, -50%);";var a=document.createElement("p"),i=document.createTextNode(e);a.appendChild(i),t.appendChild(a),o.appendChild(t)}
// add a spinner to the DOM
function a(){var e=document.querySelector("#load-div"),t=document.createElement("div");t.style.cssText="width: 200px;height: 200px;display: inline-block;background-image: url(\"data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='UTF-8'?%3E%3Csvg class='lds-spinner' width='200px' height='200px' style='background:none' preserveAspectRatio='xMidYMid' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(0 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-1.375s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(30 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-1.25s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(60 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-1.125s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(90 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-1s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(120 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-0.875s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(150 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-0.75s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(180 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-0.625s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(210 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-0.5s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(240 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-0.375s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(270 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-0.25s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(300 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-0.125s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(330 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='0s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3C/svg%3E\");",e.appendChild(t)}
// Click event
function i(){document.getElementById("phaser-game").removeEventListener("click",i),e(),
// All set for main code so set readyToStart to true
window.readyToStart=!0}
// Get the correct AudioContext for the browser
// Ready to start is a global variable that the main game code looks for know it is ok to start loading
// This code will set readyToStart to true when it knows the browser will allow audio to load.
window.readyToStart=!1;var o=document.querySelector("#phaser-game"),r=window.AudioContext||window.webkitAudioContext||!1;// not supported
// Check if the AudioContext is preventing auto play of audio
// If it is add a click event to the game and prevent loading until game is clicked
r&&"running"!=(new r).state?(t("Click to load game"),o.addEventListener("click",i)):(e(),window.readyToStart=!0)}(),function(){
// this makes the game wait for the all clear to load audio
// on elt website the all clear code is part of the game code on iPortfolio
// it is split out into a separate file so it can run before the Phaser code loads
function t(){if(1==window.readyToStart&&window.Phaser){var e=new Phaser.Game(1024,704,Phaser.CANVAS,"phaser-game");e.global={},
// Game States
e.state.add("boot",a("./states/boot")),e.state.add("gameover",a("./states/gameover")),e.state.add("menu",a("./states/menu")),e.state.add("play",a("./states/play")),e.state.add("preload",a("./states/preload")),e.state.start("boot")}else setTimeout(function(){t()},50)}t()}()},{"./states/boot":5,"./states/gameover":6,"./states/menu":7,"./states/play":8,"./states/preload":9}],2:[function(e,a,t){
/* ==========================================
 * VisualTimer.js
 * https://github.com/terebentina/VisualTimer
 * ==========================================
 * Copyright 2014 Dan Caragea.
 *
 * Licensed under the MIT license
 * http://opensource.org/licenses/MIT
 * ========================================== */
!function(){"use strict";function e(e){this.type="down",e.type&&(this.type=e.type),this.totalTime=e.seconds,this.game=e.game,this.onComplete=e.onComplete;var t="timer";e.key&&(t=e.key),this.game.add.sprite(e.x,e.y,"pngSheet","timerOuter"),this.sprite=this.game.add.sprite(e.x+112,e.y+13,"pngSheet","timerInner"),this.rect=new Phaser.Rectangle(0,0,0,this.sprite.height),this.fullWidth=this.sprite.width,this.reset()}function t(){
/* jshint validthis:true */
this.game.global.elapsedTime=this.timeGone+this.timer.seconds,this.rect.width=Math.max(0,(this.totalTime-this.game.global.elapsedTime)/this.totalTime*this.fullWidth),this.sprite.crop(this.rect)}e.prototype={reset:function(){
// take of the elapsedTime from the total time
this.timeGone=this.game.global.elapsedTime,this.proportionLeft=(this.totalTime-this.timeGone)/this.totalTime,this.timer&&this.timer.stop();var e=this;this.hasFinished=!1,this.timer=this.game.time.create(!0),
// evert 100/1000 of a second call timerTick for ((this.totalTime-this.timeGone)*10) manytimes
this.timer.repeat(100,10*(this.totalTime-this.timeGone),t,this),this.timer.onComplete.add(function(){e.hasFinished=!0,e.onComplete&&e.onComplete()}),t.call(this)},setTime:function(e){this.totalTime=e,this.reset()},start:function(){this.reset(),this.timer.start()},stop:function(){this.timer.stop()},pause:function(){this.timer.pause()},resume:function(){this.timer.resume()}},a&&(a.exports=e)}()},{}],3:[function(e,t,a){"use strict";var i=function(i,e,o,t){function a(){n.start(),i.playAudio(i.btnClick),n.onComplete.addOnce(function(){1===e?(e=2,i.popUpGroup.y=704,s.start(),d.loadTexture("jpgSheet","selectChar"),r()):(i.tintOverlay.fadeOut.start(),
// trigger start of game
void 0!==t&&t())},i)}
// playerSelect = new CreateOverlay2(state.game, 'black', 0, closePrompt);
function r(){
// add buttons
var e=i.add.sprite(o.playerSelect[0].x,o.playerSelect[0].y,"pngSheet","empty");e.anchor.setTo(.5,.5),e.width=o.playerSelect[0].width,e.height=o.playerSelect[0].height,e.inputEnabled=!0,e.events.onInputDown.add(function(){this.changePlayer(0)},i),i.popUpGroup.add(e);
// add buttons
var t=i.add.sprite(o.playerSelect[1].x,o.playerSelect[1].y,"pngSheet","empty");t.anchor.setTo(.5,.5),t.width=o.playerSelect[1].width,t.height=o.playerSelect[1].height,t.inputEnabled=!0,t.events.onInputDown.add(function(){i.changePlayer(1)},i),i.popUpGroup.add(t);var a=i.add.image(o.playerSelect[0].x+80,o.playerSelect[0].y+100,"pngSheet","tick");i.popUpGroup.add(a)}i.tintOverlay=i.add.graphics(0,0),i.tintOverlay.beginFill("black"),i.tintOverlay.drawRect(0,0,1024,704),i.tintOverlay.alpha=.5,i.tintOverlay.fadeOut=i.add.tween(i.tintOverlay).to({alpha:0},400),
// player select overlay ----------------------------------------------------------
i.popUpGroup=i.add.group(),i.popUpGroup.y=i.game.height;var n=i.add.tween(i.popUpGroup).to({y:-704},400),s=i.add.tween(i.popUpGroup).to({y:0},400),d=i.add.sprite(i.game.width/2,i.game.height/2,"pngSheet","howToPlay");d.anchor.setTo(.5,.5),i.popUpGroup.add(d);var p=i.add.button(512,626,"pngSheet",function(){a()},i,"pb2","pb1","pb3","pb1",i.popUpGroup);p.anchor.setTo(.5,.5),p.input.useHandCursor=!0,i.popUpGroup.y=0};t.exports=i},{}],4:[function(e,t,a){"use strict";var i=function(e,t,a,i,o,r){Phaser.Sprite.call(this,e,t,a,i,o),this.anchor.setTo(.5,.5),this.label=new Phaser.Text(e,0,0,r),this.label.font="Arial",this.label.fontSize="16px",this.label.fontWeight="normal",this.label.stroke="#000000",this.label.strokeThickness=4,this.label.fill="#43d637",
//puts the label in the center of the button
this.label.anchor.setTo(.5,.5),this.addChild(this.label),this.setLabel(r),this.tween1=e.add.tween(this),this.tween1.to({alpha:0},1e3),this.tween2=e.add.tween(this.scale),this.tween2.to({x:2,y:2},1e3,"Linear"),this.alpha=0,
//adds button to game
e.add.existing(this)};i.prototype=Object.create(Phaser.Sprite.prototype),(i.prototype.constructor=i).prototype.setLabel=function(e){this.label.setText(e)},t.exports=i},{}],5:[function(e,t,a){"use strict";
// define variables that will be assigned in init
// they are available to all functions in this state but not outside it
//var json;
function i(){}var o,r;i.prototype={init:function(){
// reference to this state
// global object to pass items between states
r=(o=this).game.global,o.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,o.scale.pageAlignHorizontally=!0,o.scale.pageAlignVertically=!0,
// set minimum and maximum game sizes
o.scale.setMinMax(512,352,1024,704),r.playSound=!0},preload:function(){o.load.image("preloader","/elt/students/templatecontent/preloader.gif"),
// All our game data and settings
o.load.json("gameData",dataPath)},create:function(){o.game.input.maxPointers=2,o.game.state.start("preload")}},t.exports=i},{}],6:[function(e,t,a){"use strict";function i(){}var n,s,d;i.prototype={init:function(){
// global
s=(n=this).game.global,
// link to data
d=n.cache.getJSON("gameData")},preload:function(){n.btnClick=n.add.audio("btn-click"),
// load audio depending on how well they have done
0===s.gameover?n.scoreAudio=n.add.audio("nice-try"):1===s.gameover&&(n.scoreAudio=n.add.audio("good-job")),
// two character games will store scores separately if only one use first location  
void 0===s.playerID&&(s.playerID=0),
// Does topScores exist?
void 0===s.topScores&&(
// try and get them from local storage and convert back from a string to a proper object
s.topScores=JSON.parse(localStorage.getItem(d.localStorageTag)),
// check again if no joy, set all to 0 (last item is highest of all scores)
null===s.topScores&&(s.topScores=[0,0,0])),void 0===s.score&&(s.score=0),void 0===s.screens&&(s.screens=0);var e=!1;
// if this score is highest for this character update topScores
s.score>s.topScores[s.playerID]&&(s.topScores[s.playerID]=s.score,e=!0,
// if it is higher than the best score update that as well (the last number)
s.score>s.topScores[s.topScores.length-1]&&(s.topScores[s.topScores.length-1]=s.score)),
// if any top scores were updated then convert to a string and save to local storage
e&&localStorage.setItem(d.localStorageTag,JSON.stringify(s.topScores))},create:function(){n.add.sprite(0,0,"jpgSheet","menuBG");var e=n.add.group(),t=n.add.sprite(0,0,"pngSheet","finalScorePlain",e);0===s.gameover?n.add.sprite(0,0,"pngSheet","finalscoreGO",e):1===s.gameover&&n.add.sprite(0,0,"pngSheet","finalscoreGJ",e);var a={font:"14px Arial",fill:"black",align:"left"},i=n.game.add.text(245,195,""+s.score,a);
// This score
e.add(i);var o=n.game.add.text(276,286,""+s.screens,a),r;e.add(o),
// Previous best
void 0!==s.topScores&&(n.previousText=n.game.add.text(286,374,""+s.topScores[s.topScores.length-1],a),e.add(n.previousText)),e.x=n.game.width/2-t.width/2,e.y=n.game.height/2-t.height/2-60,n.add.button(d.playAgain.x,d.playAgain.y,"pngSheet",function(){n.scoreAudio.stop(),
// restart music
s.playSound&&s.music.resume(),n.replay()},n,"pab2","pab1","pab3","pab2").anchor.set(.5,.5),s.playSound&&(s.music.pause(),n.scoreAudio.play())},update:function(){},replay:function(){n.playAudio(n.btnClick),s.elapsedTime=null,s.score=0,s.screens=0,s.lives=void 0,n.game.state.start("menu")},
// optional audio 
playAudio:function(e){s.playSound&&e.play()}},t.exports=i},{}],7:[function(e,t,a){"use strict";
// define variables that will be assigned in init
// they are available to all functions in this state but not outside it
function i(){}var n,s,d,p={};i.prototype={init:function(){
// reference to this state
// global object to pass items between states
s=(n=this).game.global,
// reference to the loaded json file
d=n.cache.getJSON("gameData")},preload:function(){
//        state.bgMusic = state.add.audio('bgMusic');
n.btnClick=n.add.audio("btn-click")},create:function(){
//if background music doesn't exist create it and start playing 
s.music?!0===s.playSound&&s.music.play():(s.music=n.add.audio("bg-music",.2,!0),s.music.play()),
// bug fix for audio nolonger looping once it has been paused
s.music.onLoop.add(function(){s.music.play()}),
// Add background
n.add.sprite(0,0,"jpgSheet","menuBG");
// Game logo
var e=n.add.image(n.game.width/2,n.game.height/2-70,"pngSheet","gameLogo");e.anchor.setTo(.5,.5),n.add.tween(e).from({y:-200},2e3,"Bounce",!0),
// UI GROUP (make it easier to bring to top)    
p.uiGroup=n.add.group();
// Close button
var t=n.add.button(d.closeBtn.x,d.closeBtn.y,"pngSheet",n.exitGame,n,"cb2","cb1","cb3","cb2");t.anchor.set(.5,.5),t.height=50,t.width=50,t.input.useHandCursor=!0,p.uiGroup.add(t);
// Copyright text
var a=n.add.text(d.copyright.x,d.copyright.y,d.copyright.text,{font:"14px Arial",fill:"white"});a.anchor.setTo(.5,.5),a.alpha=.7,p.uiGroup.add(a);
//Play button
//        var playBtn = state.add.button(json.playBtn.x, json.playBtn.y, 'pngSheet', state.startGame, state, 'pb2', 'pb1', 'pb3', 'pb2');
//        playBtn.anchor.set(0.5, 0.5);
//        playBtn.input.useHandCursor = true;
//        ui.uiGroup.add(playBtn);
// Difficulty 1 button
var i=n.add.button(d.diff1Btn.x,d.diff1Btn.y,"pngSheet",n.startGame,n,"db12","db11","db13","db12");i.anchor.set(.5,.5),i.id=0,i.input.useHandCursor=!0,p.uiGroup.add(i);
// Difficulty 2 button
var o=n.add.button(d.diff2Btn.x,d.diff2Btn.y,"pngSheet",n.startGame,n,"db22","db21","db23","db22");o.anchor.set(.5,.5),o.id=1,o.input.useHandCursor=!0,p.uiGroup.add(o);
// Difficulty 3 button
var r=n.add.button(d.diff3Btn.x,d.diff3Btn.y,"pngSheet",n.startGame,n,"db32","db31","db33","db32");r.anchor.set(.5,.5),r.id=2,r.input.useHandCursor=!0,p.uiGroup.add(r)},update:function(){},
// MY FUNCTIONS ========================================================
startGame:function(e){n.playAudio(n.btnClick),
// store the button id so we know the selected difficulty
e&&(s.difficulty=e.id),
// start game
n.game.state.start("play")},exitGame:function(){n.playAudio(n.btnClick),window.location.href=d.closeBtn.url},
// play myAudio 
playAudio:function(e){s.playSound&&e.play()}},t.exports=i},{}],8:[function(e,t,a){"use strict";
// PREFABS
function i(){}var E=e("../prefabs/VisualTimer"),T=e("../prefabs/scorePop"),k=e("../prefabs/popUp"),N,B,O,U={},G,A,o=0,r,D,L={},j,s,I=!0;i.prototype={
/**
     * [[Description]]
     */
init:function(){
// reference to this state
// global object to pass items between states
B=(N=this).game.global,
// reference to the loaded json file
O=N.cache.getJSON("gameData"),G=O.difficulties[B.difficulty],B.screens=void 0===B.screens?0:B.screens,A=O.difficulties[B.difficulty].prefs[B.screens],B.score=void 0===B.score?0:B.score,B.lives=void 0===B.lives?G.lives:B.lives,B.elapsedTime=void 0===B.elapsedTime?0:B.elapsedTime,B.soundOn=!0,r=0,N.map=null,N.layer=null,N.car=null,N.safetile=16,N.gridsize=32,N.speed=A.speed,N.threshold=20,N.turnSpeed=150,N.marker=new Phaser.Point,N.turnPoint=new Phaser.Point,N.directions=[null,null,null,null,null],N.opposites=[Phaser.NONE,Phaser.RIGHT,Phaser.LEFT,Phaser.DOWN,Phaser.UP],N.current=Phaser.NONE,N.turning=Phaser.NONE,N.physics.startSystem(Phaser.Physics.ARCADE),N.previousPrompts=[],N.scoreMultiplier=1,s=!1,D=0},preload:function(){N.btnClick=N.add.audio("btn-click"),N.correct=N.add.audio("correct"),N.incorrect=N.add.audio("incorrect"),N.lvlUp=N.add.audio("lvl-up"),N.timeUp=N.add.audio("time-up"),N.bonus=N.add.audio("bonus")},create:function(){function e(){N.cursors.left.isDown||N.cursors.right.isDown||N.cursors.up.isDown||N.cursors.down.isDown||!0===L.down?I=!1:(I=!0,N.current=Phaser.NONE,N.mouse.body.velocity.y=0,N.mouse.body.velocity.x=0)}
// bug fix for audio nolonger looping once it has been paused
B.music.onLoop.add(function(){B.music.play()}),N.map=N.add.tilemap(A.mapName),N.map.addTilesetImage("mapTiles","mapTiles"),N.layer=N.map.createLayer("maze"),
// make a layer for the prompt and answer backgrounds to go in so they are under the answers and prompts
N.backingGroup=N.add.group(),j=N.findObjectsByName("answer",N.map,"ansLocals"),N.answers=N.add.physicsGroup();for(var t=0;t<j.length;t++){var a=N.add.sprite(j[t].x+16,j[t].y-16,"pngSheet","answer",N.backingGroup);a.anchor.set(.5),a.ID=t,a.alpha=0,
//tiled stores location based on bottom right corner so need to adjust x and y to get center
N.answer=N.add.sprite(j[t].x+16,j[t].y-16,"jpgSheet","answerEmpty"),N.answer.anchor.set(.5),
//            state.answer.width = 76;
//            state.answer.height = 76;
N.answer.ID=t;var i=N.add.text(0,0,"",{font:"14px Arial",fill:"black",align:"center",wordWrap:!0,wordWrapWidth:70});i.anchor.set(.5),N.answer.addChild(i),N.answer.kill(),N.answers.add(N.answer)}var o=N.findObjectsByName("cheese",N.map,"bonuses"),r=N.findObjectsByName("lemon",N.map,"bonuses"),n=N.findObjectsByName("strawberry",N.map,"bonuses"),s=N.findObjectsByName("x2Green",N.map,"bonuses"),d=N.findObjectsByName("x2Pink",N.map,"bonuses");N.bonuses=N.add.physicsGroup();
// convert bonus locations into sprites
for(var p=0;p<o.length;p++){
//tiled stores location based on bottom right corner so need to adjust x and y to get center
var l=N.add.sprite(o[p].x+16,o[p].y-16,"pngSheet","cheese");l.anchor.set(.5),l.value=1e3,N.bonuses.add(l)}// convert bonus locations into sprites
for(var u=0;u<r.length;u++){
//tiled stores location based on bottom right corner so need to adjust x and y to get center
var c=N.add.sprite(r[u].x+16,r[u].y-16,"pngSheet","lemon");c.anchor.set(.5),c.value=800,N.bonuses.add(c)}// convert bonus locations into sprites
for(var h=0;h<n.length;h++){
//tiled stores location based on bottom right corner so need to adjust x and y to get center
var m=N.add.sprite(n[h].x+16,n[h].y-16,"pngSheet","strawberry");m.anchor.set(.5),m.value=500,N.bonuses.add(m)}for(var g=0;g<s.length;g++){
//tiled stores location based on bottom right corner so need to adjust x and y to get center
var f=N.add.sprite(s[g].x+16,s[g].y-16,"pngSheet","x2Green");f.anchor.set(.5),f.value="double",N.bonuses.add(f)}for(var y=0;y<d.length;y++){
//tiled stores location based on bottom right corner so need to adjust x and y to get center
var v=N.add.sprite(d[y].x+16,d[y].y-16,"pngSheet","x2Pink");v.anchor.set(.5),v.value="double",N.bonuses.add(v)}
//  Pacman should collide with everything except the safe tile
N.map.setCollisionByExclusion([N.safetile],!0,N.layer);
//  locate all pacman stating positions from map
var b=N.findObjectsByName("mouse",N.map,"ansLocals");
// add pacman to first one
N.mouse=N.add.sprite(b[0].x+16,b[0].y-16,"pngSheet","mouse/1"),N.mouse.anchor.set(.5),N.mouse.animations.add("munch",["mouse/1","mouse/2","mouse/3","mouse/2"],10,!0),
// enable physics on pacman so we can detect when he hits items
N.physics.arcade.enable(N.mouse),N.mouse.body.setSize(32,32,0,0),
// bind to cursor keys
N.cursors=N.input.keyboard.createCursorKeys(),
// start pacman animation
N.mouse.play("munch");
// create the image prompt 
var x=N.findObjectsByName("prompt",N.map,"ansLocals");N.promptBacking=N.add.sprite(x[0].x+16,x[0].y-16,"pngSheet","prompt"),N.promptBacking.anchor.set(.5),
//        state.prompt = state.add.sprite(promptLocal[0].x-16, promptLocal[0].y-16, 'jpgSheet', 'promptSprite_plain');
N.prompt=N.add.sprite(x[0].x+16,x[0].y-16,"jpgSheet","promptEmpty"),N.prompt.anchor.set(.5),
// create the text prompt
N.textPrompt=N.add.text(0,0,"",{font:"20px Arial",fill:"black",align:"center",wordWrap:!0,wordWrapWidth:140}),N.textPrompt.anchor.setTo(.5),N.prompt.addChild(N.textPrompt),
// TIMER
// ---------------------------------------------------------------------
// Check timer is not already running, if not prime elapsedTime
void 0===B.elapsedTime&&(B.elapsedTime=0),
// Create a new timerBar with the prefab
B.timerBar=new E({game:this.game,x:500,y:14,seconds:G.gameDuration,onComplete:N.timeIsUp}),B.timerBar.start(),B.timerBar.pause(),
//        var belowUi = this.add.group();
// UI
// ---------------------------------------------------------------------
U.uiGroup=this.add.group(),
// Close button
U.closeBtn=N.add.button(O.closeBtn.x,O.closeBtn.y,"pngSheet",function(){B.timerBar.pause(),B.elapsedTime=void 0,B.score=0,B.screens=void 0,B.lives=void 0,N.game.state.start("menu")},N,"cb2","cb1","cb3","cb2"),U.closeBtn.anchor.set(.5,.5),U.closeBtn.height=50,U.closeBtn.width=50;
// SCORE
var w=N.add.image(32,12,"pngSheet","score");U.uiGroup.add(w),B.score=void 0===B.score?0:B.score,U.score=N.add.text(O.score.x,O.score.y,""+B.score,O.score.style,U.uiGroup),U.score.anchor.setTo(0,.5);//left align
// LIVES
var P=N.add.image(224,12,"pngSheet","lives");U.uiGroup.add(P),
// lives
U.livesGroup=N.add.group();
// individual sprites for each life
for(var C=B.lives;0<C;C--){var S;U.livesGroup.create(O.lives.x-15+28*C,O.lives.y-5,"pngSheet","life").anchor.setTo(.5,.5)}
// Audio button
U.audioBtn=N.add.button(O.audioBtn.x,O.audioBtn.y,"pngSheet",N.audioToggle,N,"audioBtn_2","audioBtn_1","audioBtn_3","audioBtn_1",U.uiGroup),U.audioBtn.anchor.setTo(.5,.5),U.uiGroup.add(U.audioBtn),
// adjust audio buttons if music is muted
B.music.paused&&U.audioBtn.setFrames("audioBtn_5","audioBtn_4","audioBtn_6","audioBtn_5"),N.scorePopUp=new T(this.game,100,100,"pngSheet","empty","100"),N.diePopUp=new T(this.game,100,100,"pngSheet","lifelost",""),
// create level up graphic and its tweens 
U.levelUp=N.add.image(N.game.width/2,N.game.height,"pngSheet","levelUp"),U.levelUp.anchor.setTo(.5,0),U.uiGroup.add(U.levelUp),U.levelUpInTween=N.add.tween(U.levelUp).to({y:N.game.height/2-100},500),U.levelUpOutTween=N.add.tween(U.levelUp).to({y:N.game.height},300),
// Touch and mouse controls
// ---------------------------------------------------------------------
// start tracking pointer once it is down 
L.down=!1,N.input.onDown.add(function(e){
// show indicator
L.down=!0,L.x=void 0,L.y=void 0},N),
// reset everything when pointer is lifted
N.input.onUp.add(function(){L.down=!1,e(),N.current=Phaser.NONE,
//             ui.right=undefined; ui.left=undefined; ui.down=undefined; ui.up=undefined;
U.right=Phaser.NONE,U.left=Phaser.NONE,U.down=Phaser.NONE,U.up=Phaser.NONE},N),
// if first screen show instructions
0===B.screens?
// trigger instruction pop up and add game start to call back
k(N,2,O,function(){N.random(D)}):N.random(D),N.input.keyboard.onDownCallback=e,N.input.keyboard.onUpCallback=e},indexArray:function(e){for(var t=[],a=0;a<e;a++)t.push(a);return N.shuffle(t),t},random:function(e){
// copy pool from json and shuffle it
var t=G.pool.slice();t=N.shuffle(t);for(
// keep increasing poolIndex until we find an unused prompt
var a=0;0<N.previousPrompts.indexOf(G.pool[0].id);)t=N.shuffle(t);
// store this ID so we dont reuse it
N.previousPrompts.push(G.pool[0].id),
// load the new prompt image or text      
G.prompt.text?N.textPrompt.text=t[0].text:G.prompt.img&&N.prompt.loadTexture("images",t[0].img),!1===G.prompt.img&&!1===G.prompt.text&&(N.prompt.kill(),N.promptBacking.alpha=0),
// load audio if present
G.prompt.audio?(N.audioPrompt=N.add.audio(t[0].audio),N.audioPrompt.play(),N.timeCheck=N.time.now,N.audioRepeat=1):N.audioPrompt=void 0;for(
// take enough for prompts and randomise
var i=N.shuffle(t.slice(0,j.length-1)),o=0,r=0
// for each of the answer locations which pacman does not already occupy 
// load an answer image or text
;r<j.length;r++){N.backingGroup.getAt(r).alpha=1;var n=N.answers.getAt(r);r!==e?("img"===t[0].answerType?n.loadTexture("images",i[o].img):
// add text if required
//                   thisAns.loadTexture('jpgSheet', 'answerSprite_plain');
n.children[0].text=i[o].text,
// record if it is correct or not
n.correct=i[o].id===t[0].id,
// give it its new position
n.reset(n.x,n.y),o++):N.backingGroup.getAt(r).alpha=0}
// activate all the bonus sprites sothey can be eaten again
N.bonuses.callAll("revive"),
// turn on the timer
N.game.time.events.add(1e3,function(){B.timerBar.resume(),
// activate all disabled things
s=!0},this)},
// check what cursor and touch inputs are doing
checkKeys:function(){(N.cursors.left.isDown||U.left)&&N.current!==Phaser.LEFT?N.checkDirection(Phaser.LEFT):(N.cursors.right.isDown||U.right)&&N.current!==Phaser.RIGHT?N.checkDirection(Phaser.RIGHT):(N.cursors.up.isDown||U.up)&&N.current!==Phaser.UP?N.checkDirection(Phaser.UP):(N.cursors.down.isDown||U.down)&&N.current!==Phaser.DOWN?N.checkDirection(Phaser.DOWN):
//  state forces them to hold the key down to turn the corner
N.turning=Phaser.NONE},
// 
checkDirection:function(e){N.turning!==e&&null!==N.directions[e]&&N.directions[e].index===N.safetile&&(
//  Check if they want to turn around and can
N.current===N.opposites[e]?N.move(e):(N.turning=e,N.turnPoint.x=N.marker.x*N.gridsize+N.gridsize/2,N.turnPoint.y=N.marker.y*N.gridsize+N.gridsize/2))},
// check if turning is possible
turn:function(){var e=Math.floor(N.mouse.x),t=Math.floor(N.mouse.y);
//  state needs a threshold, because at high speeds you can't turn because the coordinates skip past
return!(!N.math.fuzzyEqual(e,N.turnPoint.x,N.threshold)||!N.math.fuzzyEqual(t,N.turnPoint.y,N.threshold))&&(
//  Grid align before turning
N.mouse.x=N.turnPoint.x,N.mouse.y=N.turnPoint.y,N.mouse.body.reset(N.turnPoint.x,N.turnPoint.y),N.move(N.turning),N.turning=Phaser.NONE,!0)},move:function(e){var t=N.speed;e!==Phaser.LEFT&&e!==Phaser.UP||(t=-t),e===Phaser.LEFT||e===Phaser.RIGHT?N.mouse.body.velocity.x=t:N.mouse.body.velocity.y=t,
//  Reset the scale and angle (Pacman is facing to the right in the sprite sheet)
N.mouse.scale.x=1,N.mouse.angle=0,e===Phaser.LEFT?N.mouse.scale.x=-1:e===Phaser.UP||Phaser.DOWN,N.current=e},
// pacman has hit answer
eatAnswer:function(e,t){if(t.correct)
//            gameOn = false;
N.audioPrompt=void 0,N.playAudio(N.correct),
// update score
B.score+=2e3*N.scoreMultiplier,U.score.text=B.score,N.scorePopUpStart(t,""+2e3*N.scoreMultiplier),
// reset scoreMultiplier back to 0;
N.scoreMultiplier=1,
// stop time until we are ready to play again
B.timerBar.pause(),
// increase number of found items then check if we have found enough
++r===A.correctAnswers?(
// increase number of finished screens
B.screens++,
// stop pacman moving so he doesn't run into something when game starts again
N.stopMovment(),
// check to see if we level up or finish game
3===B.screens?(
// load gameover state and use good job graphic
B.gameover=1,N.game.time.events.add(2e3,function(){N.game.state.start("gameover")},this)):
// activate level up tween
N.game.time.events.add(1e3,function(){N.playAudio(N.lvlUp),U.levelUpInTween.start(),N.game.time.events.add(2e3,function(){U.levelUpOutTween.start(),
// reload play again so we can access a new map
this.game.state.start("play")},this)},this)):(
// record answer location pacman is at and shuffle answer locations
D=t.ID,N.stopMovment(),N.game.time.events.add(2e3,function(){N.random(D)},this));else{
//incorrect answer
N.playAudio(N.incorrect),
//lose a life
N.diePopUpStart(t),B.lives--;
// get first life sprite that is left kill it and then check if it was last life
var a=U.livesGroup.getFirstAlive();a&&(a.kill(),N.checkLives())}
// remove the incorrect answer
t.kill(t.ID),N.backingGroup.getAt(t.ID).alpha=0},
// eat a bonus
getBonus:function(e,t){t.kill(),"double"===t.value?(N.playAudio(N.bonus),N.scorePopUpStart(t,"x2"),N.scoreMultiplier=2):(N.scorePopUpStart(t,""+N.scoreMultiplier*t.value),N.playAudio(N.bonus),B.score+=N.scoreMultiplier*t.value,U.score.text=B.score)},
// stop pacman moving and halt movement input
stopMovment:function(){s=!1,N.current=Phaser.NONE,U.right=Phaser.NONE,U.left=Phaser.NONE,U.down=Phaser.NONE,U.up=Phaser.NONE,N.mouse.body.velocity.x=0,N.mouse.body.velocity.y=0},scorePopUpStart:function(e,t){N.scorePopUp.setLabel(t),N.scorePopUp.reset(e.body.x+e.body.width/2,e.body.y+e.body.height/2),N.scorePopUp.alpha=1,N.scorePopUp.scale.x=1,N.scorePopUp.scale.y=1,N.scorePopUp.tween1.start(),N.scorePopUp.tween2.start()},diePopUpStart:function(e){N.diePopUp.reset(e.body.x+e.body.width/2,e.body.y+e.body.height/2),N.diePopUp.alpha=1,N.diePopUp.scale.x=1,N.diePopUp.scale.y=1,N.diePopUp.tween1.start(),N.diePopUp.tween2.start()},
//find objects in a Tiled layer that containt a property called "type" equal to a certain value
findObjectsByName:function(t,e,a){var i=[];return e.objects[a].forEach(function(e){e.name===t&&
//Phaser uses top left, Tiled bottom left so we have to adjust the y position
//also keep in mind that the cup images are a bit smaller than the tile which is 16x16
//so they might not be placed in the exact pixel position as in Tiled
//                element.y -= map.tileHeight;
i.push(e)}),i},update:function(){
// how sensitive the controls are
var e=20;
// monitor finger and mouse movement
L.down&&(void 0===L.x&&(L.x=N.input.activePointer.x),void 0===L.y&&(L.y=N.input.activePointer.y),20<N.input.activePointer.x-L.x?(U.right=!0,U.left=!1,U.down=!1,U.up=!1,
//                ui.direction.angle = 90;
L.x=N.input.activePointer.x,L.y=N.input.activePointer.y):20<L.x-N.input.activePointer.x?(U.right=!1,U.left=!0,U.down=!1,U.up=!1,
//                ui.direction.angle = 270;
L.x=N.input.activePointer.x,L.y=N.input.activePointer.y):20<N.input.activePointer.y-L.y?(U.right=!1,U.left=!1,U.down=!0,U.up=!1,
//                ui.direction.angle = 180;
L.x=N.input.activePointer.x,L.y=N.input.activePointer.y):20<L.y-N.input.activePointer.y&&(U.right=!1,U.left=!1,U.down=!1,U.up=!0,
//                ui.direction.angle = 0;
L.x=N.input.activePointer.x,L.y=N.input.activePointer.y)),N.physics.arcade.collide(N.mouse,N.layer),
// move pacman
s&&(N.physics.arcade.overlap(N.mouse,N.answers,N.eatAnswer,null,N),N.physics.arcade.overlap(N.mouse,N.bonuses,N.getBonus,null,N),N.marker.x=N.math.snapToFloor(Math.floor(N.mouse.x),N.gridsize)/N.gridsize,N.marker.y=N.math.snapToFloor(Math.floor(N.mouse.y),N.gridsize)/N.gridsize,
//  Update our grid sensors
N.directions[1]=N.map.getTileLeft(N.layer.index,N.marker.x,N.marker.y),N.directions[2]=N.map.getTileRight(N.layer.index,N.marker.x,N.marker.y),N.directions[3]=N.map.getTileAbove(N.layer.index,N.marker.x,N.marker.y),N.directions[4]=N.map.getTileBelow(N.layer.index,N.marker.x,N.marker.y),N.checkKeys(),N.turning!==Phaser.NONE&&N.turn()),
// play audio prompt
s&&5e3<N.time.now-N.timeCheck&&N.audioRepeat<=2&&(N.audioRepeat++,void 0!==N.audioPrompt&&N.audioPrompt.play(),N.timeCheck=N.time.now)},
//    render: function() {
//    state.game.debug.soundInfo(glob.music, 20, 32);
//},
checkLives:function(){0===B.lives&&(N.stopMovment(),N.endGame())},
// time has run down
timeIsUp:function(){
// stop any sounds
s=!1,N.correct.stop(),N.incorrect.stop(),N.lvlUp.stop(),N.bonus.stop(),N.stopMovment(),N.playAudio(N.timeUp),N.endGame()},
// we died or ran out of time   
endGame:function(){
// pause then start game over with game over graphic
B.gameover=0,N.game.time.events.add(3e3,function(){N.game.state.start("gameover")},this)},
// exit button
doBtnExit:function(){this.btnClick.play(),
// may need to reset some prefs
N.game.state.start("menu")},
// helper function for shuffling an array
shuffle:function(e){
// While there remain elements to shuffle...
for(var t=e.length,a,i;0!==t;)
// Pick a remaining element...
i=Math.floor(Math.random()*t),
// And swap it with the current element.
a=e[t-=1],e[t]=e[i],e[i]=a;return e},
/* ---------------------------------------------------------------------
    AUDIO 
    --------------------------------------------------------------------- */
// activate and deactive non esential sound
audioToggle:function(){N.btnClick.play(),
// set playSound to the opposite of what it is
B.playSound=!0!==B.playSound,
// if background music is playing pause it and vis versa
B.playSound?(B.music.resume(),U.audioBtn.setFrames("audioBtn_2","audioBtn_1","audioBtn_3","audioBtn_2")):(B.music.pause(),U.audioBtn.setFrames("audioBtn_5","audioBtn_4","audioBtn_6","audioBtn_5"))},
// optional audio 
playAudio:function(e){B.playSound&&e.play()}},t.exports=i},{"../prefabs/VisualTimer":2,"../prefabs/popUp":3,"../prefabs/scorePop":4}],9:[function(e,t,a){"use strict";
// define variables that will be assigned in init
// they are available to all functions in this state but not outside it
function i(){this.asset=null,this.ready=!1}var d,o,p;i.prototype={init:function(){
// reference to this state
// global object to pass items between states
o=(d=this).game.global,
// reference to the loaded json file
p=d.cache.getJSON("gameData")},preload:function(){
// remove dom loading wheel
var e=document.querySelector("#load-div");e.parentNode.removeChild(e),
// add loading bar to game
d.loadingBar=d.add.sprite(d.game.width/2,d.game.height/2,"preloader"),d.loadingBar.anchor.setTo(.5,.5),d.load.setPreloadSprite(d.loadingBar),
// Once all has been loaded go to menu state
d.load.onLoadComplete.addOnce(d.onLoadComplete,d);
// LOAD AUDIO 
// DEFAULT AUDIO
var t=["bg-music","bonus","btn-click","correct","incorrect","lvl-up","time-up","good-job","nice-try"];for(var a in t)d.load.audio(t[a],[p.templatePath+"audio/"+t[a]+".ogg",p.templatePath+"audio/"+t[a]+".mp3"]);
// PROMPT AUDIO
// record previously loaded audio so dont load twice
// load all the difficulties assets
for(var i=[],o=0;o<p.difficulties.length;o++)for(var r=p.difficulties[o],n=0;n<r.pool.length;n++){var s=p.difficulties[o].pool[n];-1===i.indexOf(s.audio)&&void 0!==s.audio&&(d.load.audio(""+s.audio,[p.instancePath+"audio/"+s.audio+".ogg",p.instancePath+"audio/"+s.audio+".mp3"]),i.push(s.audio))}
// IMAGES
d.load.atlasJSONHash("jpgSheet",p.templatePath+"maze-jpg.jpg",p.templatePath+"maze-jpg.json"),d.load.atlasJSONHash("pngSheet",p.templatePath+"maze-png.png",p.templatePath+"maze-png.json"),d.load.atlasJSONHash("images",p.instancePath+"images.jpg",p.instancePath+"images.json"),d.load.tilemap("map1",p.instancePath+"newmaze1.json",null,Phaser.Tilemap.TILED_JSON),d.load.tilemap("map2",p.instancePath+"newmaze2.json",null,Phaser.Tilemap.TILED_JSON),d.load.tilemap("map3",p.instancePath+"newmaze3.json",null,Phaser.Tilemap.TILED_JSON),d.load.image("mapTiles",p.templatePath+"map-tiles.png")},create:function(){
// loading bar
d.loadingBar.cropEnabled=!1},update:function(){d.ready&&d.game.state.start("menu")},onLoadComplete:function(){d.ready=!0}},t.exports=i},{}]},{},[1]);