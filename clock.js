// Function to update the clock's hand
function updateClock() {
    const hand = document.getElementById('hand');
    const now = new Date();

    // Get the current hour and calculate the rotation degree
    const hours = now.getHours();
    const degrees = (hours % 24) * 15; // 24 hours, 360 degrees = 15 degrees per hour

    // Rotate the hand according to the current time
    hand.style.transform = `rotate(${degrees}deg)`;
}

// Call the function every second
setInterval(updateClock, 1000);

// Optional: Handle play button
document.getElementById('playButton').addEventListener('click', () => {
    alert('Activity schedule running!');
});
