let player1 = "Player 1"
let player2 = "Player 2"

function editnames(){
    player1 = prompt("Edit the name of Player 1");
    player2 = prompt("Edit the name of Player 2");

    if(player1.length < 1 || player2.length < 1){
        alert("Enter valid names");
        return;
    }

    document.querySelector('.dice:nth-child(1) h3').innerHTML=player1;
    document.querySelector('.dice:nth-child(2) h3').innerHTML=player2;
}

const dice = document.querySelector('.btn');

function rolldice(){
    
    let dice1 = document.querySelector(".img1");
    let dice2 = document.querySelector(".img2");

    dice1.setAttribute('src', 'rollingdice.gif');
    dice2.setAttribute('src', 'rollingdice.gif');

    let res = document.querySelector('h1')

    setTimeout(() => {
        let random1 = Math.floor((Math.random()*6)+1);
        let random2 = Math.floor((Math.random()*6)+1);
    
        dice1.setAttribute('src', 'dice'+random1+ '.png');
        dice2.setAttribute('src', 'dice'+random2+'.png');
    
        if(random1>random2){
            document.querySelector('h1').innerHTML= player1 + ' Wins';
        }
        else if(random2>random1){
            document.querySelector('h1').innerHTML= player2 + ' Wins';
        }
        else{
            document.querySelector('h1').innerHTML="Its a Draw";
        }
    }, 2500);

   
}