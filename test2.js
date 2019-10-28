$(document).ready(() => {
    const cards = document.querySelectorAll(".card");
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
  
    function flipCard() {
      if (lockBoard) return;
      if (this === firstCard) return;
      this.classList.add("flip");
  
      if (!hasFlippedCard) {
        hasFlippedCard = true;
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
      win++;
  
      resetBoard();
      console.log(win);
      if (win === 9) {
        $("#livesp").text("You Win!");
        $("#livesWrapper").append(
          "<br><button enabled class='play-again'>Play again?</button>"
        );
        start;
      }
      $(".play-again").on("click", function() {
        location.reload(true);
      });
    }
  
    function unflipCards() {
      lockBoard = true;
  
      setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
  
    }
    
  })