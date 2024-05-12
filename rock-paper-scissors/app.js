let userCount = 0; 
let compCount = 0;

let userChoices = document.querySelectorAll('.choice');
let btnText = document.querySelector('#msg');
let userScoreText = document.querySelector('#user_score');
let compScoreText = document.querySelector('#comp_score');

userChoices.forEach((val) => {   
    val.addEventListener('click', () => {
        let userChoice = val.getAttribute('id');

        let compChoice = genCompChoice();

        if(userChoice === compChoice ){
            //draw Game
            btnText.innerText = "Draw game";
            btnText.style.backgroundColor = "#000000";
        } else {
            let userWin = true;
            if(userChoice === 'rock') {
                userWin  = compChoice === 'paper' ? false : true;
            } else if(userChoice === 'paper') {
                userWin = compChoice === 'scissors' ? false : true;
            } else {
                userWin = compChoice === 'rock' ? false : true;
            }
            if(userWin) {
                userCount++;
                btnText.innerText = "user wins";
                btnText.style.backgroundColor = "green";
                userScoreText.innerText = userCount;
            } else {
                compCount++;
                compScoreText.innerText = compCount;
                btnText.innerText = "Commputer wins";
                btnText.style.backgroundColor = "red";
            }
        }
    });
});


let genCompChoice = () => {
    let options = ['rock','paper','scissors'];
    let randIndx =  Math.floor(Math.random() * 3);
    return options[randIndx];
}
