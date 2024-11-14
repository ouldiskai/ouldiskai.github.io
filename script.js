const API_KEY = 'AIzaSyDvSLYVQaIIUx8ut-DfztF0Ga3pG0ZAI44';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;
document.addEventListener("DOMContentLoaded", function () {
    const chatBtn = document.getElementById("chatBtn");
    const chatPopup = document.getElementById("chatPopup");
    const closeBtn = document.getElementById("closeBtn");
    const sendBtn = document.getElementById("sendBtn");
    const chatMessages = document.getElementById("chatMessages");
    const userMessage = document.getElementById("userMessage");

    chatBtn.addEventListener("click", () => {
        chatPopup.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        chatPopup.style.display = "none";
    });

    sendBtn.addEventListener("click", () => {
        const message = userMessage.value;
        if (message.trim() !== "") {
            const messageElement = document.createElement("div");
            messageElement.textContent = "Você: " + message;
            chatMessages.appendChild(messageElement);
            userMessage.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });
});
