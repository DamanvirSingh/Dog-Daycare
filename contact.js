// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
function handleSubmission() {
    const contactPage = document.getElementById('contact-page');
    contactPage.innerHTML = '<p style="font-size: 24px;">Thank you for your message</p>';
}

document.getElementById('submit-button').addEventListener('click', handleSubmission);

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
function handleSubmission() {
    
    const contactPage = document.getElementById('contact-page');
    const thankYouMessage = document.createElement('p');
    thankYouMessage.innerText = 'Thank you for your message';
    thankYouMessage.style.fontSize = '24px';
    
    contactPage.innerHTML = '';
    contactPage.appendChild(thankYouMessage);
}

// Add event listener to the submit button
document.getElementById('submit-button').addEventListener('click', handleSubmission);
