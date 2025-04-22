function openTab(tabName) {
    // Hide all tab contents
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Remove 'active' class from all buttons
    const tabButtons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Show the selected tab and mark button as active
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}
// ===== LOCAL STORAGE ===== //
// Load saved data on page load
window.addEventListener('load', () => {
    const savedLost = JSON.parse(localStorage.getItem('lostDocs')) || [];
    const savedFound = JSON.parse(localStorage.getItem('foundDocs')) || [];
    lostDocs.push(...savedLost); // Merge with existing array
    foundDocs.push(...savedFound);
});

// Save data on form submission (modify existing listeners)
document.querySelector('#lost form').addEventListener('submit', function(e) {
    // ... (existing code)
    localStorage.setItem('lostDocs', JSON.stringify(lostDocs)); // New
});
