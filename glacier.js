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

    //add event listener on the other two lobby tabs to automatically call all these removals again.


    let CorrTab = document.querySelectorAll('span[role^="tab"]')[1]
    CorrTab.remove()
    console.log("test")
}


removeButtons()





