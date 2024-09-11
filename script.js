// script.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const users = {
        "user1": "password1",
        "user2": "password2",
        "user3": "password3",
        "user4": "password4",
        "user5": "password5",
        "user6": "password6",
        "user7": "password7",
        "user8": "password8",
        "user9": "password9",
        "user10": "password10"
    };

    if (users[username] && users[username] === password) {
        document.getElementById("message").textContent = "Login successful!";
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("videoContainer").style.display = "block";

        // Unmute the video after user interaction
        const video = document.getElementById("bgVideo");
        video.muted = false;  // Unmute the video
        video.play();  // Ensure the video continues playing
    } else {
        document.getElementById("message").textContent = "Incorrect username or password!";
    }
});
