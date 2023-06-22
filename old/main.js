//======================================================================================
//Connects the JSON Database:
//======================================================================================
fetch('footballPlayers.json')
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    // JSON file has been loaded, and 'data' contains the parsed JSON object
    // Call a function to set the child elements using the data
    availablePlayers = selectRandomElements(data, playerCount);
    cards = document.querySelectorAll('.card')
    setCardData(availablePlayers, cards)
    main (availablePlayers);
  })
  .catch(error => {
    // Handle any errors that occurred during the loading process
    console.error('Error:', error);
  });

//Global Variables:
//======================================================================================
let cards = new Array();
let availablePlayers = new Array();
const playerCount = 3;




//Create a pool of usable data:
//======================================================================================
function selectRandomElements(data, count) {
  const shuffledData = [...data]; // Create a copy of the original array
  shuffleArray(shuffledData); // Shuffle the array

  const selectedElements = [];
  for (let i = 0; i < Math.min(count, shuffledData.length); i++) {
    const element = shuffledData[i];
    if (!selectedElements.includes(element)) {
      selectedElements.push(element);
    }
  }
  return selectedElements;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


function setCardData(players, cards) {
  const remainingPlayers = [...players];
  for (let i = 0; i < cards.length; i++) {

      if (remainingPlayers.length > 0) {
        const randomIndex = Math.floor(Math.random() * remainingPlayers.length);
        const curPlayer = remainingPlayers[randomIndex];
        
        cards[i].dataset.player = JSON.stringify(curPlayer);
        cards[i].querySelector('.playerName').textContent = curPlayer.name;
        remainingPlayers.splice(randomIndex, 1);
    }
  }
}
//==========================================================================================


function animateProgressBar(data,duration, elementName) {
  var height = 0;
  var interval = 10;
  var increment = 100 / (duration / interval);

  var timer = setInterval(function() {
    height += increment;
    elementName.style.height = height + '%';

    if (height >= data.rating) {
      clearInterval(timer);
    }
  }, interval);
}

// document.querySelectorAll('.card').forEach(function(card) {
//   card.addEventListener('click', function() {
//     var clickedCard = this;
//     this.remove();
//     document.querySelector('.game').prepend(clickedCard);
//   });
// });


// Main Function:
//======================================================================================
function main(useableData) {

  // ---------------------------
  // Draggable elements effects:
  // ---------------------------
  //let cards = document.getElementsByClassName("card");
  let dropZoneOne = document.getElementById("benchContainer");
  let dropZoneTwo = document.getElementById("startContainer");
  let dropZoneThree = document.getElementById("cutContainer");
  let originalX;
  let originalY;
  let selected; // Declare selected outside the event listeners
  let playerData;
  
  for (let card of cards) {
    card.addEventListener("dragstart", function(e) {
      selected = this; // Assign the current card being dragged to selected
      playerData = JSON.parse(selected.dataset.player)
      
  
      originalX = e.clientX;
      originalY = e.clientY;
  
      e.target.style.opacity = "0";
  
      card.addEventListener("drag", function(e) {
        e.preventDefault();
      });
  
      card.addEventListener("dragend", function(e) {
        e.preventDefault();
        e.target.style.opacity = "1";
  
        e.target.style.top = originalY + "px";
        e.target.style.left = originalX + "px";
      });
    });
  
    card.addEventListener("drop", function(e) {
      e.preventDefault();
    });
  }
  
  dropZoneOne.addEventListener("dragover", function(e) {
    e.preventDefault();
  });
  
  dropZoneTwo.addEventListener("dragover", function(e) {
    e.preventDefault();
  });
  
  dropZoneThree.addEventListener("dragover", function(e) {
    e.preventDefault();
  });
  
  dropZoneOne.addEventListener("drop", function(e) {
    e.preventDefault();
    console.log("card dropped");
    let ratingBar = selected.querySelector('.resaultBar');
    ratingBar.style.display = "block";
    animateProgressBar(playerData,3000, ratingBar);
  });
  
  dropZoneTwo.addEventListener("drop", function(e) {
    e.preventDefault();
    console.log("card dropped");
    let ratingBar = selected.querySelector('.resaultBar');
    ratingBar.style.display = "block";
    animateProgressBar(playerData,3000, ratingBar);
  });
  
  dropZoneThree.addEventListener("drop", function(e) {
    e.preventDefault();
    console.log("card dropped");
    let ratingBar = selected.querySelector('.resaultBar');
    ratingBar.style.display = "block";
    animateProgressBar(playerData,3000, ratingBar);
  });
  // ---------------------------
  
}
//======================================================================================
