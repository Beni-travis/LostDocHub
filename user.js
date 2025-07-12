// 🏠 Go to visitor homepage (adjust filename if needed)
function goToVisitorHome() {
  window.location.href = "visitor.html"; // Update this if your visitor file has a different name
}

// 🚪 Logout Function: Alerts and redirects to visitor homepage
function logout() {
  alert("You have been logged out.");
  window.location.href = "visitor.html"; // Redirect to visitor homepage
}

// 📄 Section Switcher: Shows selected section, hides others
function showSection(sectionId) {
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(sec => {
    sec.classList.add('hidden');        // Hide all sections
    sec.classList.remove('active');     // Remove active status (if using styling)
  });

  // Show the selected section
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.classList.remove('hidden');
    activeSection.classList.add('active');
  }
}

// 💬 Chat Feature: Appends message from input to chat box
function sendMessage() {
  const input = document.getElementById("chatInput");
  const message = input.value.trim();

  if (message !== "") {
    // Create user's message bubble
    const chatBox = document.getElementById("chatMessages");
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("msg", "right"); // right = user message
    msgDiv.textContent = message;
    chatBox.appendChild(msgDiv);

    // Clear input box
    input.value = "";

    // Optional: auto-scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Optional: auto reply simulation
    setTimeout(() => {
      const reply = document.createElement("div");
      reply.classList.add("msg", "left");
      reply.textContent = "Thank you! We'll update you soon.";
      chatBox.appendChild(reply);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
  }
}
