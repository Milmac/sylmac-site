document.addEventListener("DOMContentLoaded", function(){
    initBackgroundMovement();
    initButtonFadeIn();
})

function initBackgroundMovement() {
    const body = document.body;
    const multiplier = 20;
    let targetY = 0;
    let currentY = 0;

    body.addEventListener("mousemove", (event) => {
        // Calculate the target position based on mouse position relative to the body
        targetY = (event.clientY / window.innerHeight) * multiplier;
    });

    function animateBackground() {
        // Gradually update the currentY value towards the targetY value
        currentY += (targetY - currentY) * 0.1; // Adjust the easing factor (0.1) as needed for smoother/slower transition

        // Update the background position with the currentY value
        body.style.backgroundPositionY = `${currentY}%`;

        requestAnimationFrame(animateBackground);
    }

    animateBackground();
}

function initButtonFadeIn(){
    var button = document.getElementById("fade-in");
    setTimeout(function(){
        button.style.opacity = 1;
    }, 1000); //adjust delay as needed
}