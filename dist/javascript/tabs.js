// script.js

// Get elements for tabs and content
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

// Function to show content when a tab is clicked
function showContent(tabIndex) {
  // Hide all content
  contents.forEach(content => content.classList.remove('active-content'));
  // Show selected content
  contents[tabIndex].classList.add('active-content');
  
  // Style tabs (active tab highlighting)
  tabs.forEach(tab => tab.classList.remove('active-tab'));
  tabs[tabIndex].classList.add('active-tab');
}

// Set up event listeners for tabs
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    showContent(index);
  });
});

// Initialize the first tab and content to be active
showContent(0);

// Initialize Dragabilly for draggable tabs
tabs.forEach(tab => {
  new Dragabilly(tab);
});
