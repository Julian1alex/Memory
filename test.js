// function shuffle(deck) {
//     //   console.log("---> shuffle")
//     let currentIndex = deck.length
//     let temporaryValue
//     let randomIndex
//     const newArray = deck.slice()
//     // While there remains elements to shuffle...
//     while (currentIndex) {
//       randomIndex = Math.floor(Math.random() * currentIndex)
//       currentIndex -= 1
//       // Swap it with the current element.
//       temporaryValue = newArray[currentIndex]
//       newArray[currentIndex] = newArray[randomIndex]
//       newArray[randomIndex] = temporaryValue
//     }
//     return newArray
//    }

$(document).ready(function(){
        let cards = ""
        deck.forEach(l => { 
            cards += `<div class="face-down">${l.value}<img${l.front}><div>` 
        })
                
    
            $("#cards").html(cards)

})
    

  