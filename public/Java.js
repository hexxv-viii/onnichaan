const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const hackedBackground = document.querySelector('.hacked-background');
const dancingGif = document.querySelector('.dancing-gif');
const catImage = document.querySelector('img');

console.log('Dancing GIF:', dancingGif);

dancingGif.src = 'https://media.tenor.com/906nGAL7Xw0AAAAi/mochi-peachcat-cute-cat.gif';
dancingGif.alt = 'Dancing Cat';
dancingGif.style.display = 'none';
dancingGif.style.visibility = 'hidden';

yesBtn.addEventListener('click', () => {
    console.log('Yes button clicked!');
    console.log('Cat image display:', catImage.style.display);
    catImage.style.display = 'none'; /* Hide the cute cat GIF */
    console.log('Dancing GIF display:', dancingGif.style.display);
    dancingGif.style.display = 'block'; /* Show the dancing GIF */
    dancingGif.style.visibility = 'visible';
    showPopup(); // Show the popup when the yes button is clicked
});

noBtn.addEventListener('click', () => {
    console.log('No button clicked!');
    catImage.style.display = 'none'; // Hide the cat GIF
    hackedBackground.style.display = 'block';
    setTimeout(() => {
        showCompromisedPopup(); // Show the first popup
    }, 2000);
});

// Function to show the "System Compromised" popup
function showCompromisedPopup() {
    const compromisedPopup = document.querySelector('.compromised-popup');
    compromisedPopup.classList.add('show');
    compromisedPopup.classList.remove('hide');

    setTimeout(() => {
        compromisedPopup.classList.add('hide');
        compromisedPopup.classList.remove('show');
        showJustKiddingPopup(); // Show the second popup
    }, 3000); // Adjust the duration as needed
}

// Function to show the "Just Kidding" popup
function showJustKiddingPopup() {
    const justKiddingPopup = document.querySelector('.just-kidding-popup');
    justKiddingPopup.classList.add('show');
    justKiddingPopup.classList.remove('hide');

    setTimeout(() => {
        justKiddingPopup.classList.add('hide');
        justKiddingPopup.classList.remove('show');
        hackedBackground.style.display = 'none'; // Hide the hacked background after the pop-ups are closed
        catImage.style.display = 'block'; // Show the cat GIF again
    }, 1300); // Adjust the duration as needed
}

// Function to show the popup
function showPopup() {
    const popup = document.querySelector('.popup');
    popup.classList.add('show');
    popup.classList.remove('hide');
}

// Function to hide the popup
function hidePopup() {
    const popup = document.querySelector('.popup');
    popup.classList.add('hide');
    popup.classList.remove('show');

    // Hide the dancing GIF and show the cute cat GIF again
    dancingGif.style.display = 'none';
    dancingGif.style.visibility = 'hidden';
    catImage.style.display = 'block'; /* Show the cute cat GIF again */

    // Optional: Remove the popup from the DOM after the transition
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300); // Match this duration with the CSS transition duration
}

// Add event listeners to the buttons
document.querySelector('.yes-btn').addEventListener('click', () => {
    showPopup(); // Show the popup when the yes button is clicked
});

document.querySelector('.close-btn').addEventListener('click', () => {
    hidePopup(); // Hide the popup when the close button is clicked
});

