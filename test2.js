$(document).ready(() => {
    const cards = document.querySelectorAll(".card");
    let FlippedCard = false;
    let Board = false;
    let firstCard, secondCard;
  
    function flipCard() {
      if (Board) return;
      if (this === firstCard) return;
      this.classList.add("flip");
  
      if (FlippedCard) {
        FlippedCard = true;
        firstCard = this;
  
        return;
      }
      secondCard = this;
      checkForMatch();
    }
  
    function checkForMatch() {
      let isMatch = firstCard.dataset.framwork === secondCard.dataset.framwork;
      isMatch ? disableCards() : unflipCards();
      liveAgain(isMatch);
    }
  
    
    function disableCards() {
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
      console.log(cards);
    }})
