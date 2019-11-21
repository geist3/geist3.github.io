!function n(r,i,s){function l(t,e){if(!i[t]){if(!r[t]){var a="function"==typeof require&&require;if(!e&&a)return a(t,!0);if(d)return d(t,!0);throw new Error("Cannot find module '"+t+"'")}var o=i[t]={exports:{}};r[t][0].call(o.exports,function(e){var a=r[t][1][e];return l(a||e)},o,o.exports,n,r,i,s)}return i[t].exports}for(var d="function"==typeof require&&require,e=0;e<s.length;e++)l(s[e]);return l}({1:[function(t,e,a){"use strict";
//global variables
//global variables
!function(){
// remove previous loading status and add new one with spinner
function e(){n.innerHTML="",a("The game is loading"),t()}
// add a text loading status to the dom
function a(e){var a=document.createElement("div");a.id="load-div",a.style.cssText="font-family:sans-serif;font-size: 24px;display:block;width: 100%;text-align: center;color:white;position:absolute;top:50%;left:50%;-webkit-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);transform: translate(-50%, -50%);";var t=document.createElement("p"),o=document.createTextNode(e);t.appendChild(o),a.appendChild(t),n.appendChild(a)}
// add a spinner to the DOM
function t(){var e=document.querySelector("#load-div"),a=document.createElement("div");a.style.cssText="width: 200px;height: 200px;display: inline-block;background-image: url(\"data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='UTF-8'?%3E%3Csvg class='lds-spinner' width='200px' height='200px' style='background:none' preserveAspectRatio='xMidYMid' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='rotate(0 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-1.375s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(30 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-1.25s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(60 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-1.125s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(90 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-1s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(120 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-0.875s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(150 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-0.75s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(180 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-0.625s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(210 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-0.5s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(240 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-0.375s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(270 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-0.25s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(300 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='-0.125s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(330 50 50)'%3E%3Crect x='47' y='16' width='6' height='16' rx='9.4' ry='3.2' fill='%23fff'%3E%3Canimate attributeName='opacity' begin='0s' dur='1.5s' keyTimes='0;1' repeatCount='indefinite' values='1;0'/%3E%3C/rect%3E%3C/g%3E%3C/svg%3E\");",e.appendChild(a)}
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
r&&"running"!=(new r).state?(a("Click to load game"),n.addEventListener("click",o)):(e(),window.readyToStart=!0)}(),function(){
// this makes the game wait for the all clear to load audio
// on elt website the all clear code is part of the game code on iPortfolio
// it is split out into a separate file so it can run before the Phaser code loads
function a(){if(1==window.readyToStart&&window.Phaser){var e=new Phaser.Game(1024,704,Phaser.CANVAS,"phaser-game");e.global={},
// Game States
e.state.add("boot",t("./states/boot")),e.state.add("gameover",t("./states/gameover")),e.state.add("menu",t("./states/menu")),e.state.add("play",t("./states/play")),e.state.add("preload",t("./states/preload")),e.state.start("boot")}else setTimeout(function(){a()},50)}a()}()},{"./states/boot":3,"./states/gameover":4,"./states/menu":5,"./states/play":6,"./states/preload":7}],2:[function(e,a,t){"use strict";var o=function(o,e,n,a){function t(){i.start(),o.playAudio(o.btnClick),i.onComplete.addOnce(function(){1===e?(e=2,o.popUpGroup.y=704,s.start(),l.loadTexture("jpgSheet","selectChar"),r()):(o.tintOverlay.fadeOut.start(),
// trigger start of game
void 0!==a&&a())},o)}
// playerSelect = new CreateOverlay2(state.game, 'black', 0, closePrompt);
function r(){
// add buttons
var e=o.add.sprite(n.playerSelect[0].x,n.playerSelect[0].y,"pngSheet","empty");e.anchor.setTo(.5,.5),e.width=n.playerSelect[0].width,e.height=n.playerSelect[0].height,e.inputEnabled=!0,e.events.onInputDown.add(function(){this.changePlayer(0)},o),o.popUpGroup.add(e);
// add buttons
var a=o.add.sprite(n.playerSelect[1].x,n.playerSelect[1].y,"pngSheet","empty");a.anchor.setTo(.5,.5),a.width=n.playerSelect[1].width,a.height=n.playerSelect[1].height,a.inputEnabled=!0,a.events.onInputDown.add(function(){o.changePlayer(1)},o),o.popUpGroup.add(a);var t=o.add.image(n.playerSelect[0].x+80,n.playerSelect[0].y+100,"pngSheet","tick");o.popUpGroup.add(t)}o.tintOverlay=o.add.graphics(0,0),o.tintOverlay.beginFill("black"),o.tintOverlay.drawRect(0,0,1024,704),o.tintOverlay.alpha=.5,o.tintOverlay.fadeOut=o.add.tween(o.tintOverlay).to({alpha:0},400),
// player select overlay ----------------------------------------------------------
o.popUpGroup=o.add.group(),o.popUpGroup.y=o.game.height;var i=o.add.tween(o.popUpGroup).to({y:-704},400),s=o.add.tween(o.popUpGroup).to({y:0},400),l=o.add.sprite(o.game.width/2,o.game.height/2,"pngSheet","howToPlay");l.anchor.setTo(.5,.5),o.popUpGroup.add(l);var d=o.add.button(512,626,"pngSheet",function(){t()},o,"pb2","pb1","pb3","pb1",o.popUpGroup);d.anchor.setTo(.5,.5),d.input.useHandCursor=!0,o.popUpGroup.y=0};a.exports=o},{}],3:[function(e,a,t){
/* global Phaser: false, module: false, dataPath: false*/
"use strict";
// define variables that will be assigned in init
// they are available to all functions in this state but not outside it
//	var json;
function o(){}var n,r;o.prototype={init:function(){
// reference to this state
// global object to pass items between states
r=(n=this).game.global,n.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,n.scale.pageAlignHorizontally=!0,n.scale.pageAlignVertically=!0,
// set minimum and maximum game sizes
n.scale.setMinMax(512,352,1024,704),r.playSound=!0},preload:function(){n.load.image("preloader","/elt/students/templatecontent/preloader.gif"),
// All our game data and settings
n.load.json("gameData",dataPath)},create:function(){n.game.input.maxPointers=2,n.game.state.start("preload")}},a.exports=o},{}],4:[function(e,a,t){
/* global module: false, localStorage: false*/
"use strict";function o(){}var i,s,l;o.prototype={init:function(){
// global
s=(i=this).game.global,
// link to data
l=i.cache.getJSON("gameData")},preload:function(){i.btnClick=this.add.audio("btn-click"),
// load audio depending on how well they have done
// this game has no nice try so it wont be triggered
0===s.gameover?i.scoreAudio=i.add.audio("nice-try"):i.scoreAudio=i.add.audio("good-job"),
// two character games will store scores separately if only one use first location
void 0===s.playerID&&(s.playerID=0),
// Does topScores exist?
void 0===s.topScores&&(
// try and get them from local storage and convert back from a string to a proper object
s.topScores=JSON.parse(localStorage.getItem(l.localStorageTag)),
// check again if no joy, set all to 0 (last item is highest of all scores)
null===s.topScores&&(s.topScores=[0,0,0])),void 0===s.score&&(s.score=0),void 0===s.screens&&(s.screens=0);var e=!1;
// if this score is highest for this character update topScores
s.score>s.topScores[s.playerID]&&(s.topScores[s.playerID]=s.score,e=!0,
// if it is higher than the best score update that as well (the last number)
s.score>s.topScores[s.topScores.length-1]&&(s.topScores[s.topScores.length-1]=s.score)),
// if any top scores were updated then convert to a string and save to local storage
e&&localStorage.setItem(l.localStorageTag,JSON.stringify(s.topScores))},create:function(){i.add.sprite(0,0,"jpgSheet","menuBG");var e=i.add.group(),a=i.add.sprite(0,0,"pngSheet","finalScorePlain",e);0===s.gameover?i.add.sprite(0,0,"pngSheet","finalscoreGO",e):i.add.sprite(0,0,"pngSheet","finalscoreGJ",e);var t={font:"14px Arial",fill:"black",align:"left"},o=i.game.add.text(245,195,""+s.score,t);
// This score
e.add(o);var n=i.game.add.text(276,286,""+s.screens,t),r;e.add(n),
// Previous best
void 0!==s.topScores&&(i.previousText=i.game.add.text(290,374,""+s.topScores[s.topScores.length-1],t),e.add(i.previousText)),e.x=i.game.width/2-a.width/2,e.y=i.game.height/2-a.height/2-60,i.add.button(l.playAgain.x,l.playAgain.y,"pngSheet",i.replay,i,"pab2","pab1","pab3","pab2").anchor.set(.5,.5),s.playSound&&(s.music.pause(),i.scoreAudio.play())},update:function(){},replay:function(){i.scoreAudio.stop(),s.playerID=void 0,i.game.state.start("menu")},
// play button audio if playSound is ture
playAudio:function(e){s.playSound&&e.play()}},a.exports=o},{}],5:[function(e,a,t){function o(){}
/* global window: false, Phaser: false, module: false*/
// define variables that will be assigned in init
// they are available to all functions in this state but not outside it
var r,i,s,l={};o.prototype={init:function(){
// reference to this state
// global object to pass items between states
i=(r=this).game.global,
// reference to the loaded json file
s=r.cache.getJSON("gameData")},preload:function(){
// Store the button click audio
r.btnClick=this.add.audio("btn-click")},create:function(){
//if background music doesn't exist create it and start playing
i.music?
// resume background music after game restarted
!0===i.playSound&&i.music.resume():(i.music=r.add.audio("bg-music",1,!0),i.music.play()),
// bug fix for audio nolonger looping once it has been paused
i.music.onLoop.add(function(){i.playSound.isPlaying||!0!==i.playSound||i.music.play()}),
// Add background
r.add.sprite(0,0,"jpgSheet","menuBG");
// Game logo
//var gameLogo = state.add.image(state.game.width / 2, state.game.height / 2 - 70, 'pngSheet', 'gameLogo.png');
var e=r.add.image(r.game.width/2,r.game.height/2-70,"pngSheet","gameLogo");e.anchor.setTo(.5,.5),
//drop down game logo
r.add.tween(e).from({y:-200},2e3,"Bounce",!0),
// UI GROUP (make it easier to bring to top)
l.uiGroup=r.add.group();
// Close button
// var closeBtn = state.add.button(json.closeBtn.x, json.closeBtn.y, 'pngSheet', state.exitGame, state, 'cb2', 'cb1', 'cb3', 'cb2');
// closeBtn.anchor.set(0.5, 0.5);
// closeBtn.height = 50;
// closeBtn.width = 50;
// closeBtn.input.useHandCursor = true;
// //force smoothed button counteracts the reduction of sprite, can remove if sprite resized
// closeBtn.smoothed = true;
// ui.uiGroup.add(closeBtn);
// Copyright text
var a=r.add.text(s.copyright.x,s.copyright.y,String.fromCharCode(169)+s.copyright.text,{font:"14px Arial",fill:"white"});a.anchor.setTo(.5,.5),a.alpha=.7,l.uiGroup.add(a);
// Difficulty 1 button
var t=r.add.button(s.diff1Btn.x,s.diff1Btn.y,"pngSheet",r.startGame,r,"db12","db11","db13","db12");t.anchor.set(.5,.5),t.id=0,l.uiGroup.add(t);
// Difficulty 2 button
var o=r.add.button(s.diff2Btn.x,s.diff2Btn.y,"pngSheet",r.startGame,r,"db22","db21","db23","db22");o.anchor.set(.5,.5),o.id=1,l.uiGroup.add(o);
// Difficulty 3 button
var n=r.add.button(s.diff3Btn.x,s.diff3Btn.y,"pngSheet",r.startGame,r,"db32","db31","db33","db32");n.anchor.set(.5,.5),n.id=2,l.uiGroup.add(n),
// how to play
l.howToPlayBg=r.add.sprite(0,0,"jpgSheet","menuBG"),l.uiGroup.add(l.howToPlayBg),l.howToPlayBg.visible=!1,l.howToPlay=r.add.sprite(r.game.width/2,r.game.height/2,"pngSheet","howToPlay"),l.howToPlay.anchor.set(.5,.5),l.howToPlay.scale.set(0),l.uiGroup.add(l.howToPlay),l.howToPlayTween=r.add.tween(l.howToPlay.scale).to({x:1,y:1},1e3,Phaser.Easing.Elastic.Out,!1),l.howToPlayBtn=r.add.button(r.game.width/2,r.game.height/2+280,"pngSheet",r.replay,r,"pb1","pb2","pb3","pb3"),l.howToPlayBtn.anchor.set(.5,.5),l.uiGroup.add(l.howToPlayBtn),l.howToPlayBtn.visible=!1},update:function(){},
// MY FUNCTIONS ========================================================
startGame:function(e){e&&(i.difficulty=e.id),
// start game
r.game.state.start("play")},exitGame:function(){r.playAudio(r.btnClick),window.location.href=s.closeBtn.url},
// play myAudio
playAudio:function(e){i.playSound&&e.play()}},a.exports=o},{}],6:[function(e,a,t){
/* global window: false, Phaser: false, require: false, module: false*/
"use strict";
// PREFABS
function o(){}var n=e("../prefabs/popUp"),u,c,h,g={},b,f,m=[],r,i=-60,s=[],l=[],d=0,p=!1,y=!1;
// STATE variables
// define variables that will be assigned in init
// they are available to all functions in this state but not outside it
o.prototype={init:function(){
// reference to this state
// global object to pass items between states
c=(u=this).game.global,
// reference to the loaded json file
h=u.cache.getJSON("gameData"),
//
void 0===c.screens&&(c.screens=0),c.soundOn=!0,c.coins=0,f=!1,
// glob.difficulty is set in the menu screen
// this is short hand to the settings for the selected difficulty
b=h.difficulties[c.difficulty],
// glob.playerID is set in the player selection screen
// the first time you play the player selection screen wont have happened yet
// so we can set up variables
// BUG is this needed?
void 0===c.playerID&&(c.playerID=0,c.score=0,c.collected=0,c.screens=0)},preload:function(){u.btnClick=u.add.audio("btn-click"),u.lvlUp=u.add.audio("lvl-up"),u.wrong=u.add.audio("wrong"),u.correct=u.add.audio("correct")},create:function(){var e;
// turn on physics
p=!1,u.physics.startSystem(Phaser.Physics.ARCADE),
// create groups so we can stack things,
// first group created is at the bottom
u.baseGroup=this.add.group(),g.uiGroup=this.add.group();
// main ui elements
// Close button
// ui.closeBtn = state.add.button(json.closeBtn.x, json.closeBtn.y, 'pngSheet', function () {
//     glob.score = 0;
//     glob.coins = 0;
//     glob.screens = undefined;
//     glob.lives = undefined;
//     glob.playerID = 0;
//     state.game.state.start('menu');
// }, state, 'cb2', 'cb1', 'cb3', 'cb2');
// ui.closeBtn.anchor.set(0.5, 0.5);
// ui.closeBtn.height = 50;
// ui.closeBtn.width = 50;
// ui.closeBtn.input.useHandCursor = true;
var a=u.add.sprite(32,12,"pngSheet","score");g.uiGroup.add(a),
// SCORE text
g.score=u.add.text(h.score.x,h.score.y,h.score.prefix+c.score,h.score.style,g.uiGroup),g.score.anchor.setTo(0,.5),//left align
// Coin indicator
g.coinsGroup=u.add.group();for(var t=0;t<b.questionsGoal[c.screens];t++)g.coinsGroup.create(h.coinsGroup.x+50*t,h.coinsGroup.y,"pngSheet","coin-disk");
// Audio button
c.playSound?g.audioBtn=u.add.button(h.audioBtn.x,h.audioBtn.y,"pngSheet",u.audioToggle,u,"audioBtn_2","audioBtn_1","audioBtn_3","audioBtn_1",g.uiGroup):g.audioBtn=u.add.button(h.audioBtn.x,h.audioBtn.y,"pngSheet",u.audioToggle,u,"audioBtn_5","audioBtn_4","audioBtn_6","audioBtn_5",g.uiGroup),g.audioBtn.anchor.setTo(.5,.5),g.audioBtn.input.useHandCursor=!0,g.uiGroup.add(g.audioBtn),u.bg=u.add.sprite(0,0,"jpgSheet","bg-"+c.screens,u.baseGroup,u.baseGroup);
//            state.baseGroup.add(state.bg);
// make shuffled array of chest indexs and trim it down to the amount of question chests
for(var t=0;t<h.chestLocations[c.screens].length;t++)s.push(t);u.shuffle(s),s=s.slice(0,b.numOfquestions[c.screens]);for(var t=0;t<h.chestLocations[c.screens].length;t++)(e=u.add.button(h.chestLocations[c.screens][t].x,h.chestLocations[c.screens][t].y,"pngSheet",u.openChest,u,"chestBtn","chestBtn","chestBtn","chestBtn",u.baseGroup)).anchor.set(.5,.5),e.alpha=0,e.chestIndex=t,e.input.useHandCursor=!0,
// set if it is a question or bonus chest
e.chestType=-1!=s.indexOf(t)?"question":"bonus",e.found=!1,l.push(e);u.foundChestStar=u.add.sprite(-9999,-9999,"pngSheet","found-chest-star"),u.foundChestStar.anchor.set(.5,.5),u.foundChest=u.add.sprite(-9999,-9999,"pngSheet","found-chest-bonus"),u.foundChest.anchor.set(.5,.5),
// level up graphic and tweens
g.levelUp=u.add.sprite(u.game.width/2,u.game.height,"pngSheet","levelUp"),g.levelUp.anchor.setTo(.5,0),g.uiGroup.add(g.levelUp),g.levelUpInTween=u.add.tween(g.levelUp).to({y:u.game.height/2-100},500),g.levelUpOutTween=u.add.tween(g.levelUp).to({y:u.game.height},300),
// Only show instructions on first level
0===c.screens?
// Call popUp prefab to handle instruction pop up and add game start to call back
n(u,2,h,function(){u.restart()}):u.restart(),
// ===============================================
p=!0,u.randomEventSetUp()},update:function(){60<++i&&p&&y&&(u.randomEvent(),i=0)},disableChest:function(){u.activeChest.found=!0,u.activeChest.input.useHandCursor=!1,u.game.canvas.style.cursor="default"},toggleChestsHover:function(e){console.log(l.length-1);for(var a=l.length-1;0<=a;a--)!1===l[a].found&&(console.log("change"),l[a].input.useHandCursor="on"===e);u.game.canvas.style.cursor="default"},openChest:function(e){f&&((u.activeChest=e).found||(
// change chest image to correct version
u.foundChest.frameName="bonus"===e.chestType?"found-chest-bonus":"found-chest-question",u.foundChest.reset(e.x,e.y),u.foundChestStar.reset(e.x,e.y),
// reset angle so tween when added is same speed.
u.foundChestStar.angle=0,u.add.tween(u.foundChestStar).to({angle:360},1e3,Phaser.Easing.Linear.None,!0,0,-1),"bonus"===e.chestType?(u.disableChest(),
// increase score
c.score+=h.chestBonus,g.score.text=c.score,u.foundChest.showUntil=u.time.now,u.game.time.events.add(2e3,function(){
// make sure that multiple clicks on chest dont result in the last one closing too quickly
// at the end of each timer it checks to see if the chest needs to be closed now or wait.
u.foundChest.showUntil<u.time.now&&(u.foundChestStar.y=-9999,u.foundChest.y=-9999)},u)):(u.disableChest(),f=!1,u.toggleChestsHover("off"),u.foundChest.showUntil=u.time.now+1999,
// ask question
u.game.time.events.add(1e3,function(){
//gameOn = false;
//state.toggleChestsHover('off');
u.createQuestion(e)},u))))},createQuestion:function(){function e(e){var a,t,o;//  answer marking ?
// type of question
//***  text question ***
if(d.answers[e-1].text){o="text",t=h["answer"+e+"Btn"],a=u.add.button(t.x-20,t.y-43,"pngSheet",l,u,"question-screen-highlight","question-screen","question-screen","question-screen");var n=u.add.text(t.x,t.y,d.answers[e-1].text,{font:"20px Arial",fill:"black"});n.anchor.setTo(0,.5),
//state.add(atxt);
p.push(n)}else{
//*** image question ***
o="image",t=h["answerimage"+e+"Btn"],a=u.add.button(t.x,t.y,"pngSheet",l,u,"question-screen-square-highlight","question-screen-square","question-screen-square","question-screen-square");var r=u.add.sprite(t.x+8,t.y+8,"promptsSheet",d.answers[e-1].image);p.push(r)}if(a.input.useHandCursor=!0,a.correct=d.answers[e-1].correct,a.aid=e,
//state.add(amc);
p.push(a),d.answers[e-1].audio){var i="text"==o?{x:t.x-100,y:t.y-28}:{x:t.x+60,y:t.y-80},s=u.add.button(i.x,i.y,"pngSheet",u.audioClicked,u,"audioMiniBtnh","audioMiniBtn","audioMiniBtna","audioMiniBtn");s.aid=e,s.input.useHandCursor=!0,p.push(s)}var i="text"==o?{x:t.x+515,y:t.y-30}:{x:t.x+60,y:t.y+140};a.tick=u.add.sprite(i.x,i.y,"pngSheet","tick"),a.tick.alpha=0,p.push(a.tick),a.cross=u.add.sprite(i.x,i.y,"pngSheet","cross"),a.cross.alpha=0,p.push(a.cross),a.coin=u.add.sprite(i.x,i.y,"pngSheet","coin"),a.coin.alpha=0,p.push(a.coin)}
// BUG just push the sprite, not make var?
//            var mc = state.add.sprite(-30, 470, 'pngSheet', 'questionChar');
//            mcs.push(mc);
function l(e){if(!e.done){
// repeat through all answers
for(var a in e.correct?(c.score+=h.ansQCorrect,g.score.text=c.score,c.coins++,e.coin.alpha=1,u.correct.play(),
// add a coin to the next coin counter
g.coinsGroup.getAt(c.coins-1).loadTexture("pngSheet","coin-disk-full"),console.log(e)):(c.score+=h.ansQWrong,g.score.text=c.score,e.cross.alpha=1,u.wrong.play(),u.wrong.play(),
//re-enable chest
u.activeChest.found=!1,u.activeChest.input.useHandCursor=!0,u.game.canvas.style.cursor="default"),p)p[a].done=!0,
//show tick if made incorrect answer
p[a].aid&&b.showIncorrect&&p[a].correct&&(p[a].tick.alpha=1);u.game.time.events.add(2e3,function(){t(e)},u)}}function t(e){
// hide chest
u.foundChestStar.y=-9999,u.foundChest.y=-9999;
// stop all question audio
for(var a=o.length-1;0<=a;a--)o[a].stop(),o.splice(a,1);
// restart background music which was temporarily paused for questions.
for(var a in!0===c.playSound&&c.music.resume(),p)p[a].destroy();e.correct&&c.coins>=b.questionsGoal[c.screens]?u.levelupOrEndGame():(u.toggleChestsHover("on"),f=!0)}var d,p=[],o=[];// the selected question and answers from data.json
// store question audio so we can stop it later
d=u.selectItem(b.pool,m),
// turn off background music during questions
!0===c.playSound&&c.music.pause();
// Add background
var a=u.add.sprite(h.questionPanelTop.x,h.questionPanelTop.y,"pngSheet","question-top");p.push(a);var n=u.add.sprite(h.questionPanelBottom.x,h.questionPanelBottom.y,"pngSheet","question-bottom");
//***  text question ***
if(p.push(n),d.prompt.text){var r=u.add.text(h.questionPos.x,h.questionPos.y,d.prompt.text,{font:"20px Arial",fill:"black",wordWrap:!0,wordWrapWidth:480});r.anchor.setTo(0,.5),p.push(r)}else if(d.prompt.image){
//*** image question ***
var i=u.add.sprite(h.questionimagePos.x,h.questionimagePos.y,"promptsSheet",d.prompt.image);i.anchor.setTo(.5,.5),p.push(i)}
// This should not be a separate function could go straight into if below
if(u.audioClickedQuestion=function(){for(var e=o.length-1;0<=e;e--)o[e].stop();var a=u.add.audio(d.prompt.audio);o.push(a),a.play()},d.prompt.audio){var s=u.add.button(h.questionPos.x-100,h.questionPos.y-25,"pngSheet",u.audioClickedQuestion,u,"audioMiniBtnh","audioMiniBtn","audioMiniBtna","audioMiniBtn");s.input.useHandCursor=!0,p.push(s)}u.audioClicked=function(e){for(var a=o.length-1;0<=a;a--)o[a].stop();var t=u.add.audio(d.answers[e.aid-1].audio);o.push(t),t.play()},e(1),e(2),e(3)},levelupOrEndGame:function(){c.screens++,c.screens<3?(y=!1,
//state.add(ui.levelUp);
u.playAudio(u.lvlUp),g.levelUpInTween.start(),u.game.time.events.add(2e3,function(){g.levelUpOutTween.start()},u),u.game.time.events.add(4e3,function(){u.increaseLevel()},u)):(y=!1,u.game.time.events.add(2e3,function(){u.increaseLevel()},u))},increaseLevel:function(){u.game.state.start("gameover"),// force game to end, not to display gameover screen
c.coins=0,//reset correct answers ready for next level
// BUG does this need to be global?
3===c.screens?(c.gameover=1,this.endGame()):u.game.state.start("play")},
// reset everything ready to play again
restart:function(){f=!0},endGame:function(){u.game.state.start("gameover")},exitGame:function(){u.btnClick.play(),window.location.href=h.closeBtn.url},randomEventSetUp:function(){y=!1,0===c.screens?(u.bg0Timer=4,
// create the sprite
u.dolphin=u.baseGroup.create(892,444,"pngSheet","dolphin-start"),u.dolphin.smoothed=!1,u.dolphin.animations.add("jump",["dolphin-start","dolphin-0","dolphin-1","dolphin-1","dolphin-2","dolphin-3","dolphin-4","dolphin-5","dolphin-start"],9,!1,!1),u.shark=u.baseGroup.create(396,104,"pngSheet","shark-start"),u.shark.smoothed=!1,u.shark.animations.add("swim",["shark-start","shark-6","shark-7","shark-0","shark-1","shark-2","shark-3","shark-4","shark-5","shark-start"],5,!1,!1),u.baseGroup.create(428,135,"pngSheet","shark-palm"),u.whalePeep=u.baseGroup.create(80,344,"pngSheet","whalePeep-start"),u.whalePeep.smoothed=!1,u.whalePeep.animations.add("peep",["whalePeep-start","whalePeep-0","whalePeep-1","whalePeep-2","whalePeep-3","whalePeep-4","whalePeep-5","whalePeep-6","whalePeep-7","whalePeep-8","whalePeep-9","whalePeep-8","whalePeep-7","whalePeep-6","whalePeep-5","whalePeep-4","whalePeep-3","whalePeep-2","whalePeep-1","whalePeep-0","whalePeep-start"],10,!1,!1),u.whaleSplash=u.baseGroup.create(80,344,"pngSheet","whaleSplash-start"),u.whaleSplash.smoothed=!1,u.whaleSplash.animations.add("splash",["whaleSplash-start","whaleSplash-0","whaleSplash-1","whaleSplash-2","whaleSplash-3","whaleSplash-4","whaleSplash-5","whaleSplash-6","whaleSplash-7","whaleSplash-8","whaleSplash-9","whaleSplash-10","whaleSplash-11","whaleSplash-12","whaleSplash-13","whaleSplash-14","whaleSplash-15","whaleSplash-16","whaleSplash-start"],10,!1,!1)):1===c.screens?(u.bg1Timer=4,u.bird=u.baseGroup.create(-9999,-9999,"pngSheet","bird-0"),u.bird.smoothed=!1,u.bird.animations.add("bird",["bird-0","bird-1","bird-2","bird-3","bird-4","bird-3","bird-2","bird-1"],9,!0,!1)):(u.bg2Timer=4,u.gate=u.baseGroup.create(249,457,"pngSheet","bg-2-gate-0"),u.gate.animations.add("flash",["bg-2-gate-0","bg-2-gate-1"]),u.gate.animations.play("flash",1,!0),
//add floating balloon
u.balloon=u.baseGroup.create(-9999,-9999,"pngSheet","bg-2-balloon-0"),u.balloon.anchor.set(.5,.5),u.balloon.angle=-10,u.balloon.starts=[{x:175,y:606,balloonScale:1},{x:286,y:354,balloonScale:.9},{x:674,y:250,balloonScale:.8}],u.balloon.randStarts=[],
//add second balloon
u.balloon2=u.baseGroup.create(-9999,-9999,"pngSheet","bg-2-balloon-0"),u.balloon2.anchor.set(.5,.5),u.balloon2.angle=-10,u.balloon2.starts=u.balloon.starts,
//add third balloon
u.balloon3=u.baseGroup.create(-9999,-9999,"pngSheet","bg-2-balloon-0"),u.balloon3.anchor.set(.5,.5),u.balloon3.angle=-10,u.balloon3.starts=u.balloon.starts,
//add fourth balloon
u.balloon4=u.baseGroup.create(-9999,-9999,"pngSheet","bg-2-balloon-0"),u.balloon4.anchor.set(.5,.5),u.balloon4.angle=-10,u.balloon4.starts=u.balloon.starts,
//add fifth balloon
u.balloon5=u.baseGroup.create(-9999,-9999,"pngSheet","bg-2-balloon-0"),u.balloon5.anchor.set(.5,.5),u.balloon5.angle=-10,u.balloon5.starts=u.balloon.starts,
//add sixth balloon
u.balloon6=u.baseGroup.create(-9999,-9999,"pngSheet","bg-2-balloon-0"),u.balloon6.anchor.set(.5,.5),u.balloon6.angle=-10,u.balloon6.starts=u.balloon.starts,
//add seventh balloon
u.balloon7=u.baseGroup.create(-9999,-9999,"pngSheet","bg-2-balloon-0"),u.balloon7.anchor.set(.5,.5),u.balloon7.angle=-10,u.balloon7.starts=u.balloon.starts,
// add balloon groups for it to emerge from
u.baseGroup.create(112,573,"pngSheet","bg-2-balloons"),u.baseGroup.create(230,330,"pngSheet","bg-2-balloons").scale.setTo(.9,.9),u.baseGroup.create(628,226,"pngSheet","bg-2-balloons").scale.setTo(.8,.8)),y=!0},randomEvent:function(){if(y){var e=2e3/475,a=[{x1:330,y1:-56,x2:-61,y2:335,length:475},{x1:630,y1:-56,x2:-61,y2:630,length:890},{x1:918,y1:-56,x2:215,y2:704,length:995},{x1:1024,y1:185,x2:505,y2:704,length:735},{x1:1024,y1:475,x2:795,y2:704,length:325}];// each path has a length I work out how fast I want it to fly along the first path
// then divid the time by the path length
if(0===c.screens){if(u.bg0Timer--,0===u.bg0Timer){u.bg0Timer=u.rnd.integerInRange(2,4);
// choose random event
var t=u.rnd.integerInRange(0,3);0===t?u.dolphin.play("jump"):1===t?u.shark.play("swim"):2===t?u.whalePeep.play("peep"):u.whaleSplash.play("splash")}}else if(1===c.screens)u.bg1Timer--,
// set new random interval
0===u.bg1Timer&&(
// set new random interval
u.bg1Timer=u.rnd.integerInRange(3,4),
// dont trigger new flight if already flying
u.bird.flying||(
//choose path
u.bird.play("bird"),u.bird.path=a[u.rnd.integerInRange(0,a.length-1)],
// reset sprite
u.bird.flying=!0,u.bird.x=u.bird.path.x1,u.bird.y=u.bird.path.y1,
// add tween
u.add.tween(u.bird).to({x:u.bird.path.x2,y:u.bird.path.y2},e*u.bird.path.length,"Linear",!0).onComplete.addOnce(function(){u.bird.flying=!1})));else if(u.bg2Timer--,0===u.bg2Timer){
// set new random interval for a balloon
u.bg2Timer=u.rnd.integerInRange(4,8);
// Balloons float away
var o=u.selectItem(u.balloon.starts,u.balloon.randStarts);
// first balloon
// reset balloon and select random color
u.balloon.frameName="bg-2-balloon-"+u.rnd.integerInRange(0,4),u.balloon.x=o.x-7,u.balloon.y=o.y+12,u.balloon.scale.setTo(o.balloonScale,o.balloonScale),u.balloon.angle=-10,
// add tweens to make it wobble and float
u.add.tween(u.balloon).to({y:-88},4e3,Phaser.Easing.Linear.None,!0,0),u.add.tween(u.balloon).to({angle:10},1e3,"Linear",!0,0,-1,!0);
// second balloon
var n=Math.random();.5<n&&(
// reset balloon and select random color
u.balloon2.x=o.x+5,u.balloon2.y=o.y+15,u.balloon2.scale.setTo(o.balloonScale,o.balloonScale),u.balloon2.angle=10,u.balloon2.frameName="bg-2-balloon-"+u.rnd.integerInRange(0,4),
// add tweens to make it wobble and float
u.add.tween(u.balloon2).to({y:-135},4500,Phaser.Easing.Linear.None,!0,0),u.add.tween(u.balloon2).to({angle:-10},3e3,"Linear",!0,0,-1,!0)),n=0;
// third balloon
var r=Math.random();.5<r&&(
// reset balloon and select random color
u.balloon3.x=o.x,u.balloon3.y=o.y,u.balloon3.scale.setTo(o.balloonScale,o.balloonScale),u.balloon3.angle=10,u.balloon3.frameName="bg-2-balloon-"+u.rnd.integerInRange(0,4),
// add tweens to make it wobble and float
u.add.tween(u.balloon3).to({y:-110},3e3,Phaser.Easing.Linear.None,!0,0),u.add.tween(u.balloon3).to({angle:-10},2e3,"Linear",!0,0,-1,!0)),r=0;
// fourth balloon
var i=Math.random();.5<i&&(
// reset balloon and select random color
u.balloon4.x=o.x-30,u.balloon4.y=o.y-15,u.balloon4.scale.setTo(o.balloonScale,o.balloonScale),u.balloon4.angle=-10,u.balloon4.frameName="bg-2-balloon-"+u.rnd.integerInRange(0,4),
// add tweens to make it wobble and float
u.add.tween(u.balloon4).to({y:-150},5e3,Phaser.Easing.Linear.None,!0,0),u.add.tween(u.balloon4).to({angle:10},2e3,"Linear",!0,0,-1,!0)),i=0;
// fifth balloon
var s=Math.random();.5<s&&(
// reset balloon and select random color
u.balloon5.x=o.x+30,u.balloon5.y=o.y+20,u.balloon5.scale.setTo(o.balloonScale,o.balloonScale),u.balloon5.angle=10,u.balloon5.frameName="bg-2-balloon-"+u.rnd.integerInRange(0,4),
// add tweens to make it wobble and float
u.add.tween(u.balloon5).to({y:-140},4e3,Phaser.Easing.Linear.none,!0,0),u.add.tween(u.balloon5).to({angle:-10},2e3,"Linear",!0,0,-1,!0)),s=0;
// sixth balloon
var l=Math.random();.5<l&&(
// reset balloon and select random color
u.balloon6.x=o.x+30,u.balloon6.y=o.y+15,u.balloon6.scale.setTo(o.balloonScale,o.balloonScale),u.balloon6.angle=10,u.balloon6.frameName="bg-2-balloon-"+u.rnd.integerInRange(0,4),
// add tweens to make it wobble and float
u.add.tween(u.balloon6).to({y:-80},4500,Phaser.Easing.Linear.None,!0,0),u.add.tween(u.balloon6).to({angle:-10},2e3,"Linear",!0,0,-1,!0)),l=0;
// fifth balloon
var d=Math.random();.5<d&&(
// reset balloon and select random color
u.balloon7.x=o.x-25,u.balloon7.y=o.y-25,u.balloon7.scale.setTo(o.balloonScale,o.balloonScale),u.balloon7.angle=-10,u.balloon7.frameName="bg-2-balloon-"+u.rnd.integerInRange(0,4),
// add tweens to make it wobble and float
u.add.tween(u.balloon7).to({y:-120},5e3,Phaser.Easing.Linear.None,!0,0),u.add.tween(u.balloon7).to({angle:10},2e3,"Linear",!0,0,-1,!0)),d=0}}},
// ====================================================================
// Helper functions
// activate and deactive non esential sounds
audioToggle:function(){
// always play button click
u.btnClick.play(),
// set playSound to the opposite of what it is
c.playSound=!0!==c.playSound,
// if background music is playing pause it and vise versa
c.music.paused?(c.music.resume(),g.audioBtn.setFrames("audioBtn_2","audioBtn_1","audioBtn_3","audioBtn_2")):(c.music.pause(),
// change button frames so show audio is off
g.audioBtn.setFrames("audioBtn_5","audioBtn_4","audioBtn_6","audioBtn_5"))},
// play button audio if playSound is ture
playAudio:function(e){c.playSound&&e.play()},
// this duplicates the myArray and shuffles it, it then exstracts 1 item from it each time
//it is called until the copied array is empty when it makes a new array
selectItem:function(e,a){var t="",o=1;
// if shuffledArray is empty refill it
return 0===a.length&&(
// shuffle a copy of myArray
a=u.shuffle(e.slice(0)))[0]===r&&(
// find a random position in the rest of the array to swap it with
o=Math.floor(Math.random()*(a.length-1)+1),
// swap positions
t=a[0],a[0]=a[o],a[o]=t),
// exstract the first item from shuffledArray
r=a.shift()},
// helper function for shuffling an array
shuffle:function(e){
// While there remain elements to shuffle...
for(var a=e.length,t,o;0!==a;)
// Pick a remaining element...
o=Math.floor(Math.random()*a),
// And swap it with the current element.
t=e[a-=1],e[a]=e[o],e[o]=t;return e}},a.exports=o},{"../prefabs/popUp":2}],7:[function(e,a,t){
/* global module: false*/
"use strict";
// define variables that will be assigned in init
// they are available to all functions in this state but not outside it
function o(){this.asset=null,this.ready=!1}var d,n,p;o.prototype={init:function(){
// reference to this state
// global object to pass items between states
n=(d=this).game.global,
// reference to the loaded json file
p=d.cache.getJSON("gameData")},preload:function(){
// remove dom loading wheel
var e=document.querySelector("#load-div");e.parentNode.removeChild(e),
// add loading bar to game
d.loadingBar=d.add.sprite(d.game.width/2,d.game.height/2,"preloader"),d.loadingBar.anchor.setTo(.5,.5),d.load.setPreloadSprite(d.loadingBar);
// load all the difficulties assets
for(
// Once all has been loaded go to menu state
//state.load.onLoadComplete.addOnce(state.onLoadComplete, state);
// PROMPT AUDIO
// record previously loaded audio so dont load twice
var a=[],t=0;t<p.difficulties.length;t++)for(var o=p.difficulties[t],n=0;n<o.pool.length;n++){var r=p.difficulties[t].pool[n];
// prompt audio
-1===a.indexOf(r.prompt.audio)&&""!==r.prompt.audio&&(d.load.audio(""+r.prompt.audio,[p.instancePath+"audio/"+r.prompt.audio+".ogg",p.instancePath+"audio/"+r.prompt.audio+".mp3"]),a.push(r.prompt.audio));for(var i=0;i<3;i++)
// answer audio
-1===a.indexOf(r.answers[i].audio)&&""!==r.answers[i].audio&&(d.load.audio(""+r.answers[i].audio,[p.instancePath+"audio/"+r.answers[i].audio+".ogg",p.instancePath+"audio/"+r.answers[i].audio+".mp3"]),a.push(r.answers[i].audio))}
// DEFAULT AUDIO
var s=["bg-music","btn-click","correct","wrong","lvl-up","good-job"];for(var l in s)d.load.audio(s[l],[p.templatePath+"audio/"+s[l]+".ogg",p.templatePath+"audio/"+s[l]+".mp3"]);d.load.atlasJSONHash("jpgSheet",p.templatePath+"jpg.jpg",p.templatePath+"jpg.json"),d.load.atlasJSONHash("pngSheet",p.templatePath+"png.png",p.templatePath+"png.json"),d.load.atlasJSONHash("promptsSheet",p.instancePath+"prompts.jpg",p.instancePath+"prompts.json"),
// Once all has been loaded go to menu state
d.load.onLoadComplete.addOnce(d.onLoadComplete,d)},create:function(){
// loading bar
d.loadingBar.cropEnabled=!1},update:function(){d.ready&&d.game.state.start("menu")},onLoadComplete:function(){d.ready=!0}},a.exports=o},{}]},{},[1]);