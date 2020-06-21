const homepage = document.querySelector(`main`);

const header1 = document.createElement(`h1`);
header1.innerText = `The best How I Met Your Mother episode (according to fans)`
homepage.appendChild(header1);

const para1 = document.createElement(`p`);
para1.innerText = `As impossible as it seems to name just 1 of the 208 legendary episodes as the 
“best”, the fans have spoken and the highest rated episode is… wait for it…`

homepage.appendChild(para1);

const header2 = document.createElement(`h2`);
header2.innerText = `The Slap Bet (Season 2, Episode 9)`
homepage.appendChild(header2);

const imdb = document.createElement(`p`);  //actually wasn't in the solution?
imdb.innerText = `IMDB Rating: 9.5`;
homepage.appendChild(imdb);

const pictureRobin = document.createElement(`img`);  //nts : position of where the image is, is important, css didnt fix the position of the image//
pictureRobin.src = './images/robin-sparkles.jpg';
homepage.appendChild(pictureRobin);

const para2 = document.createElement(`p`); // so the spacing of where you type your text matters...//
para2.innerText = `In this episode, Ted is learning a few secrets about Robin, namely that she has
an unexplained aversion to the mall. Robin refuses to tell Ted and the others
why she won’t go to the mall, so the gang forms their own theories. Marshall
believes it’s because she got married in a mall and is still married. Barney
believes it has something to do with Robin having performed in a porn video.
The two of them make a slap bet with each other: whoever is right gets to slap
the other across the face as hard as he can. Lily is named the Slap Bet 
Commissioner, as long as she promises to be unbiased.`
homepage.appendChild(para2);

const para3 = document.createElement(`p`);
para3.innerText = `In the end, Robin’s big secret was revealed- she was a Canadian, teen pop
sensation named Robin Sparkles. Barney finds the music video for her hit
single “Lets Go To The Mall”. The slap bet takes a few turns throughout the
episode, but ends with Marshall having the right to slap Barney 5 times-
available for all of eternity (horrible call Barney).`
homepage.appendChild(para3);

const aSource = document.createElement(`a`);
aSource.href = `https://fonts.googleapis.com/css?family=Open+Sans|Playfair+Display&display=swap`;
aSource.innerText = `Source`;
homepage.appendChild(aSource);

const stylesheet = document.createElement('link');
stylesheet.rel = 'stylesheet';
stylesheet.href = 'styles.css';
document.head.appendChild(stylesheet);


// Add content to the elements
// Add content to the page!
// Add <link> to CSS
// You can target the <head> directly with document.head