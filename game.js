// when button is pressed, then change die images to gif animation
const dieImages = document.querySelectorAll("#gameboard img")
document.getElementById("rollButton").addEventListener("click", event => {
    // console.log(event)
    // dieImages[0].src = "assets/die_rolling.gif;"
    dieImages.forEach((image) => {
        if(isDieUnlocked(image)) {
            image.src = "assets/die_rolling.gif";
        }
    })
    setTimeout(() => {
        dieImages.forEach((image) => {
            if(isDieUnlocked(image)) {
                image.src = "assets/white_dice_" + (Math.floor(Math.random() * 5) + 1) + ".gif";
            }
        })
        // console.log(Math.floor(Math.random() * 5) + 1)
    }, 500);

    // change images to random numbers
});

function isDieUnlocked(dieImage) {
    const checkboxes = document.querySelectorAll("#gameboard input");
    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);

    return unchecked.find(checkbox => checkbox.className === dieImages.className);
}