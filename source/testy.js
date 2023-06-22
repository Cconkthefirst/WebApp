//======================================================================================
//Connects the JSON Database:
//======================================================================================
fetch('footballPlayers.json')
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    // JSON file has been loaded, and 'data' contains the parsed JSON object
    // Call a function to set the child elements using the data
  })
  .catch(error => {
    // Handle any errors that occurred during the loading process
    console.error('Error:', error);
  });




function cycleCards() {
  document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('click', function() {
      var clickedCard = this;
      this.remove();
      document.querySelector('.cardStack').prepend(clickedCard);
    });
  });
}
cycleCards();


function dragCards() {
  const cards = document.querySelectorAll('.card');
  const dropZoneOne = document.querySelector('.drop-zone.left');
  const dropZoneTwo = document.querySelector('.drop-zone.top');
  const dropZoneThree = document.querySelector('.drop-zone.right');
  let originalX;
  let originalY;

  cards.forEach(card => {

    
    card.addEventListener('dragstart', function(e){
      e.preventDefault
      e.target.style.opacity = '0';
      console.log('picked up')
      originalX = e.target.clientX;
      originalY = e.target.clientY;
    });

    card.addEventListener('drag', function(e){
      e.preventDefault();
      console.log('draggin');
    });

    card.addEventListener('dragend', function(e){
      e.preventDefault();
      e.target.style.visability = 'block';
      e.target.style.top = originalY + 'px';
      e.target.style.left = originalX + 'px';
      e.target.style.opacity = '1';
      //console.log('card dropped');
    });

    card.addEventListener('drop', function(e) {
      e.preventDefault()
      e.target.style.visability = 'block';
    });

    dropZoneOne.addEventListener('dragover', function(e) {
      e.preventDefault();
    });

    dropZoneTwo.addEventListener('dragover', function(e) {
      e.preventDefault();
    });

    dropZoneThree.addEventListener('dragover', function(e) {
      e.preventDefault();
    });

    dropZoneOne.addEventListener('drop', function(e) {
      e.preventDefault();
      e.target.style.visability = 'hidden'; // Fix typo: visibility instead of visability
      console.log("wdrop");
    });

    dropZoneTwo.addEventListener('drop', function(e) {
      e.preventDefault();
      e.target.style.visability = 'hidden'; // Fix typo: visibility instead of visability
      console.log("wdrop");
    });

    dropZoneThree.addEventListener('drop', function(e) {
      e.preventDefault();
      e.target.style.visability = 'hidden'; // Fix typo: visibility instead of visability
      console.log("wdrop");
    });
    
  });
}

dragCards();