// Function to update the clock's hand based on real time
function updateClock() {
    const hand = document.getElementById('hand');
    const now = new Date();

    // Get the current hour and minute
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Calculate the rotation degree: (hours * 60 + minutes) / 2 = total degrees
    // 12 hours in 360 degrees, hence 30 degrees per hour
    const totalDegrees = ((hours % 12) * 60 + minutes) * 0.5; 

    // Rotate the hand based on the calculated degrees
    hand.style.transform = `rotate(${totalDegrees}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize clock on page load
updateClock();
