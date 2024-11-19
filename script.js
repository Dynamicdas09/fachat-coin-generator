// Function to generate coins when UID is entered
function generateCoins() {
    var uid = document.getElementById("uid").value; // Get the entered UID
    if (uid) {
        // Start animation and display result
        document.getElementById("coin-animation").style.display = "block";
        setTimeout(() => {
            // Stop animation after 3 seconds
            document.getElementById("coin-animation").style.display = "none";
        }, 3000);

        // Call to backend API to generate fake coins
        fetch(`http://localhost:3000/generate-coins?uid=${uid}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById("coin-result").innerText = `You have generated ${data.coins} unlimited coins!`;
            })
            .catch(error => {
                document.getElementById("coin-result").innerText = "Error generating coins. Please try again.";
            });
    } else {
        document.getElementById("coin-result").innerText = "Please enter a valid UID.";
    }
}
