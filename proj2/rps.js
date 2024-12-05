game = function() {
    playerPT = 0;
    systemPT = 0;

    startGame = function () {
        startBTN = document.querySelector('.start button');
        startSCN = document.querySelector('.start');
        vs = document.querySelector('.vs');

        startBTN.addEventListener("click", function(){
            //andiamo ad assegnare la classe che sul css è impostata con opacity 0 (che non si vedrà)
            startSCN.classList.add('gameout');
            // e renderemo visibile la classe vs in cui c'è la struttura dello "scontro"
            vs.classList.add("gamein");
            // andando ad eliminare la classe che lo rende invisibile
            vs.classList.remove("gameout");
        });
    };

    playvs = function() {
        // con questa query selezionerò tutti i bottoni
        check = document.querySelectorAll('.check button');
        launch = document.querySelectorAll('.launch img');
        playerHand = document.querySelector('.player_game');
        systemHand = document.querySelector('.system_game');

        systemcheck = ['rock', 'paper', 'scissors'];
        // mossa del system(randomica)
        check.forEach(opt1 => {
            opt1.addEventListener("click", function() {
                systemNumber = Math.floor(Math.random()*3);
                systemChoice = systemcheck[systemNumber];
                setTimeout(() => {
                    compareLaunch(this.textContent, systemChoice);

                    playerHand.src = `img/${this.textContent}.png`;
                    systemHand.src = `img/${systemChoice}.png`;
                }, 2000);
            });
        });
    };

    compareLaunch = (playerChoice, systemChoice) => {
        ps_win = document.querySelector('.ps_win');

        if(playerChoice === systemChoice) {
            ps_win.textContent = "Draw";
            return;
        }
        
        if(playerChoice === 'rock') {
            if(systemChoice === 'scissors') {
                ps_win.textContent = "Player Wins";
                playerPT++;
                endgame();
                updateScore();
                return;
            } else {
                ps_win.textContent = "System Wins";
                systemPT++;
                endgame();
                updateScore();
                return;

            }
        }

        if(playerChoice === 'paper') {
            if(systemChoice === 'scissors') {
                ps_win.textContent = "System Wins";
                systemPT++;
                endgame();
                updateScore();
                return;
            } else {
                ps_win.textContent = "Player Wins";
                playerPT++;
                endgame();
                updateScore();
                return;

            }
        }

        if(playerChoice === 'scissors') {
            if(systemChoice === 'rock') {
                ps_win.textContent = "System Wins";
                systemPT++;
                endgame();
                updateScore();
                return;
            } else {
                ps_win.textContent = "Player Wins";
                playerPT++;
                endgame();
                updateScore();
                return;

            }
        }
    };

    updateScore = function() {
        playerScore = document.querySelector('.player_pt p');
        systemScore = document.querySelector('.system_pt p');
        playerScore.textContent = playerPT;
        systemScore.textContent = systemPT;
    };

    restartGame = () => {
        restart = document.querySelector('.ps_winend button');
        restart.addEventListener("click", () => {            
            window.location.reload();
        });
    };
    restartGame();

    endgame = () => {
        ps_winend = document.querySelector('.ps_winend');
        vs = document.querySelector('.vs');
        ps_win_stop = document.querySelector('.ps_win_stop');

        if(playerPT == 2) {
            vs.classList.remove("gamein")
            vs.classList.add("gameout");
            setTimeout(() => {
                ps_winend.classList.add("gamein");
                ps_winend.classList.remove("gameout");
                ps_win_stop.textContent = "Player won the game";
            }, 2000);
        } else if (systemPT == 2) {
            vs.classList.remove("gamein")
            vs.classList.add("gameout");
            setTimeout(() => {
                ps_winend.classList.add("gamein");
                ps_winend.classList.remove("gameout");
                ps_win_stop.textContent = "System won the game";
            }, 2000);
        }
    };

    startGame();
    playvs();
};

game();