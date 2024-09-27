// JavaScript for toggling active model selection
const modelButtons = document.querySelectorAll('.model-btn');
const humanizeBtn = document.getElementById('humanizeBtn');
const inputText = document.getElementById('inputText');
const outputBox = document.getElementById('outputBox');

// Toggle model selection
modelButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        modelButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to the clicked button
        button.classList.add('active');
    });
});

// Humanize button functionality
humanizeBtn.addEventListener('click', () => {
    const text = inputText.value.trim();
    
    if (text === "") {
        outputBox.textContent = "Please enter text to humanize.";
    } else {
        // For now, we will just display the entered text as "humanized" content
        outputBox.textContent = `Humanized Content: ${text}`;
    }
});
