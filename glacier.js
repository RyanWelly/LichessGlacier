//TODOs: Remove ultra/hyper/bullet tournaments from tournament list
// Add ability to set cooldowns for how long you want to be blocked from these time controls.
// Maybe add ability to set "reward periods" where these time controls are unblocked for 
// Make the changes persist.



function removeButtons() {
    let OnePlusZeroButton = document.querySelector('div[data-id^="1+0"]')
    OnePlusZeroButton.remove()

    let TwoPlusOneButton = document.querySelector('div[data-id^="2+1"]')
    TwoPlusOneButton.remove()

    let ThreePlusZero = document.querySelector('div[data-id^="3+0"]')
    ThreePlusZero.remove()

    let LobbyTab = document.querySelectorAll('span[role^="tab"]')[1]
    LobbyTab.remove()

    let CorrTab = document.querySelectorAll('span[role^="tab"]')[1]
    CorrTab.remove() //TODO: Clicking these buttons currently resets the removed buttons, need to fix that.


    //TODO: Resize the div the buttons are contained in, to make up for the space freed by removing the buttons.
}

function removeBulletTournamentsLobby() {
    let tournamentButtons = document.querySelector('div[class="lobby__spotlights"]')
    let listLobbyTournaments = tournamentButtons.childNodes
    
    for (const tourney of listLobbyTournaments) {
        if(tourney.textContent.includes("Bullet")) {tourney.remove()}
        //make the button red in colour, and not clickable.
    }

     
}

removeButtons()
removeBulletTournamentsLobby()






