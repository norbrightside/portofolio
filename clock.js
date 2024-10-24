// Function to update the clock's hand based on real time
function updateClock() {
    const hand = document.getElementById('hand');
    const now = new Date();

    // Get the current hour, minute, and second
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate the rotation degree: (hours * 60 + minutes) / 4 = total degrees
    // 24 hours in 360 degrees, hence 15 degrees per hour
    const totalDegrees = ((hours % 24) * 60 + minutes) * 0.25; 

    // Rotate the hand based on the calculated degrees
    hand.style.transform = `rotate(${totalDegrees}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize clock on page load
updateClock();
