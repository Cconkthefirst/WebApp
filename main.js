var jsonData;
fetch("./footballPlayers.json")
.then(response => {
   return response.json();
}).then(
    function(data){
    console.log(data);
    setCard_function(data); //calling and passing json to another function data_function
    }
    )

//Dragging Cards ----------------------------------
const draggables = document.querySelectorAll('.card');
const containers = document.querySelectorAll('.dropspot');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })

})

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault()
        const draggable = document.querySelector('.dragging')
        
    })
})
//Dragging Cards End --------------------------------


//Setting up Cards -----------------------------------

//Sets player info
function setCard_function(data){

    const cards = document.querySelectorAll('.card');

    let players = new Array ();
    for (let i = 0; i < 3; i++) { 
        players[i] = data[Math.floor(Math.random() * data.length)];
        var nextPlayer = data[Math.floor(Math.random() * data.length)];

        while (nextPlayer == players[i-1]) {
            nextPlayer = data[Math.floor(Math.random() * data.length)];
        }
        players[i] = nextPlayer;
    }
    console.log(players)
    
    cards.forEach( card => {
        var curPlayer = players[Math.floor(Math.random() * players.length)];
        console.log(curPlayer);
        console.log(players);
        
        const cardImg = card.querySelector('.cardsImg');
        cardImg.src = curPlayer.img;

        const cardName = card.querySelector('.playerName');
        cardName.innerHTML = curPlayer.name;

        const cardRating = card.querySelector('.resaultBarValue');
        cardRating.innerHTML = curPlayer.rating;
        cardRating.style.opacity = 1;

        const ratingBar = card.querySelector('.resaultBar');
        ratingBar.style.height = curPlayer.rating;

        //Delete the curPlayer from players array to stop repeats
        players.forEach((item, index, players) => {
            if (item == curPlayer) {
              players.splice(index, 1);
            }
        })
          

    })
}




//Setting up Cards End -------------------------------- 

