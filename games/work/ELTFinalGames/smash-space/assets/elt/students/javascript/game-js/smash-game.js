!function n(r,i,s){function d(a,e){if(!i[a]){if(!r[a]){var t="function"==typeof require&&require;if(!e&&t)return t(a,!0);if(l)return l(a,!0);throw new Error("Cannot find module '"+a+"'")}var o=i[a]={exports:{}};r[a][0].call(o.exports,function(e){var t=r[a][1][e];return d(t||e)},o,o.exports,n,r,i,s)}return i[a].exports}for(var l="function"==typeof require&&require,e=0;e<s.length;e++)d(s[e]);return d}({1:[function(a,e,t){"use strict";
//global variables
//global variables
!function(){
// remove previous loading status and add new one with spinner
function e(){n.innerHTML="",t("The game is loading"),a()}
// add a text loading status to the dom
function t(e){var t=document.createElement("div");t.id="load-div",t.style.cssText="font-family:sans-serif;font-size: 24px;display:block;width: 100%;text-align: center;color:white;position:absolute;top:50%;left:50%;-webkit-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);transform: translate(-50%, -50%);";var a=document.createElement("p"),o=document.createTextNode(e);a.appendChild(o),t.appendChild(a),n.appendChild(t)}
// add a spinner to the DOM
function a(){var e=document.querySelector("#load-div"),t=document.createElement("div");t.style.cssText="width: 200px;height: 200px;display: inline-block;background-image: url(\"data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='UTF-8'?%3E%3Csvg class='lds-spinner' width='200px' height='200px' style='background:none' preserveAspectRatio='xMidYMid' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(0 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-1.375s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(30 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-1.25s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(60 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-1.125s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(90 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-1s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(120 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-0.875s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(150 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-0.75s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(180 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-0.625s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(210 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-0.5s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(240 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-0.375s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(270 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-0.25s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(300 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-0.125s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(330 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='0s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3C/svg%3E\");",e.appendChild(t)}
// Click event
function o(){document.getElementById("phaser-game").removeEventListener("click",o),e(),
// All set for main code so set readyToStart to true
window.readyToStart=!0}
// Get the correct AudioContext for the browser
// Ready to start is a global variable that the main game code looks for know it is ok to start loading
// This code will set readyToStart to true when it knows the browser will allow audio to load.
window.readyToStart=!1;var n=document.querySelector("#phaser-game"),r=window.AudioContext||window.webkitAudioContext||!1;// not supported
// Check if the AudioContext is preventing auto play of audio
// If it is add a click event to the game and prevent loading until game is clicked
r&&"running"!=(new r).state?(t("Click to load game"),n.addEventListener("click",o)):(e(),window.readyToStart=!0)}(),function(){
// this makes the game wait for the all clear to load audio
// on elt website the all clear code is part of the game code on iPortfolio
// it is split out into a separate file so it can run before the Phaser code loads
function t(){if(1==window.readyToStart&&window.Phaser){var e=new Phaser.Game(1024,704,Phaser.CANVAS,"phaser-game");e.global={},
// Game States
e.state.add("boot",a("./states/boot")),e.state.add("gameover",a("./states/gameover")),e.state.add("menu",a("./states/menu")),e.state.add("play",a("./states/play")),e.state.add("preload",a("./states/preload")),e.state.start("boot")}else setTimeout(function(){t()},50)}t()}()},{"./states/boot":3,"./states/gameover":4,"./states/menu":5,"./states/play":6,"./states/preload":7}],2:[function(e,t,a){"use strict";var o=function(e,t,a,o,n,r){Phaser.Sprite.call(this,e,t,a,o,n),this.anchor.setTo(.5,.5),this.label=new Phaser.Text(e,0,0,r),this.label.font="Arial",this.label.fontSize="30px",this.label.fontWeight="bold",this.label.stroke="#000000",this.label.strokeThickness=6,this.label.fill="#43d637",
//puts the label in the center of the button
this.label.anchor.setTo(.5,.5),this.addChild(this.label),this.setLabel(r),this.tween1=e.add.tween(this),this.tween1.to({alpha:0},1e3),this.tween2=e.add.tween(this.scale),this.tween2.to({x:2,y:2},1e3,"Linear"),this.alpha=0,
//adds button to game
e.add.existing(this)};o.prototype=Object.create(Phaser.Sprite.prototype),(o.prototype.constructor=o).prototype.setLabel=function(e){this.label.setText(e)},t.exports=o},{}],3:[function(e,t,a){
/*global dataPath: false, Phaser: false */
"use strict";
// define variables that will be assigned in init
// they are available to all functions in this state but not outside it
function o(){}var n,r;o.prototype={init:function(){
// reference to this state
// global object to pass items between states
r=(n=this).game.global,n.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,n.scale.pageAlignHorizontally=!0,n.scale.pageAlignVertically=!0,
// set minimum and maximum game sizes
n.scale.setMinMax(512,352,1024,704),r.playSound=!0},preload:function(){n.load.image("preloader","/elt/students/templatecontent/preloader.gif"),
// All our game data and settings
n.load.json("gameData",dataPath)},create:function(){n.game.input.maxPointers=2,n.game.state.start("preload")}},t.exports=o},{}],4:[function(e,t,a){"use strict";function o(){}var i,s,d;o.prototype={init:function(){
// global
s=(i=this).game.global,
// link to data
d=i.cache.getJSON("gameData")},preload:function(){i.btnClick=i.add.audio("btn-click"),
// load audio depending on how well they have done
0===s.gameover?i.scoreAudio=i.add.audio("nice-try"):1===s.gameover&&(i.scoreAudio=i.add.audio("good-job")),
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
e&&localStorage.setItem(d.localStorageTag,JSON.stringify(s.topScores))},create:function(){i.add.sprite(0,0,"jpgSheet","menuBG");var e=i.add.group(),t=i.add.sprite(0,0,"pngSheet","finalScorePlain",e);0===s.gameover?i.add.sprite(0,0,"pngSheet","finalscoreGO",e):1===s.gameover&&i.add.sprite(0,0,"pngSheet","finalscoreGJ",e);var a={font:"14px Arial",fill:"black",align:"left"},o=i.game.add.text(245,195,""+s.score,a);
// This score
e.add(o);var n=i.game.add.text(276,286,""+s.screens,a),r;e.add(n),
// Previous best
void 0!==s.topScores&&(i.previousText=i.game.add.text(290,374,""+s.topScores[s.topScores.length-1],a),e.add(i.previousText)),e.x=i.game.width/2-t.width/2,e.y=i.game.height/2-t.height/2-60,i.add.button(d.playAgain.x,d.playAgain.y,"pngSheet",i.replay,i,"pab2","pab1","pab3","pab2").anchor.set(.5,.5),s.playSound&&
//            glob.music.pause();
i.scoreAudio.play()},update:function(){},replay:function(){i.playAudio(i.btnClick),s.elapsedTime=null,s.score=0,s.subScreens=0,s.lives=void 0,i.game.state.start("menu")},
// optional audio 
playAudio:function(e){s.playSound&&e.play()}},t.exports=o},{}],5:[function(e,t,a){"use strict";
// define variables that will be assigned in init
// they are available to all functions in this state but not outside it
function o(){}var i,n,s,d={};o.prototype={init:function(){
// reference to this state
// global object to pass items between states
n=(i=this).game.global,
// reference to the loaded json file
s=i.cache.getJSON("gameData")},preload:function(){
//        state.bgMusic = state.add.audio('bgMusic');
i.btnClick=i.add.audio("btn-click")},create:function(){
//if background music doesn't exist create it and start playing 
// if (!glob.music) {
//     glob.music = state.add.audio('bgMusic', 0.2, true);
//     glob.music.play();
// }
// Add background
i.add.sprite(0,0,"jpgSheet","menuBG");
// Game logo
var e=i.add.image(i.game.width/2,i.game.height/2-70,"pngSheet","gameLogo");e.anchor.setTo(.5,.5),i.add.tween(e).from({y:-200},2e3,"Bounce",!0),
// UI GROUP (make it easier to bring to top)    
d.uiGroup=i.add.group();
// Close button
var t=i.add.button(s.closeBtn.x,s.closeBtn.y,"pngSheet",i.exitGame,i,"cb2","cb1","cb3","cb2");t.anchor.set(.5,.5),t.height=50,t.width=50,t.input.useHandCursor=!0,d.uiGroup.add(t);
// Copyright text
var a=i.add.text(s.copyright.x,s.copyright.y,s.copyright.text,{font:"14px Arial",fill:"white"});a.anchor.setTo(.5,.5),a.alpha=.7,d.uiGroup.add(a);
//Play button
// var playBtn = state.add.button(json.playBtn.x, json.playBtn.y, 'pngSheet', state.startGame, state, 'pb2', 'pb1', 'pb3', 'pb2');
// playBtn.anchor.set(0.5, 0.5);
// playBtn.input.useHandCursor = true;
// ui.uiGroup.add(playBtn);
// Difficulty 1 button
var o=i.add.button(s.diff1Btn.x,s.diff1Btn.y,"pngSheet",i.startGame,i,"db12","db11","db13","db12");o.anchor.set(.5,.5),o.id=0,o.input.useHandCursor=!0,d.uiGroup.add(o);
// Difficulty 2 button
var n=i.add.button(s.diff2Btn.x,s.diff2Btn.y,"pngSheet",i.startGame,i,"db22","db21","db23","db22");n.anchor.set(.5,.5),n.id=1,n.input.useHandCursor=!0,d.uiGroup.add(n);
// Difficulty 3 button
var r=i.add.button(s.diff3Btn.x,s.diff3Btn.y,"pngSheet",i.startGame,i,"db32","db31","db33","db32");r.anchor.set(.5,.5),r.id=2,r.input.useHandCursor=!0,d.uiGroup.add(r)},update:function(){},
// MY FUNCTIONS ========================================================
startGame:function(e){i.playAudio(i.btnClick),
// store the button id so we know the selected difficulty
e&&(n.difficulty=e.id),
// start game
i.game.state.start("play")},exitGame:function(){i.playAudio(i.btnClick),window.location.href=s.closeBtn.url},
// play myAudio 
playAudio:function(e){n.playSound&&e.play()}},t.exports=o},{}],6:[function(e,t,a){"use strict";
// PREFABS
function o(){}var c=e("../prefabs/scorePop"),y,u,f,h={},m,v,b,w,x,C=[],g,S,B,E,k,n=0,T,A,P,G,U,I,r;
// STATE variables
// define variables that will be assigned in init
// they are available to all functions in this state but not outside it
o.prototype={init:function(){
// reference to this state
// global object to pass items between states
u=(y=this).game.global,
// reference to the loaded json file
f=y.cache.getJSON("gameData"),
// ref to this difficulties preferences
m=f.difficulties[u.difficulty],v=f.difficulties[u.difficulty].prefs[0],
// set playerID if not already set
void 0===u.playerID&&(u.playerID=0),void 0===u.subScreens&&(u.subScreens=0),// set to zero first time this state loads
u.score=0,u.lives=v.lives,u.screens=0,u.elapsedTime=0,u.soundOn=!0,b=!1},preload:function(){y.btnClick=y.add.audio("btn-click"),y.correct=y.add.audio("correct"),y.levelUp=y.add.audio("lvl-up"),y.timeUp=y.add.audio("time-up"),y.playerExplodes=y.add.audio("player-explodes"),y.playerFires=y.add.audio("player-fires"),y.incorrect=y.add.audio("incorrect")},create:function(){function e(){s.start(),y.playAudio(y.btnClick),s.onComplete.addOnce(function(){1===i?(i=2,y.popUpGroup.y=704,l.loadTexture("jpgSheet","selectChar"),p.setFrames("pb2","pb1","pb3","pb1"),d.start(),t()):(h.tabletControls.tweenIn.start(),y.restart())},y)}
//        playerSelect = new CreateOverlay2(state.game, 'black', 0, closePrompt);
function t(){
// add buttons
var e=y.add.sprite(f.playerSelect[0].x,f.playerSelect[0].y,"pngSheet","empty");e.anchor.setTo(.5,.5),e.width=f.playerSelect[0].width,e.height=f.playerSelect[0].height,e.alpha=.5,e.inputEnabled=!0,e.events.onInputDown.add(function(){this.changePlayer(0)},y),y.popUpGroup.add(e);
// add buttons
var t=y.add.sprite(f.playerSelect[1].x,f.playerSelect[1].y,"pngSheet","empty");t.anchor.setTo(.5,.5),t.width=f.playerSelect[1].width,t.height=f.playerSelect[1].height,t.inputEnabled=!0,t.alpha=.5,t.events.onInputDown.add(function(){y.changePlayer(1)},y),y.popUpGroup.add(t),h.tick=y.add.image(f.playerSelect[0].x-135,f.playerSelect[0].y-135,"pngSheet","tick"),y.popUpGroup.add(h.tick)}
//        selectPlayer();
// turn on physics
y.physics.startSystem(Phaser.Physics.ARCADE),
// The scrolling background
U=y.add.tileSprite(0,0,1024,704,"jpgSheet","background0"),
// add beach if beach smash
2===f.version&&(I=y.add.image(0,0,"pngSheet","backgroundOverlay0"),y.add.image(530,640,"pngSheet","rocks"),y.add.image(600,20,"pngSheet","rocks1")),(
// black overlay to fasde out background
g=y.add.graphics(0,0)).beginFill("black"),g.drawRect(0,0,1024,704),g.alpha=0,B=y.add.group(),
// UI GROUP (make it easier to bring to top)    
h.uiGroup=this.add.group(),
// Close button
h.closeBtn=y.add.button(f.closeBtn.x,f.closeBtn.y,"pngSheet",y.exitGame,y,"cb2","cb1","cb3","cb2"),h.closeBtn.anchor.set(.5,.5),h.closeBtn.height=50,h.closeBtn.width=50,h.closeBtn.input.useHandCursor=!0,h.uiGroup.add(h.closeBtn),
// Audio button   
h.audioBtn=y.add.button(f.audioBtn.x,f.audioBtn.y,"pngSheet",y.audioToggle,y,"audioBtn_2","audioBtn_1","audioBtn_3","audioBtn_2",h.uiGroup),h.audioBtn.anchor.setTo(.5,.5),h.audioBtn.height=50,h.audioBtn.width=50,h.audioBtn.input.useHandCursor=!0,h.uiGroup.add(h.audioBtn);
// SCORE text
var a=y.add.image(32,12,"pngSheet","score");h.uiGroup.add(a),h.score=y.add.text(f.score.x,f.score.y,f.score.prefix+u.score,f.score.style,h.uiGroup),h.score.anchor.setTo(0,.5);//left align
// LIVES text
var o=y.add.image(224,12,"pngSheet","lives");h.uiGroup.add(o),h.livesGroup=y.add.group();for(var n=u.lives;0<n;n--){var r;h.livesGroup.create(f.lives.x-15+28*n,f.lives.y-5,"pngSheet","life").anchor.setTo(.5,.5)}
// make group to put controls in (we need this even if we dont have the controls so the close tween doesn't error)
h.tabletControls=y.add.group(),h.tabletControls.y=100,
// only add buttons on not desktop
y.game.device.desktop||(
// UP button
h.upBtn=y.add.button(f.upBtn.x,f.upBtn.y,"pngSheet","",y,"upBtn_2","upBtn_1","upBtn_3","upBtn_1",h.tabletControls),h.upBtn.anchor.setTo(.5,.5),
// TODO create a function for this rather than repeat for each button
h.upBtn.events.onInputOver.add(function(){h.up=!0}),h.upBtn.events.onInputOut.add(function(){h.up=!1}),h.upBtn.events.onInputDown.add(function(){h.up=!0}),h.upBtn.events.onInputUp.add(function(){h.up=!1}),
// DOWN button
h.downBtn=y.add.button(f.downBtn.x,f.downBtn.y,"pngSheet","",y,"downBtn_2","downBtn_1","downBtn_3","downBtn_1",h.tabletControls),h.downBtn.anchor.setTo(.5,.5),h.downBtn.events.onInputOver.add(function(){h.down=!0}),h.downBtn.events.onInputOut.add(function(){h.down=!1}),h.downBtn.events.onInputDown.add(function(){h.down=!0}),h.downBtn.events.onInputUp.add(function(){h.down=!1}),
// fire button
h.fireBtn=y.add.button(f.fireBtn.x,f.fireBtn.y,"pngSheet","",y,"fireBtn_02","fireBtn_01","fireBtn_03","fireBtn_01",h.tabletControls),h.fireBtn.anchor.setTo(.5,.5),h.fireBtn.events.onInputOver.add(function(){h.fire=!0}),h.fireBtn.events.onInputOut.add(function(){h.fire=!1}),h.fireBtn.events.onInputDown.add(function(){h.fire=!0}),h.fireBtn.events.onInputUp.add(function(){h.fire=!1})),h.levelUp=y.add.image(y.game.width/2,y.game.height,"pngSheet","levelUp"),h.levelUp.anchor.setTo(.5,0),h.uiGroup.add(h.levelUp),h.levelUpInTween=y.add.tween(h.levelUp).to({y:y.game.height/2-100},500),h.levelUpOutTween=y.add.tween(h.levelUp).to({y:y.game.height},300),(
//  Our bullet group
E=y.add.group()).enableBody=!0,E.physicsBodyType=Phaser.Physics.ARCADE,E.createMultiple(30,"pngSheet","bullet"),E.setAll("anchor.x",.5),E.setAll("anchor.y",1),E.setAll("outOfBoundsKill",!0),E.setAll("checkWorldBounds",!0),(
// The answers's bullets
k=y.add.group()).enableBody=!0,k.physicsBodyType=Phaser.Physics.ARCADE,k.createMultiple(30,"pngSheet","enemy-bullet"),k.setAll("anchor.x",.5),k.setAll("anchor.y",1),k.setAll("outOfBoundsKill",!0),k.setAll("checkWorldBounds",!0),(
// The hero!
S=y.add.sprite(-100,500,"pngSheet","player"+u.playerID)).anchor.setTo(.5,.5),y.physics.enable(S,Phaser.Physics.ARCADE),
// reduce the area that causes a colision
//        player.body.setSize(100, 50, 50, 25);
// kill player so background doesn't move
S.kill(),S.leave=y.add.tween(S).to({x:-100},1e3,"Linear"),S.enter=y.add.tween(S).to({x:100},1e3,"Linear"),
// The moving answers!
// create a group to add the answers to and give the group a body
// this avoids us having to give each answer a body in order to add physics
// made group earlier so it is under uiGroup
B.enableBody=!0,B.physicsBodyType=Phaser.Physics.ARCADE,(
// An explosion pool
G=y.add.group()).createMultiple(5,"enemyExplode"),G.forEach(this.setupInvader,y),(P=y.add.group()).createMultiple(2,"playerExplode"),P.forEach(this.setupInvader,y),y.scorePopUp=new c(this.game,100,100,"pngSheet","empty","100"),
//  And some controls to play the game with
T=y.input.keyboard.createCursorKeys(),A=y.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
// player select overlay ----------------------------------------------------------
y.popUpGroup=y.add.group(),y.popUpGroup.y=y.game.height;var i=1,s=y.add.tween(y.popUpGroup).to({y:-704},400),d=y.add.tween(y.popUpGroup).to({y:0},400);h.tabletControls.tweenIn=y.add.tween(h.tabletControls).to({y:0},400);var l=y.add.sprite(y.game.width/2,y.game.height/2,"pngSheet","howToPlay"),p;l.anchor.setTo(.5,.5),y.popUpGroup.add(l),(p=1===i?y.add.button(f.playBtn.x,f.playBtn.y,"pngSheet",function(){e()},y,"nxt2","nxt1","nxt3","nxt1",y.popUpGroup):y.add.button(f.playBtn.x,f.playBtn.y,"pngSheet",function(){e()},y,"pb2","pb1","pb3","pb1",y.popUpGroup)).anchor.setTo(.5,.5),p.input.useHandCursor=!0,y.popUpGroup.y=0},update:function(){
// scroll background
U.tilePosition.x-=2,
// repeat audio prompt every 3 seconds
b&&3e3<y.time.now-y.timeCheck&&(y.audioPrompt.play(),y.timeCheck=y.time.now),S.alive&&(
//  Reset the player, then check for movement keys
S.body.velocity.setTo(0,0),T.up.isDown||h.up?S.body.y>f.activeArea.y&&(S.body.velocity.y=-200):(T.down.isDown||h.down)&&S.body.y<f.activeArea.height+f.activeArea.y-90&&(S.body.velocity.y=200),
//  Firing?
(A.isDown||h.fire)&&this.fireBullet(),
//  Run collision detection
y.physics.arcade.overlap(E,B,y.answerShot,null,y),y.physics.arcade.overlap(k,S,y.playerHit,null,y),y.physics.arcade.overlap(B,S,y.playerHit,null,y))},
// add explosion to each answer
setupInvader:function(e){e.anchor.x=.5,e.anchor.y=.5,e.animations.add("kaboom")},changePlayer:function(e){y.playAudio(y.btnClick),u.playerID=e,S.loadTexture("pngSheet","player"+e),h.tick.x=f.playerSelect[parseInt(e)].x-135,h.tick.y=f.playerSelect[parseInt(e)].y-135},createAnswers:function(){
// if shuffledIndex is empty populate it with the index of every item in the pool
// and then shuffle them
if(0===C.length){for(s=0;s<m.pool.length;s++)C.push(s);this.shuffle(C)}for(var e,t,a=m.pool[C.pop()],o=[],n=0;n<a.answers.length;n++)o.push(n);var r=a.answers.length,i;
// 1 time in 3 we add an extra item or replace one
if(Math.floor(3*Math.random())<1)if(r<5)o.push(100);else for(var s=0,d=!0;d;)!1===a.answers[s].isCorrect?d=!(o[s]=100):s++;
// build settings
// create an answer sprite for every item in the answer pool
for(var l=this.shuffle(o),n=0;n<o.length;n++){var p,c;if(""===(p=100!==o[n]?a.answers[l[n]]:{isCorrect:"bonus",text:"",file:"answerBonus"}).file){
// text answer
c=B.create(y.game.width,f.activeArea.y+n*f.answerHeight+f.answerHeight/2,"pngSheet","answerPlain");var u=1===f.version?"white":"black";console.log(u);var h=new Phaser.Text(y,0,0,p.text,{font:"20px Arial",fill:u,align:"center",wordWrap:!0,wordWrapWidth:100});h.anchor.setTo(.5,.5),
// add label as a child of the card sprite
c.addChild(h)}else
// image answer
c=B.create(y.game.width,f.activeArea.y+n*f.answerHeight+f.answerHeight/2,"pngSheet2",""+p.file);c.anchor.setTo(.5,.5),c.body.moves=!1,
// attach isCorrect to the answer object for easy checking later 
c.isCorrect=p.isCorrect}var g=f.activeArea.height-o.length*f.answerHeight;w=y.add.tween(B).to({y:"+"+g},v.answerYspeed,Phaser.Easing.Linear.None,!0,0,1e3,!0),x=y.add.tween(B).to({x:-1024},v.answerXspeed,Phaser.Easing.Linear.None,!0,0,1e3,!0),
// Play the audio prompt
y.audioPrompt=y.add.audio(a.audio),y.audioPrompt.play(),y.timeCheck=y.time.now,b=!0},scorePopUpStart:function(e,t){y.scorePopUp.setLabel(t),y.scorePopUp.reset(e.body.x+e.body.width/2,e.body.y+e.body.height/2),y.scorePopUp.alpha=1,y.scorePopUp.scale.x=1,y.scorePopUp.scale.y=1,y.scorePopUp.tween1.start(),y.scorePopUp.tween2.start()},
// play has shot an answer
answerShot:function(e,t){var a,o;b&&(!0===t.isCorrect?(
//  When a bullet hits an answer we kill them both
e.kill(),t.kill(),
// work out score by how far answers have moved across screen in pixels rounding down to nearest 100
o=900<B.x?100:1e3+100*Math.round(B.x/100),
// update score
u.score+=o,h.score.text=u.score,
// .body is always top left so need to add half body height/width to center it
(
//  And create an explosion
a=G.getFirstExists(!1)).reset(t.body.x+t.body.width/2,t.body.y+t.body.height/2),a.play("kaboom",30,!1,!0),y.scorePopUpStart(t,"+"+o),y.playAudio(y.correct),
// stop collion detection
b=!1,
// level up or game over ?
this.endScreen(!1)):!1===t.isCorrect?(y.playAudio(y.incorrect),e.kill(),y.enemyFires(t)):(e.kill(),t.kill(),y.playAudio(y.correct),
// update score
u.score+=1e3,h.score.text=u.score,
//  And create an explosion only in space version create sinking doesn't work in beach version
1===f.version&&(
// .body is always top left so need to add half body height/width to center it
(a=G.getFirstExists(!1)).reset(t.body.x+t.body.width/2,t.body.y+t.body.height/2),a.play("kaboom",30,!1,!0)),o=1e3,y.scorePopUpStart(t,"+"+o)))},playerHit:function(e){
// check gameOn stray bullets or answers dont kill player once he is already dead
// or after he has killed an answer
if(b){
// update lives
u.lives--;var t=h.livesGroup.getFirstAlive();t&&t.kill();
// explosion
var a=P.getFirstExists(!1);
// .body is always top left so need to add half body height/width to center it
a.reset(e.body.x+e.body.width/2,e.body.y+e.body.height/2),a.play("kaboom",30,!1,!0),
// play audio
y.playAudio(y.playerExplodes),e.kill(),e.x=-100,E.callAll("kill"),k.callAll("kill"),this.endScreen(!0)}b=!1},enemyFires:function(e){
//  Grab the first bullet we can from the pool
(r=k.getFirstExists(!1))&&(
// play audio
//            state.playAudio(state.playerExplodes);
// position bullet at left middle of the answer
r.reset(e.body.x,e.body.y+f.answerHeight/2),y.physics.arcade.moveToObject(r,S,v.answerShotSpeed))},
// requires json.secsPerShot
fireBullet:function(){
//  To avoid them being allowed to fire too fast we set a time limit
if(y.time.now>n&&b){
// play sound effect
y.playAudio(y.playerFires);
//  Grab the first bullet we can from the pool
var e=E.getFirstExists(!1);e&&(
//  Position bullet at end of bazoka in version 2
2===f.version?e.reset(S.x+45,S.y+24):e.reset(S.x,S.y),e.body.velocity.x=1e3,n=y.time.now+v.secsPerShot)}},resetBullet:function(e){
//  Called if the bullet goes out of the screen
e.kill()},
// screen over, new screen or game over?
endScreen:function(e){
// pause the timer
//        glob.timerBar.pause();
// stop the answers moving
w.stop(),x.stop(),
// wait then end screen
y.game.time.events.add(1e3,function(){
// level up or game over
// player was killed
e?0<u.lives?y.restart():this.endGame():(
// screen completed
u.subScreens++,
// 
// only a sub screen finished
v.subScreens!==u.subScreens?y.game.time.events.add(1e3,function(){S.leave=y.add.tween(S).to({x:-100},1e3,"Linear"),S.leave.onComplete.add(function(){S.kill()}),S.leave.start(),
//                        state.add.tween(tintOverlay).to( { alpha: 1 }, 1000, 'Linear').start();
y.restart()},this):
// screen complete
u.screens<f.screensCount-1?(
// LEVEL UP
y.playAudio(y.levelUp),h.levelUpInTween.start(),y.game.time.events.add(1e3,function(){
// new screen
//                            this.levelUp.y = state.game.height;
h.levelUpOutTween.start(),
// increase screen number so we load in new prefs in restart
u.screens++,
// reset subScreens
u.subScreens=0,S.leave=y.add.tween(S).to({x:-100},1e3,"Linear"),S.leave.onComplete.add(function(){S.kill()}),S.leave.start(),y.add.tween(g).to({alpha:1},1e3,"Linear").start(),y.restart()},this)):(u.screens++,
// load gameover state and use good job graphic
u.gameover=1,y.game.state.start("gameover")))},this)},
// reset everything ready to play again
restart:function(){
//  A new level starts
v=f.difficulties[u.difficulty].prefs[u.screens],
// remove all answers and bullets
k.callAll("kill"),B.removeAll(),B.x=0,y.game.time.events.add(1e3,function(){
// load new textures
U.loadTexture("jpgSheet","background"+u.screens),2===f.version&&I.loadTexture("pngSheet","backgroundOverlay"+u.screens),
// only works if on a delay 
y.game.time.events.add(1e3,function(){U.loadTexture("jpgSheet","background"+u.screens),y.add.tween(g).to({alpha:0},1e3,"Linear").start(),
// reserect the player
S.revive(),S.enter.start(),
// pause before restart
y.game.time.events.add(1e3,function(){
//  load in new answers
// reset answers.y or answers may go too low
B.y=0,y.createAnswers()},this)},this)},this)},endGame:function(){
// load gameover state and use game over graphic
u.gameover=0,y.game.state.start("gameover")},exitGame:function(){this.btnClick.play(),y.game.state.start("menu")},
// helper function for shuffling an array
shuffle:function(e){
// While there remain elements to shuffle...
for(var t=e.length,a,o;0!==t;)
// Pick a remaining element...
o=Math.floor(Math.random()*t),
// And swap it with the current element.
a=e[t-=1],e[t]=e[o],e[o]=a;return e},
/* ---------------------------------------------------------------------
    AUDIO 
    --------------------------------------------------------------------- */
// activate and deactive non esential sound
audioToggle:function(){y.btnClick.play(),
// set playSound to the opposite of what it is
u.playSound=!0!==u.playSound,
// if background music is playing pause it and vis versa
u.playSound?
//             glob.music.resume();
h.audioBtn.setFrames("audioBtn_2","audioBtn_1","audioBtn_3","audioBtn_2"):
//             glob.music.pause();
h.audioBtn.setFrames("audioBtn_5","audioBtn_4","audioBtn_6","audioBtn_5")},
// optional audio 
playAudio:function(e){u.playSound&&e.play()}},t.exports=o},{"../prefabs/scorePop":2}],7:[function(e,t,a){"use strict";
/*
required
    assets
        AUDIO
        -
        IMAGES
        -
        SPRITES
        loading bar
    prefs  
*/
// define variables that will be assigned in init
// they are available to all functions in this state but not outside it
function o(){this.asset=null,this.ready=!1}var s,n,d;o.prototype={init:function(){
// reference to this state
// global object to pass items between states
n=(s=this).game.global,
// reference to the loaded json file
d=s.cache.getJSON("gameData")},preload:function(){
// remove dom loading wheel
var e=document.querySelector("#load-div");e.parentNode.removeChild(e),
// add loading bar to game
s.loadingBar=s.add.sprite(s.game.width/2,s.game.height/2,"preloader"),s.loadingBar.anchor.setTo(.5,.5),s.load.setPreloadSprite(s.loadingBar),
// Once all has been loaded go to menu state
s.load.onLoadComplete.addOnce(s.onLoadComplete,s);
// LOAD AUDIO
// DEFAULT AUDIO
var t=["btn-click","correct","incorrect","lvl-up","player-explodes","player-fires","time-up","good-job","nice-try"];for(var a in t)s.load.audio(t[a],[d.templatePath+"audio/"+t[a]+".ogg",d.templatePath+"audio/"+t[a]+".mp3"]);
// load all the difficulties assets
for(var o=0;o<d.difficulties.length;o++)for(var n=d.difficulties[o],r=0;r<n.pool.length;r++){
// audio
var i=d.difficulties[o].pool[r];s.load.audio(""+i.audio,[d.instancePath+"audio/"+i.audio+".ogg",d.instancePath+"audio/"+i.audio+".mp3"])}s.load.atlasJSONHash("jpgSheet",d.templatePath+"smash-jpg.jpg",d.templatePath+"smash-jpg.json"),s.load.atlasJSONHash("pngSheet",d.templatePath+"smash-png.png",d.templatePath+"smash-png.json"),s.load.atlasJSONHash("pngSheet2",d.instancePath+"images.png",d.instancePath+"images.json"),s.load.spritesheet("playerExplode",d.templatePath+"playerExplode.png",100,100),1===d.version?s.load.spritesheet("enemyExplode",d.templatePath+"enemy-explode.png",100,100):s.load.spritesheet("enemyExplode",d.templatePath+"enemy-explode.png",160,100)},create:function(){
// loading bar
s.loadingBar.cropEnabled=!1},update:function(){s.ready&&s.game.state.start("menu")},onLoadComplete:function(){s.ready=!0}},t.exports=o},{}]},{},[1]);