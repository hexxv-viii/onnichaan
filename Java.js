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
    alert('Aww thanks!And Remember not to treat me like a shit ever again!');
    console.log('Cat image display:', catImage.style.display);
    catImage.style.display = 'none'; /* Hide the cute cat GIF */
    console.log('Dancing GIF display:', dancingGif.style.display);
    dancingGif.style.display = 'block'; /* Show the dancing GIF */
    dancingGif.style.visibility = 'visible';
    setTimeout(() => {
        console.log('Dancing GIF display after timeout:', dancingGif.style.display);
        dancingGif.style.display = 'none'; /* Hide the dancing GIF */
        dancingGif.style.visibility = 'hidden';
        catImage.style.display = 'block'; /* Show the cute cat GIF again */
    }, 2000);
});

noBtn.addEventListener('click', () => {
    console.log('No button clicked!');
    hackedBackground.style.display = 'block';
    setTimeout(() => {
        alert('System compromised... You are under my control now.');
        setTimeout(() => {
            hackedBackground.style.display = 'none';
            alert('Just kidding pookiee!');
        }, 1000);
    }, 1000);
});