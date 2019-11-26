(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//global variables
window.onload = function () {
  var game = new Phaser.Game(1024, 704, Phaser.CANVAS, 'phaser-game');
  
  game.global = {};

  // Game States
  game.state.add('boot', require('./states/boot'));
  game.state.add('gameover', require('./states/gameover'));
  game.state.add('menu', require('./states/menu'));
  game.state.add('play', require('./states/play'));
  game.state.add('preload', require('./states/preload'));
  

  game.state.start('boot');
};
},{"./states/boot":3,"./states/gameover":4,"./states/menu":5,"./states/play":6,"./states/preload":7}],2:[function(require,module,exports){
 'use strict';

var popUp = function (state, popUpNumb, json, callBack) {



    state.tintOverlay = state.add.graphics(0, 0);
    state.tintOverlay.beginFill('black');
    state.tintOverlay.drawRect(0, 0, 1024, 704);
    state.tintOverlay.alpha = 0.5;
    state.tintOverlay.fadeOut = state.add.tween(state.tintOverlay).to({
        alpha: 0
    }, 400);


    // player select overlay ----------------------------------------------------------
    state.popUpGroup = state.add.group();
    state.popUpGroup.y = state.game.height;
    var popTweenOut = state.add.tween(state.popUpGroup).to({
        y: -704
    }, 400);
    var popTweenIn = state.add.tween(state.popUpGroup).to({
        y: 0
    }, 400);


    function closePrompt() {
        popTweenOut.start();
        state.playAudio(state.btnClick);
        popTweenOut.onComplete.addOnce(function () {
            if (popUpNumb === 1) {
                popUpNumb = 2;
                state.popUpGroup.y = 704;
                popTweenIn.start();
                popUp.loadTexture('jpgSheet', 'selectChar');
                selectPlayer();
            } else {
                state.tintOverlay.fadeOut.start();
                // trigger start of game
                if (callBack !== undefined){ callBack();}
            }
        }, state);
    }

    // playerSelect = new CreateOverlay2(state.game, 'black', 0, closePrompt);
    var popUp = state.add.sprite(state.game.width / 2, state.game.height / 2, 'pngSheet', 'howToPlay');
    popUp.anchor.setTo(0.5, 0.5);
    state.popUpGroup.add(popUp);

    var playBtn = state.add.button(512, 626, 'pngSheet', function () {
        closePrompt();
    }, state, 'pb2', 'pb1', 'pb3', 'pb1', state.popUpGroup);
    playBtn.anchor.setTo(0.5, 0.5);
    playBtn.input.useHandCursor = true;

    function selectPlayer() {

        // add buttons
        var player1 = state.add.sprite(json.playerSelect[0].x, json.playerSelect[0].y, 'pngSheet', 'empty');
        player1.anchor.setTo(0.5, 0.5);
        player1.width = json.playerSelect[0].width;
        player1.height = json.playerSelect[0].height;
        player1.inputEnabled = true;
        player1.events.onInputDown.add(function () {
            this.changePlayer(0);
        }, state);
        state.popUpGroup.add(player1);

        // add buttons
        var player2 = state.add.sprite(json.playerSelect[1].x, json.playerSelect[1].y, 'pngSheet', 'empty');
        player2.anchor.setTo(0.5, 0.5);
        player2.width = json.playerSelect[1].width;
        player2.height = json.playerSelect[1].height;
        player2.inputEnabled = true;
        player2.events.onInputDown.add(function () {
            state.changePlayer(1);
        }, state);
        state.popUpGroup.add(player2);

        var tick = state.add.image(json.playerSelect[0].x + 80, json.playerSelect[0].y + 100, 'pngSheet', 'tick');
        state.popUpGroup.add(tick);

    }
    state.popUpGroup.y = 0;

};
module.exports = popUp;


},{}],3:[function(require,module,exports){
/* global Phaser: false, module: false, dataPath: false*/

'use strict';

// define variables that will be assigned in init
	// they are available to all functions in this state but not outside it
	var state;
	var glob;
//	var json;

	function Boot() {}

	Boot.prototype = {

		init: function () {

		// reference to this state
		state = this;
		// global object to pass items between states
		glob = state.game.global;

		state.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		state.scale.pageAlignHorizontally = true;
		state.scale.pageAlignVertically = true;
		// set minimum and maximum game sizes
		state.scale.setMinMax(512, 352, 1024, 704); 

		glob.playSound = true;

		},
		preload: function () {
			state.load.image('preloader', 'assets/elt/students/templatescontent/opgames/preloader.gif');
			// All our game data and settings
			state.load.json('gameData', dataPath);
		},
		create: function () {
			state.game.input.maxPointers = 2;
			state.game.state.start('preload');
		}
	};

module.exports = Boot;
},{}],4:[function(require,module,exports){
/* global module: false, localStorage: false*/

'use strict';

function GameOver() {}

var state;
var glob;
var json;

GameOver.prototype = {
     init: function () {
        state = this;
        // global
        glob = state.game.global;
        // link to data
        json = state.cache.getJSON('gameData');
    },
    preload: function () {
        
        state.btnClick = this.add.audio('btn-click');
        
        // load audio depending on how well they have done
        // this game has no nice try so it wont be triggered
        if (glob.gameover === 0) {
            state.scoreAudio = state.add.audio('nice-try');
        } else {
            state.scoreAudio = state.add.audio('good-job');
        } 
        
        
        // two character games will store scores separately if only one use first location  
        if (glob.playerID === undefined) {glob.playerID = 0;}
        
        // Does topScores exist?
        if (glob.topScores === undefined)
        {
            // try and get them from local storage and convert back from a string to a proper object
            glob.topScores = JSON.parse(localStorage.getItem(json.localStorageTag));
            // check again if no joy, set all to 0 (last item is highest of all scores)
            if (glob.topScores === null) {glob.topScores = [0,0,0];}
        }
                
        if (glob.score === undefined){glob.score = 0;}
        if (glob.screens === undefined){glob.screens = 0;}

        var updated = false;
        // if this score is highest for this character update topScores
        if (glob.score > glob.topScores[glob.playerID]) {
            glob.topScores[glob.playerID] = glob.score;
            updated = true;
            // if it is higher than the best score update that as well (the last number)
            if (glob.score > glob.topScores[glob.topScores.length-1]) {
                glob.topScores[glob.topScores.length-1] = glob.score;
            }
        }
        // if any top scores were updated then convert to a string and save to local storage
        if (updated)
        {
            localStorage.setItem(json.localStorageTag, JSON.stringify(glob.topScores));
        }


    },
    
    create: function () { 
        
        state.add.sprite(0, 0, 'jpgSheet', 'menuBG');

        var uiGroup = state.add.group();
        
        var scoreBoard = state.add.sprite(0, 0, 'pngSheet', 'finalScorePlain', uiGroup);
        if (glob.gameover === 0) {
            state.add.sprite(0, 0, 'pngSheet', 'finalscoreGO', uiGroup);
        } else {
            state.add.sprite(0, 0, 'pngSheet', 'finalscoreGJ', uiGroup);
        } 
        
        var textStyle = {
            font: '14px Arial',
            fill: 'black',
            align: 'left'
        };
        
        // This score
        var thisScore = state.game.add.text(245, 195, ''+glob.score, textStyle);
        uiGroup.add(thisScore);
        
        var clearedScreens = state.game.add.text(276, 286, ''+glob.screens, textStyle);
        uiGroup.add(clearedScreens);
        
        // Previous best
        if(glob.topScores !== undefined){
            state.previousText = state.game.add.text(290, 374, ''+glob.topScores[glob.topScores.length-1], textStyle);
            uiGroup.add(state.previousText);
        }

        uiGroup.x = (state.game.width/2) - (scoreBoard.width/2);
        uiGroup.y = (state.game.height/2) - (scoreBoard.height/2) -60;
        
        var playAgain = state.add.button(json.playAgain.x, json.playAgain.y, 'pngSheet', state.replay, state, 'pab2', 'pab1', 'pab3', 'pab2');
        playAgain.anchor.set(0.5, 0.5);
        
        if (glob.playSound) { 
            glob.music.pause();
            state.scoreAudio.play(); 
        }
        
    },
	
    update: function () {
    },
 
    replay: function () {
        state.scoreAudio.stop();
        glob.playerID = undefined;
        state.game.state.start('menu');
    },

    // play button audio if playSound is ture
    playAudio: function(myAudio) {
        if (glob.playSound){
            myAudio.play();
        }
    }


 
};
module.exports = GameOver;
},{}],5:[function(require,module,exports){
/* global window: false, Phaser: false, module: false*/


// define variables that will be assigned in init
// they are available to all functions in this state but not outside it
var state;
var glob;
var json;
var ui = {};

function Menu() {    
}

Menu.prototype = {
    
    init: function() {
        // reference to this state
        state = this;
        // global object to pass items between states
        glob = state.game.global;
        // reference to the loaded json file
        json = state.cache.getJSON('gameData');
    },
    
    preload: function() {
        // Store the button click audio
        state.btnClick = this.add.audio('btn-click');
    },
    

    create: function () {
         //if background music doesn't exist create it and start playing 
         if (!glob.music) {
             glob.music = state.add.audio('bg-music', 1, true);
             glob.music.play();
         } else {
             // resume background music after game restarted
             if (glob.playSound === true){glob.music.resume();}
         }
        // bug fix for audio nolonger looping once it has been paused
        glob.music.onLoop.add(function(){
            if(!glob.playSound.isPlaying && glob.playSound === true ){
                glob.music.play();
            }
        });

        // Add background
        state.add.sprite(0, 0, 'jpgSheet', 'menuBG');
     
        // Game logo
        //var gameLogo = state.add.image(state.game.width / 2, state.game.height / 2 - 70, 'pngSheet', 'gameLogo.png');
        var gameLogo = state.add.image(state.game.width / 2, state.game.height / 2 - 70, 'pngSheet', 'gameLogo');
        gameLogo.anchor.setTo(0.5, 0.5);

        //drop down game logo
        state.add.tween(gameLogo).from( { y: -200 }, 2000, 'Bounce', true);

         // UI GROUP (make it easier to bring to top)    
         ui.uiGroup = state.add.group();

        // Close button
        var closeBtn = state.add.button(json.closeBtn.x, json.closeBtn.y, 'pngSheet', state.exitGame, state, 'cb2', 'cb1', 'cb3', 'cb2');
        closeBtn.anchor.set(0.5, 0.5);
        closeBtn.height = 50;
        closeBtn.width = 50;
        closeBtn.input.useHandCursor = true;
        //force smoothed button counteracts the reduction of sprite, can remove if sprite resized
        closeBtn.smoothed = true;
        ui.uiGroup.add(closeBtn);


        
        // Copyright text
        var copyRightText = state.add.text(json.copyright.x,json.copyright.y, String.fromCharCode(169) + json.copyright.text, {
            'font': '14px Arial',
            'fill': 'white'
        });
        copyRightText.anchor.setTo(0.5, 0.5);
        copyRightText.alpha = 0.7;
        ui.uiGroup.add(copyRightText);
           
        // Difficulty 1 button
        var diff1Btn = state.add.button(json.diff1Btn.x, json.diff1Btn.y, 'pngSheet', state.startGame, state, 'db12', 'db11', 'db13', 'db12');
        diff1Btn.anchor.set(0.5, 0.5);
        diff1Btn.id = 0;
        ui.uiGroup.add(diff1Btn);
        // Difficulty 2 button
        var diff2Btn = state.add.button(json.diff2Btn.x, json.diff2Btn.y, 'pngSheet', state.startGame, state, 'db22', 'db21', 'db23', 'db22');
        diff2Btn.anchor.set(0.5, 0.5);
        diff2Btn.id = 1;
        ui.uiGroup.add(diff2Btn);
        // Difficulty 3 button
        var diff3Btn = state.add.button(json.diff3Btn.x, json.diff3Btn.y, 'pngSheet', state.startGame, state, 'db32', 'db31', 'db33', 'db32');
        diff3Btn.anchor.set(0.5, 0.5);
        diff3Btn.id = 2;
        ui.uiGroup.add(diff3Btn);
        
        // how to play
		ui.howToPlayBg = state.add.sprite(0, 0, 'jpgSheet', 'menuBG');
        ui.uiGroup.add(ui.howToPlayBg);
		ui.howToPlayBg.visible = false;
		
		ui.howToPlay = state.add.sprite(state.game.width/2, state.game.height/2, 'pngSheet', 'howToPlay');
        ui.howToPlay.anchor.set(0.5, 0.5);
        ui.howToPlay.scale.set(0.0);
        ui.uiGroup.add(ui.howToPlay);
        ui.howToPlayTween = state.add.tween(ui.howToPlay.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, false);

        ui.howToPlayBtn = state.add.button(state.game.width/2, state.game.height/2+280, 'pngSheet', state.replay, state, 'pb1', 'pb2', 'pb3', 'pb3');
        ui.howToPlayBtn.anchor.set(0.5, 0.5);
        ui.uiGroup.add(ui.howToPlayBtn);
        ui.howToPlayBtn.visible = false;
    },
                                                                     
                                        
    update: function () {

    },
    
    
    // MY FUNCTIONS ========================================================
    
    startGame: function (btn) {
		if (btn){ glob.difficulty = btn.id; }
		// start game	
		state.game.state.start('play');
    },
    
    exitGame: function() {
        state.playAudio(state.btnClick);
        window.location.href = json.closeBtn.url;
    },
    
    // play myAudio 
    playAudio: function(myAudio) {
        if (glob.playSound) { myAudio.play(); }
    },

};

module.exports = Menu;

},{}],6:[function(require,module,exports){
/* global window: false, Phaser: false, require: false, module: false*/
'use strict';

    // PREFABS
    var popUp = require('../prefabs/popUp');

    // STATE variables
    // define variables that will be assigned in init
    // they are available to all functions in this state but not outside it
    var state, glob, json;     
    var ui = {};
    var diff, gameOn ;
    var shuffledQuestions = [];
    var thisItem;
    var randEventsTimer = -60;
    var chestIndexs = [];
    var chestArray = [];

    var questionNum = 0;
    var createLoaded = false;
    var randomEventSetupLoaded = false;

    function Play() {}  

    Play.prototype = {  

        init: function () {
            // reference to this state
            state = this;
            // global object to pass items between states
            glob = state.game.global;
            // reference to the loaded json file
            json = state.cache.getJSON('gameData');
            
            // 
            if (glob.screens === undefined){ glob.screens = 0 ;}
            glob.soundOn = true; 
            glob.coins = 0; 
            gameOn = false;
            
            // glob.difficulty is set in the menu screen
            // this is short hand to the settings for the selected difficulty
            diff = json.difficulties[glob.difficulty];
            
            // glob.playerID is set in the player selection screen
            // the first time you play the player selection screen wont have happened yet
            // so we can set up variables
            // BUG is this needed?
            if (glob.playerID === undefined){
                glob.playerID = 0; 
                glob.score = 0; 
                glob.collected = 0;
                glob.screens = 0 ;
            }
        },

		
        preload: function () {
            state.btnClick = state.add.audio('btn-click');  
            state.lvlUp = state.add.audio('lvl-up');      
            state.wrong = state.add.audio('wrong');    
            state.correct = state.add.audio('correct');
        },

        create: function () {
            createLoaded = false;
            var thisChest; 
            
            // turn on physics
            state.physics.startSystem(Phaser.Physics.ARCADE);
            // create groups so we can stack things,
            // first group created is at the bottom
            state.baseGroup = this.add.group();

            ui.uiGroup = this.add.group();
            // main ui elements
            // Close button
            ui.closeBtn = state.add.button(json.closeBtn.x, json.closeBtn.y, 'pngSheet', function () {
                glob.score = 0;
                glob.coins = 0;
                glob.screens = undefined;
                glob.lives = undefined; 
                glob.playerID = 0;
                state.game.state.start('menu');
            }, state, 'cb2', 'cb1', 'cb3', 'cb2');
            ui.closeBtn.anchor.set(0.5, 0.5);
            ui.closeBtn.height = 50;
            ui.closeBtn.width = 50;
            ui.closeBtn.input.useHandCursor = true;
 
            var scorebg = state.add.sprite(32, 12, 'pngSheet', 'score');
            ui.uiGroup.add(scorebg);
            // SCORE text
            ui.score = state.add.text(json.score.x, json.score.y, json.score.prefix + glob.score, json.score.style, ui.uiGroup);
            ui.score.anchor.setTo(0, 0.5); //left align
            // Coin indicator 
            ui.coinsGroup = state.add.group();
            for (var i = 0; i < diff.questionsGoal[glob.screens]; i++) {
                ui.coinsGroup.create(json.coinsGroup.x + (i * 50), json.coinsGroup.y, 'pngSheet', 'coin-disk');
            }  
            // Audio button
            ui.audioBtn = state.add.button(json.audioBtn.x, json.audioBtn.y, 'pngSheet', state.audioToggle, state, 'audioBtn_2', 'audioBtn_1', 'audioBtn_3', 'audioBtn_1', ui.uiGroup);
            ui.audioBtn.anchor.setTo(0.5, 0.5);
            ui.audioBtn.input.useHandCursor = true;

            ui.uiGroup.add(ui.audioBtn);
                    
            state.bg = state.add.sprite(0, 0, 'jpgSheet', 'bg-'+glob.screens, state.baseGroup, state.baseGroup);

//            state.baseGroup.add(state.bg);
            
            // make shuffled array of chest indexs and trim it down to the amount of question chests 
            for (var i = 0; i < json.chestLocations[glob.screens].length; i++) {chestIndexs.push(i);}
            state.shuffle(chestIndexs);
            chestIndexs = chestIndexs.slice(0, diff.numOfquestions[glob.screens]);

            for (var i = 0; i < json.chestLocations[glob.screens].length; i++) {
                thisChest = state.add.button(json.chestLocations[glob.screens][i].x, json.chestLocations[glob.screens][i].y, 'pngSheet', state.openChest, state, 'chestBtn', 'chestBtn', 'chestBtn', 'chestBtn', state.baseGroup);
                thisChest.anchor.set(0.5, 0.5);
                thisChest.alpha = 0;
                thisChest.chestIndex = i;
                thisChest.input.useHandCursor = true;
                // set if it is a question or bonus chest
                thisChest.chestType = chestIndexs.indexOf(i) != -1 ? 'question' : 'bonus';
                thisChest.found = false;
                chestArray.push(thisChest);
            }   
            

            state.foundChestStar = state.add.sprite(-9999, -9999, 'pngSheet', 'found-chest-star');
            state.foundChestStar.anchor.set(0.5, 0.5);

            state.foundChest = state.add.sprite(-9999, -9999, 'pngSheet', 'found-chest-bonus');
            state.foundChest.anchor.set(0.5, 0.5);
            
            // level up graphic and tweens
            ui.levelUp = state.add.sprite(state.game.width / 2, state.game.height, 'pngSheet', 'levelUp');
            ui.levelUp.anchor.setTo(0.5, 0);
            ui.uiGroup.add(ui.levelUp);
            ui.levelUpInTween = state.add.tween(ui.levelUp).to({
                y: state.game.height / 2 - 100
            }, 500);
            ui.levelUpOutTween = state.add.tween(ui.levelUp).to({
                y: state.game.height
            }, 300); 

            // Only show instructions on first level
            if (glob.screens === 0 ) {
                // Call popUp prefab to handle instruction pop up and add game start to call back
                popUp(state, 2, json, function () {
                    state.restart();
                });
            } else {
                state.restart(); 
            } 
            
            // TESTING ===============================================
            if (0) { // TESTING
                questionNum++;
                state.createQuestion();
            }
            if (0) { // TESTING
                state.endGame();
            }
            // ===============================================
            createLoaded = true;
            state.randomEventSetUp();
        },
 
 

        update: function () { 
            randEventsTimer++ ;
            if ((randEventsTimer > 60) && (createLoaded) && (randomEventSetupLoaded))
            {
                state.randomEvent();
                randEventsTimer = 0;
            }
        },

        
        disableChest: function() {
                   state.activeChest.found = true;
                   state.activeChest.input.useHandCursor = false;
                   state.game.canvas.style.cursor = "default";
        },
        
        toggleChestsHover: function(onOff){
            console.log(chestArray.length - 1);
                  for (var i = chestArray.length - 1; i >= 0; i--) {
                      if (chestArray[i].found === false){
                          console.log('change');
                          chestArray[i].input.useHandCursor = onOff === 'on' ? true: false;
                      }
                  }
                  state.game.canvas.style.cursor = "default";

        },
 
        openChest: function(thisChest) {
            if (gameOn){ 
            state.activeChest = thisChest;
            if (!thisChest.found){
                
                // change chest image to correct version  
                state.foundChest.frameName = thisChest.chestType === 'bonus' ? 'found-chest-bonus' : 'found-chest-question';
                
                state.foundChest.reset(thisChest.x, thisChest.y);
                state.foundChestStar.reset(thisChest.x, thisChest.y);
                // reset angle so tween when added is same speed.
                state.foundChestStar.angle = 0;

                state.add.tween(state.foundChestStar).to( { angle: 360 }, 1000, Phaser.Easing.Linear.None, true, 0, -1);

                if (thisChest.chestType === 'bonus'){
                    state.disableChest();
 
                    // increase score
                    glob.score += json.chestBonus;
                    ui.score.text = glob.score;
                    state.foundChest.showUntil = state.time.now;
                    state.game.time.events.add(2000, function () {
                        // make sure that multiple clicks on chest dont result in the last one closing too quickly
                        // at the end of each timer it checks to see if the chest needs to be closed now or wait.
                        if (state.foundChest.showUntil < state.time.now){
                        state.foundChestStar.y = -9999; 
                        state.foundChest.y = -9999;
                        }
                    }, state);
                } else {
                    state.disableChest();
                    gameOn = false;
                    state.toggleChestsHover('off');
                    state.foundChest.showUntil = state.time.now + 1999;
                    // ask question
                    state.game.time.events.add(1000, function () {
                        //gameOn = false;
                        //state.toggleChestsHover('off');
                        state.createQuestion(thisChest); 
                   }, state);

                } 
           }  
            }

        },
        
        
        

        createQuestion: function () {
                        
            var question; // the selected question and answers from data.json
            var mcs = []; // this is to store everything so it can be deleted once nolonger needed.
            
            var qAudio = []; // store question audio so we can stop it later


            question = state.selectItem(diff.pool, shuffledQuestions); 

            // TESTING test specific question
            if (0){ question = diff.pool[9]; }

            // turn off background music during questions
            if (glob.playSound === true) {
                glob.music.pause();
            }

            // Add background
            var qTop = state.add.sprite(json.questionPanelTop.x, json.questionPanelTop.y, 'pngSheet', 'question-top');
            mcs.push(qTop);
            
            var qBot = state.add.sprite(json.questionPanelBottom.x, json.questionPanelBottom.y, 'pngSheet', 'question-bottom');
            mcs.push(qBot); 

			//***  text question *** 
			if (question.prompt.text){
				var qtxt = state.add.text(json.questionPos.x, json.questionPos.y, question.prompt.text, {
					'font': '20px Arial',
					'fill': 'black',
                    'wordWrap': true, 
                 'wordWrapWidth': 480 
				});
				qtxt.anchor.setTo(0, 0.5);
                
				mcs.push(qtxt);

			} else if (question.prompt.image) {
				//*** image question *** 
				var img = state.add.sprite(json.questionimagePos.x, json.questionimagePos.y, 'promptsSheet', question.prompt.image);
                img.anchor.setTo(0.5, 0.5);

				mcs.push(img);   
			}
            // This should not be a separate function could go straight into if below		
			state.audioClickedQuestion = function(){
                for (var i = qAudio.length - 1; i >= 0; i--) {
                	qAudio[i].stop();
                }
                var thisAudio = state.add.audio(question.prompt.audio);
                qAudio.push(thisAudio);
                thisAudio.play();

			};
			
            if (question.prompt.audio){
				var mc = state.add.button(json.questionPos.x-100, json.questionPos.y-25, 'pngSheet', state.audioClickedQuestion, state, 'audioMiniBtnh', 'audioMiniBtn', 'audioMiniBtna', 'audioMiniBtn');
                mc.input.useHandCursor = true;

				mcs.push(mc);
			}
			
            
			state.audioClicked = function(evt){
                
                for (var i = qAudio.length - 1; i >= 0; i--) {
                	qAudio[i].stop();
                }
				var thisAudio = state.add.audio(question.answers[evt.aid-1].audio);
                qAudio.push(thisAudio);
                thisAudio.play();
			};
			
            function addQuestion(aid){  
                
				var amc; //  answer marking ?
				var qpos; // question position ?
				var type; // type of question
				
				//***  text question *** 
				if (question.answers[aid-1].text){
					type = "text";
					qpos  = json["answer"+aid+"Btn"];
					amc = state.add.button(qpos.x-20, qpos.y-43, 'pngSheet', answerQuestion, state, 'question-screen-highlight', 'question-screen', 'question-screen', 'question-screen');
					var atxt = state.add.text(qpos.x, qpos.y,  question.answers[aid-1].text, {
						'font': '20px Arial',
						'fill': 'black'
					});

					atxt.anchor.setTo(0, 0.5);
					//state.add(atxt);
					mcs.push(atxt); 
					
				} else {
					//*** image question *** 
					
					type = "image";
					qpos = json["answerimage"+aid+"Btn"];
					amc = state.add.button(qpos.x, qpos.y, 'pngSheet', answerQuestion, state, 'question-screen-square-highlight', 'question-screen-square', 'question-screen-square', 'question-screen-square');
					var img = state.add.sprite(qpos.x+8, qpos.y+8, 'promptsSheet', question.answers[aid-1].image);
                	mcs.push(img);
				}
				amc.input.useHandCursor = true;
				amc.correct = question.answers[aid-1].correct; 
				amc.aid = aid;
				//state.add(amc); 
                mcs.push(amc);
                

				if (question.answers[aid-1].audio){
					var pos = type == "text" ? {x:qpos.x-100, y:qpos.y-28} : {x:qpos.x+60, y:qpos.y-80};
                	var mc = state.add.button(pos.x, pos.y, 'pngSheet', state.audioClicked, state, 'audioMiniBtnh', 'audioMiniBtn', 'audioMiniBtna', 'audioMiniBtn');
                	mc.aid = aid;
                    mc.input.useHandCursor = true;
					mcs.push(mc);
				}
				
				var pos = type == "text" ? {x:qpos.x+515, y:qpos.y-30} : {x:qpos.x+60, y:qpos.y+140};
                amc.tick = state.add.sprite(pos.x, pos.y, 'pngSheet', 'tick');
                amc.tick.alpha = 0;
                mcs.push(amc.tick);
				
				amc.cross = state.add.sprite(pos.x, pos.y, 'pngSheet', 'cross');
                amc.cross.alpha = 0;
                mcs.push(amc.cross);
                
                amc.coin = state.add.sprite(pos.x, pos.y, 'pngSheet', 'coin');
                amc.coin.alpha = 0;
                mcs.push(amc.coin);
            }

			
            addQuestion(1);
            addQuestion(2);
            addQuestion(3);

            // BUG just push the sprite, not make var?
//            var mc = state.add.sprite(-30, 470, 'pngSheet', 'questionChar');
//            mcs.push(mc);
                
            
            
            
            
			function answerQuestion(evt) {
                
                if (!evt.done){
                    if (evt.correct){
                        glob.score += json.ansQCorrect;
                        ui.score.text = glob.score;
                        glob.coins++;
                        evt.coin.alpha = 1;
                        state.correct.play();
                        
                        // add a coin to the next coin counter 
                        ui.coinsGroup.getAt(glob.coins -1).loadTexture('pngSheet', 'coin-disk-full');
                        
                        console.log(evt);

                    } else {
                        glob.score += json.ansQWrong;
                        ui.score.text = glob.score;
                        evt.cross.alpha = 1;
                        state.wrong.play();  
                        state.wrong.play();
                        //re-enable chest
                        state.activeChest.found = false;
                        state.activeChest.input.useHandCursor = true;
                        state.game.canvas.style.cursor = "default";
                    }

                    // repeat through all answers
                    for (var i in mcs){
                        mcs[i].done = true;
                        
                        //show tick if made incorrect answer
                        if (mcs[i].aid &&  diff.showIncorrect){
                            if (mcs[i].correct){
                                mcs[i].tick.alpha = 1;
                            }
                        }    
                    }

                   state.game.time.events.add(2000, function () {
                        removeQuestion(evt);
                   }, state);
                }
			}
			
            
            
            
            function removeQuestion(evt) {
                // hide chest
                    state.foundChestStar.y = -9999; 
                    state.foundChest.y = -9999;
                
                // stop all question audio
                for (var i = qAudio.length - 1; i >= 0; i--) {
                	qAudio[i].stop();
                    qAudio.splice(i, 1);
                }
                                
            // restart background music which was temporarily paused for questions. 
            if (glob.playSound === true) {
                glob.music.resume();
            }

                for (var i in mcs){
                    mcs[i].destroy(); 
                }
                
                if (evt.correct){
                    // LEVEL UP
                    // 1 || 
                    if (glob.coins >= diff.questionsGoal[glob.screens]){
                        state.levelupOrEndGame();    
                    } else {
                        state.toggleChestsHover('on');
                        gameOn = true;
                    }

                } else {
                    state.toggleChestsHover('on');
                    gameOn = true;
                }
            }

        },
        
        
        
        levelupOrEndGame: function () { 
            glob.screens++;
            if (glob.screens < 3) {
                randomEventSetupLoaded = false;
                //state.add(ui.levelUp);
                state.playAudio(state.lvlUp);
                ui.levelUpInTween.start();

                state.game.time.events.add(2000, function () {
                    ui.levelUpOutTween.start();
                }, state);

                state.game.time.events.add(4000, function () {
                    state.increaseLevel();
                }, state);
            } else {
                randomEventSetupLoaded = false;
                state.game.time.events.add(2000, function () {
                    state.increaseLevel();
                }, state);
            }
        }, 

        increaseLevel: function(){
            state.game.state.start('gameover'); // force game to end, not to display gameover screen
            glob.coins = 0; //reset correct answers ready for next level
            
            // BUG does this need to be global?
            if (glob.screens === 3){
                glob.gameover = 1;        
                this.endGame();
            } else {
                state.game.state.start('play');
            }
        },

        // reset everything ready to play again
        restart: function () {
                gameOn = true;
        },

        endGame: function() {
            state.game.state.start('gameover');
        },

        exitGame: function() {
            state.btnClick.play();
            window.location.href = json.closeBtn.url;
        },
        

        
        randomEventSetUp: function(){
            randomEventSetupLoaded = false;
            if (glob.screens === 0)
            {
               state.bg0Timer = 4;
                        // create the sprite
               state.dolphin = state.baseGroup.create(892, 444, 'pngSheet', 'dolphin-start');
               state.dolphin.smoothed = false; 
               state.dolphin.animations.add('jump', ['dolphin-start', 'dolphin-0', 'dolphin-1', 'dolphin-1', 'dolphin-2', 'dolphin-3', 'dolphin-4', 'dolphin-5', 'dolphin-start'], 9, false, false);
               state.shark = state.baseGroup.create(396, 104, 'pngSheet', 'shark-start');
               state.shark.smoothed = false; 
               state.shark.animations.add('swim', ['shark-start', 'shark-6', 'shark-7', 'shark-0', 'shark-1', 'shark-2', 'shark-3', 'shark-4', 'shark-5', 'shark-start'], 5, false, false);
               state.baseGroup.create(428, 135, 'pngSheet', 'shark-palm'); 
               state.whalePeep = state.baseGroup.create(80, 344, 'pngSheet', 'whalePeep-start');
               state.whalePeep.smoothed = false; 
               state.whalePeep.animations.add('peep', ['whalePeep-start', 'whalePeep-0', 'whalePeep-1', 'whalePeep-2', 'whalePeep-3', 'whalePeep-4', 'whalePeep-5', 'whalePeep-6', 'whalePeep-7', 'whalePeep-8', 'whalePeep-9', 'whalePeep-8', 'whalePeep-7', 'whalePeep-6', 'whalePeep-5', 'whalePeep-4', 'whalePeep-3', 'whalePeep-2', 'whalePeep-1', 'whalePeep-0', 'whalePeep-start'], 10, false, false);
               state.whaleSplash = state.baseGroup.create(80, 344, 'pngSheet', 'whaleSplash-start');
               state.whaleSplash.smoothed = false; 
               state.whaleSplash.animations.add('splash', ['whaleSplash-start', 'whaleSplash-0', 'whaleSplash-1', 'whaleSplash-2', 'whaleSplash-3', 'whaleSplash-4', 'whaleSplash-5', 'whaleSplash-6', 'whaleSplash-7', 'whaleSplash-8', 'whaleSplash-9', 'whaleSplash-10', 'whaleSplash-11', 'whaleSplash-12', 'whaleSplash-13', 'whaleSplash-14', 'whaleSplash-15', 'whaleSplash-16', 'whaleSplash-start'], 10, false, false);
            }
            else if (glob.screens === 1)
            {
                state.bg1Timer = 4;
                state.bird = state.baseGroup.create(-9999, -9999, 'pngSheet', 'bird-0');
                state.bird.smoothed = false;
                state.bird.animations.add('bird', ['bird-0', 'bird-1', 'bird-2', 'bird-3', 'bird-4', 'bird-3', 'bird-2', 'bird-1'], 9, true, false);
            }
            else
            {
                state.bg2Timer = 4;
                state.gate = state.baseGroup.create(249, 457, 'pngSheet', 'bg-2-gate-0');
                state.gate.animations.add('flash', ['bg-2-gate-0', 'bg-2-gate-1']);
                state.gate.animations.play('flash', 1, true);
                //add floating balloon
                state.balloon = state.baseGroup.create(-9999, -9999, 'pngSheet', 'bg-2-balloon-0');
                state.balloon.anchor.set(0.5, 0.5);
                state.balloon.angle = -10;
                state.balloon.starts = [{x:175, y:606, balloonScale: 1}, {x:286, y:354, balloonScale: 0.9}, {x:674, y:250, balloonScale: 0.8}];
                state.balloon.randStarts = [];
                //add second balloon
                state.balloon2 = state.baseGroup.create(-9999, -9999, 'pngSheet', 'bg-2-balloon-0');
                state.balloon2.anchor.set(0.5, 0.5);
                state.balloon2.angle = -10;
                state.balloon2.starts = state.balloon.starts;
                //add third balloon
                state.balloon3 = state.baseGroup.create(-9999, -9999, 'pngSheet', 'bg-2-balloon-0');
                state.balloon3.anchor.set(0.5, 0.5);
                state.balloon3.angle = -10;
                state.balloon3.starts = state.balloon.starts;
                //add fourth balloon
                state.balloon4 = state.baseGroup.create(-9999, -9999, 'pngSheet', 'bg-2-balloon-0');
                state.balloon4.anchor.set(0.5, 0.5);
                state.balloon4.angle = -10;
                state.balloon4.starts = state.balloon.starts;
                //add fifth balloon
                state.balloon5 = state.baseGroup.create(-9999, -9999, 'pngSheet', 'bg-2-balloon-0');
                state.balloon5.anchor.set(0.5, 0.5);
                state.balloon5.angle = -10;
                state.balloon5.starts = state.balloon.starts;
                //add sixth balloon
                state.balloon6 = state.baseGroup.create(-9999, -9999, 'pngSheet', 'bg-2-balloon-0');
                state.balloon6.anchor.set(0.5, 0.5);
                state.balloon6.angle = -10;
                state.balloon6.starts = state.balloon.starts;
                //add seventh balloon
                state.balloon7 = state.baseGroup.create(-9999, -9999, 'pngSheet', 'bg-2-balloon-0');
                state.balloon7.anchor.set(0.5, 0.5);
                state.balloon7.angle = -10;
                state.balloon7.starts = state.balloon.starts;
                
                // add balloon groups for it to emerge from
                state.baseGroup.create(112, 573, 'pngSheet', 'bg-2-balloons');
                state.baseGroup.create(230, 330, 'pngSheet', 'bg-2-balloons').scale.setTo(0.9, 0.9);
                state.baseGroup.create(628, 226, 'pngSheet', 'bg-2-balloons').scale.setTo(0.8, 0.8);
            }
            randomEventSetupLoaded = true;
        },




        
        
        
        
        randomEvent: function(){
            if (randomEventSetupLoaded){
            var birdSpeed = 2000/475; // each path has a length I work out how fast I want it to fly along the first path 
                                    // then divid the time by the path length
            var birdPos = [{x1:330, y1:-56, x2:-61, y2:335, length:475}, {x1:630, y1:-56, x2:-61, y2:630, length:890}, {x1:918, y1:-56, x2:215, y2:704, length:995}, {x1:1024, y1:185, x2:505, y2:704, length:735}, {x1:1024, y1:475, x2:795, y2:704, length:325}];
            
            if (glob.screens === 0)
            {
                state.bg0Timer--;

                if (state.bg0Timer === 0)
                {
                    state.bg0Timer = state.rnd.integerInRange(2, 4);
                    // choose random event
                    var thisEvent = state.rnd.integerInRange(0, 3);
                    if (thisEvent === 0){
                        state.dolphin.play('jump'); 
                    } else if (thisEvent === 1){
                        state.shark.play('swim');
                    } else if (thisEvent === 2){
                        state.whalePeep.play('peep');
                    } else {
                        state.whaleSplash.play('splash');
                    }                 
                }
                
            }
            else if (glob.screens === 1)
            {
                state.bg1Timer--;
                
                // set new random interval
                if (state.bg1Timer === 0)                    
                {
                    // set new random interval
                    state.bg1Timer = state.rnd.integerInRange(3, 4);
                    // dont trigger new flight if already flying
                    if (!state.bird.flying){
                        //choose path
                        state.bird.play('bird');
                        state.bird.path = birdPos[state.rnd.integerInRange(0, birdPos.length-1)];
                        // reset sprite
                        state.bird.flying = true;
                        state.bird.x = state.bird.path.x1;
                        state.bird.y = state.bird.path.y1;
                        // add tween
                        state.add.tween(state.bird).to( { x: state.bird.path.x2, y: state.bird.path.y2 }, birdSpeed*state.bird.path.length, 'Linear', true)
                        .onComplete.addOnce(function(){state.bird.flying = false;}); 
                    }
                }
            }
            else
            {
                state.bg2Timer--;
                
                if (state.bg2Timer === 0)
                {
                    // set new random interval for a balloon
                    state.bg2Timer = state.rnd.integerInRange(4, 8);
                    // Balloons float away
                    var thisStart = state.selectItem(state.balloon.starts, state.balloon.randStarts); 
                    // first balloon
                    // reset balloon and select random color
                    state.balloon.frameName = 'bg-2-balloon-'+ state.rnd.integerInRange(0, 4);
                    state.balloon.x = thisStart.x - 7;
                    state.balloon.y = thisStart.y + 12;
                    state.balloon.scale.setTo(thisStart.balloonScale, thisStart.balloonScale);
                    state.balloon.angle = -10;
                    // add tweens to make it wobble and float
                    state.add.tween(state.balloon).to( { y: -88 }, 4000, Phaser.Easing.Linear.None, true, 0);
                    state.add.tween(state.balloon).to( { angle: 10 }, 1000, 'Linear', true, 0, -1, true);
                    // second balloon
                    var secondBalloonChance = Math.random();
                    if (secondBalloonChance > 0.5){
                        // reset balloon and select random color
                        state.balloon2.x = thisStart.x + 5;
                        state.balloon2.y = thisStart.y + 15;
                        state.balloon2.scale.setTo(thisStart.balloonScale, thisStart.balloonScale);
                        state.balloon2.angle = 10;
                        state.balloon2.frameName = 'bg-2-balloon-'+ state.rnd.integerInRange(0, 4);
                        // add tweens to make it wobble and float
                        state.add.tween(state.balloon2).to( { y: -135}, 4500, Phaser.Easing.Linear.None, true, 0);
                        state.add.tween(state.balloon2).to( { angle: -10 }, 3000, 'Linear', true, 0, -1, true);
                    }
                    secondBalloonChance = 0;
                    
                    // third balloon
                    var thirdBalloonChance = Math.random();
                    if (thirdBalloonChance > 0.5){
                        // reset balloon and select random color
                        state.balloon3.x = thisStart.x;
                        state.balloon3.y = thisStart.y;
                        state.balloon3.scale.setTo(thisStart.balloonScale, thisStart.balloonScale);
                        state.balloon3.angle = 10;
                        state.balloon3.frameName = 'bg-2-balloon-'+ state.rnd.integerInRange(0, 4);
                        // add tweens to make it wobble and float
                        state.add.tween(state.balloon3).to( { y: -110 }, 3000, Phaser.Easing.Linear.None, true, 0);
                        state.add.tween(state.balloon3).to( { angle: -10 }, 2000, 'Linear', true, 0, -1, true);
                    }
                    thirdBalloonChance = 0;
                    
                    // fourth balloon
                    var fourthBalloonChance = Math.random();
                    if (fourthBalloonChance > 0.5){
                        // reset balloon and select random color
                        state.balloon4.x = thisStart.x - 30;
                        state.balloon4.y = thisStart.y - 15;
                        state.balloon4.scale.setTo(thisStart.balloonScale, thisStart.balloonScale);
                        state.balloon4.angle = -10;
                        state.balloon4.frameName = 'bg-2-balloon-'+ state.rnd.integerInRange(0, 4);
                        // add tweens to make it wobble and float
                        state.add.tween(state.balloon4).to( { y: -150 }, 5000, Phaser.Easing.Linear.None, true, 0);
                        state.add.tween(state.balloon4).to( { angle: 10 }, 2000, 'Linear', true, 0, -1, true);
                    }
                    fourthBalloonChance = 0;
                    
                    // fifth balloon
                    var fifthBalloonChance = Math.random();
                    if (fifthBalloonChance > 0.5){
                        // reset balloon and select random color
                        state.balloon5.x = thisStart.x + 30;
                        state.balloon5.y = thisStart.y + 20;
                        state.balloon5.scale.setTo(thisStart.balloonScale, thisStart.balloonScale);
                        state.balloon5.angle = 10;
                        state.balloon5.frameName = 'bg-2-balloon-'+ state.rnd.integerInRange(0, 4);
                        // add tweens to make it wobble and float
                        state.add.tween(state.balloon5).to( { y: -140 }, 4000, Phaser.Easing.Linear.none, true, 0);
                        state.add.tween(state.balloon5).to( { angle: -10 }, 2000, 'Linear', true, 0, -1, true);
                    }
                    fifthBalloonChance = 0;
                    
                    // sixth balloon
                    var sixthBalloonChance = Math.random();
                    if (sixthBalloonChance > 0.5){
                        // reset balloon and select random color
                        state.balloon6.x = thisStart.x + 30;
                        state.balloon6.y = thisStart.y + 15;
                        state.balloon6.scale.setTo(thisStart.balloonScale, thisStart.balloonScale);
                        state.balloon6.angle = 10;
                        state.balloon6.frameName = 'bg-2-balloon-'+ state.rnd.integerInRange(0, 4);
                        // add tweens to make it wobble and float
                        state.add.tween(state.balloon6).to( { y: -80 }, 4500, Phaser.Easing.Linear.None, true, 0);
                        state.add.tween(state.balloon6).to( { angle: -10 }, 2000, 'Linear', true, 0, -1, true);
                    }
                    sixthBalloonChance = 0;
                    
                                        // fifth balloon
                    var seventhBalloonChance = Math.random();
                    if (seventhBalloonChance > 0.5){
                        // reset balloon and select random color
                        state.balloon7.x = thisStart.x - 25;
                        state.balloon7.y = thisStart.y - 25;
                        state.balloon7.scale.setTo(thisStart.balloonScale, thisStart.balloonScale);
                        state.balloon7.angle = -10;
                        state.balloon7.frameName = 'bg-2-balloon-'+ state.rnd.integerInRange(0, 4);
                        // add tweens to make it wobble and float
                        state.add.tween(state.balloon7).to( { y: -120}, 5000, Phaser.Easing.Linear.None, true, 0);
                        state.add.tween(state.balloon7).to( { angle: 10 }, 2000, 'Linear', true, 0, -1, true);
                    }
                    seventhBalloonChance = 0;
                    
                    
                }
            }
            }
        },
        
        
        
        // ====================================================================
        // Helper functions
        
        
        // activate and deactive non esential sounds
        audioToggle: function (){
            // always play button click
            state.btnClick.play();
            // set playSound to the opposite of what it is
            glob.playSound = glob.playSound === true ? false : true;
            // if background music is playing pause it and vise versa
            if (glob.music.paused){ 
                glob.music.resume(); 
                ui.audioBtn.setFrames('audioBtn_2', 'audioBtn_1', 'audioBtn_3', 'audioBtn_2');

            } else { 
                glob.music.pause(); 
                // change button frames so show audio is off
                ui.audioBtn.setFrames('audioBtn_5', 'audioBtn_4', 'audioBtn_6', 'audioBtn_5');

            }
        },

        // play button audio if playSound is ture
        playAudio: function(myAudio) {
            if (glob.playSound){
                myAudio.play();
            }
        },
        
         // this duplicates the myArray and shuffles it, it then exstracts 1 item from it each time 
        //it is called until the copied array is empty when it makes a new array
        selectItem: function(sourceArray, shuffledArray) {
            var temporaryValue = "",
                randomIndex = 1;

            // if shuffledArray is empty refill it
            if (shuffledArray.length === 0) {

                // shuffle a copy of myArray
                shuffledArray = state.shuffle(sourceArray.slice(0));

                // check the first item in shuffled array is not the same last item in old array
                if (shuffledArray[0] === thisItem) {
                    // find a random position in the rest of the array to swap it with
                    randomIndex = Math.floor(Math.random() * (shuffledArray.length - 1) + 1);
                    // swap positions                            
                    temporaryValue = shuffledArray[0];
                    shuffledArray[0] = shuffledArray[randomIndex];
                    shuffledArray[randomIndex] = temporaryValue;
                }
            }

            // exstract the first item from shuffledArray
            thisItem = shuffledArray.shift();

            return thisItem; 
        },

        // helper function for shuffling an array
        shuffle: function (array) {
            var currentIndex = array.length,
                temporaryValue, randomIndex;
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        },            
        
    };

module.exports = Play;
},{"../prefabs/popUp":2}],7:[function(require,module,exports){
/* global module: false*/

'use strict';

// define variables that will be assigned in init
// they are available to all functions in this state but not outside it
var state;
var glob;
var json;


function Preload() {
    this.asset = null;
    this.ready = false;
}

Preload.prototype = {

    init: function () {
        // reference to this state
        state = this;
        // global object to pass items between states
        glob = state.game.global;
        // reference to the loaded json file
        json = state.cache.getJSON('gameData');
    },
    
    preload: function () {
        // add loading bar to game
        state.loadingBar = state.add.sprite(state.game.width / 2, state.game.height / 2, 'preloader');
        state.loadingBar.anchor.setTo(0.5, 0.5);
        state.load.setPreloadSprite(state.loadingBar);
        // Once all has been loaded go to menu state
        //state.load.onLoadComplete.addOnce(state.onLoadComplete, state);

        
        // PROMPT AUDIO
        // record previously loaded audio so dont load twice
        var previousAudio = [];
        
                // load all the difficulties assets
        for (var diff = 0; diff < json.difficulties.length; diff++) {
            var thisDiff = json.difficulties[diff];
            
            
            for (var pool = 0; pool < thisDiff.pool.length; pool++) {
                
                var thisPool = json.difficulties[diff].pool[pool];
                

                    // prompt audio
                    if (previousAudio.indexOf(thisPool.prompt.audio) === -1 && thisPool.prompt.audio !== "") {
                        state.load.audio('' + thisPool.prompt.audio, 
                            [json.instancePath + 'audio/' + thisPool.prompt.audio + '.ogg',
                             json.instancePath + 'audio/' + thisPool.prompt.audio + '.mp3']);
                        previousAudio.push(thisPool.prompt.audio);
                    }
                
                     for (var ans = 0; ans < 3; ans++) {
                         
                        // answer audio
                        if (previousAudio.indexOf(thisPool.answers[ans].audio) === -1 && thisPool.answers[ans].audio !== "") {
                            state.load.audio('' + thisPool.answers[ans].audio, 
                                [json.instancePath + 'audio/' + thisPool.answers[ans].audio + '.ogg',
                                 json.instancePath + 'audio/' + thisPool.answers[ans].audio + '.mp3']);
                            previousAudio.push(thisPool.answers[ans].audio);
                        }
                     }
                                
                }
            }

        // DEFAULT AUDIO
        var allAudio = ['bg-music', 'btn-click', 'correct', 'wrong', 'lvl-up', 'good-job'];

        for (var thisAudio in allAudio) {
            state.load.audio(allAudio[thisAudio], [json.templatePath + 'audio/' + allAudio[thisAudio] + '.ogg', 
                                                   json.templatePath + 'audio/' + allAudio[thisAudio] + '.mp3']);
        }
		
		state.load.atlasJSONHash('jpgSheet', json.templatePath + 'jpg.jpg', json.templatePath + 'jpg.json');
        state.load.atlasJSONHash('pngSheet', json.templatePath + 'png.png', json.templatePath + 'png.json');
        state.load.atlasJSONHash('promptsSheet', json.instancePath + 'prompts.jpg', json.instancePath + 'prompts.json');

        // Once all has been loaded go to menu state
        state.load.onLoadComplete.addOnce(state.onLoadComplete, state);

    },
    create: function () {
        // loading bar
        state.loadingBar.cropEnabled = false;
    },

    update: function () {
        if (!!state.ready) {
            state.game.state.start('menu');
        }
    },

    onLoadComplete: function () {
        state.ready = true;
    }
};

module.exports = Preload;
},{}]},{},[1])