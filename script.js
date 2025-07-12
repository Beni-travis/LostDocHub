// ----------------------
// 🌐 Section Switcher
// ----------------------
function showSection(sectionId) {
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(sec => {
    sec.classList.add('hidden');
    sec.classList.remove('active');
  });
  document.getElementById(sectionId).classList.remove('hidden');
  document.getElementById(sectionId).classList.add('active');
}

// ----------------------
// 🔐 Login Functions
// ----------------------

// Show login modal
function showLogin() {
  document.getElementById("loginModal").classList.remove("hidden");
  document.getElementById("signupModal").classList.add("hidden");
}

// Hide login modal
function closeLoginModal() {
  document.getElementById("loginModal").classList.add("hidden");
}

// Simulate login (you’ll replace with real validation later)
function fakeLogin() {
  window.location.href = "user.html";
}

// ----------------------
// 🆕 Signup Functions
// ----------------------

// ✅ Fix: Show signup modal from nav bar
function showSignup() {
  document.getElementById("signupModal").classList.remove("hidden");
  document.getElementById("loginModal").classList.add("hidden");
}

// Switch from login to signup
function switchToSignup() {
  document.getElementById("loginModal").classList.add("hidden");
  document.getElementById("signupModal").classList.remove("hidden");
}

// Switch from signup back to login
function switchToLogin() {
  document.getElementById("signupModal").classList.add("hidden");
  document.getElementById("loginModal").classList.remove("hidden");
}

// Hide signup modal
function closeSignupModal() {
  document.getElementById("signupModal").classList.add("hidden");
}

// Simulate signup
function fakeSignup() {
  alert("Signup successful! Redirecting to your dashboard...");
  window.location.href = "user.html";
}
