// Liste over de 50 sangene med artister
const allSongs = [
    "Dancing Queen - ABBA",
    "Take On Me - a-ha",
    "Shape of You - Ed Sheeran",
    "Bohemian Rhapsody - Queen",
    "Smells Like Teen Spirit - Nirvana",
    "Blinding Lights - The Weeknd",
    "Jolene - Dolly Parton",
    "Hotel California - Eagles",
    "Wonderwall - Oasis",
    "Toxic - Britney Spears",
    "Rolling in the Deep - Adele",
    "Let It Go - Idina Menzel",
    "Beat It - Michael Jackson",
    "Sweet Child O' Mine - Guns N' Roses",
    "Born This Way - Lady Gaga",
    "I Will Survive - Gloria Gaynor",
    "Wake Me Up - Avicii",
    "Hello - Adele",
    "Livin' on a Prayer - Bon Jovi",
    "Wannabe - Spice Girls",
    "Shallow - Lady Gaga & Bradley Cooper",
    "Viva La Vida - Coldplay",
    "Take Me To Church - Hozier",
    "Call Me Maybe - Carly Rae Jepsen",
    "Stairway to Heaven - Led Zeppelin",
    "Happy - Pharrell Williams",
    "We Will Rock You - Queen",
    "Halo - Beyoncé",
    "Lose Yourself - Eminem",
    "Imagine - John Lennon",
    "Let Her Go - Passenger",
    "Heroes - David Bowie",
    "I Gotta Feeling - Black Eyed Peas",
    "Hey Jude - The Beatles",
    "Shake It Off - Taylor Swift",
    "Chandelier - Sia",
    "All Star - Smash Mouth",
    "Clocks - Coldplay",
    "Love Story - Taylor Swift",
    "Somebody to Love - Queen",
    "What a Wonderful World - Louis Armstrong",
    "Firework - Katy Perry",
    "Cheap Thrills - Sia",
    "Counting Stars - OneRepublic",
    "Say You Won't Let Go - James Arthur",
    "Thunder - Imagine Dragons",
    "Beautiful Day - U2",
    "Poker Face - Lady Gaga",
    "Royals - Lorde",
    "No Tears Left to Cry - Ariana Grande",
    "Girls Like You - Maroon 5",
    "Radioactive - Imagine Dragons",
    "Roar - Katy Perry",
    "Old Town Road - Lil Nas X"
];

// Funksjon for å trekke 25 tilfeldige sanger
function getRandomSongs() {
    const shuffled = allSongs.sort(() => 0.5 - Math.random()); // Bland listen
    return shuffled.slice(0, 25); // Hent de første 25 sangene fra den blandede listen
}

// Når siden lastes inn, vis 25 tilfeldige sanger i et grid
window.onload = function() {
    const selectedSongs = getRandomSongs();
    const songGrid = document.getElementById('song-grid');

    selectedSongs.forEach(song => {
        const songElement = document.createElement('div');
        songElement.classList.add('song');
        songElement.textContent = song;

        // Legger til event listener for å gjøre ruten grønn når man klikker på den
        songElement.onclick = function() {
            songElement.classList.toggle('clicked');
        };

        songGrid.appendChild(songElement);
    });
}
