// Array med sangene (50 sanger, som tidligere)
const songList = [
    "Dancing Queen - ABBA", "Take On Me - a-ha", "Shape of You - Ed Sheeran", "Bohemian Rhapsody - Queen", "Smells Like Teen Spirit - Nirvana",
    "Blinding Lights - The Weeknd", "Jolene - Dolly Parton", "Hotel California - Eagles", "Wonderwall - Oasis", "Toxic - Britney Spears",
    "Rolling in the Deep - Adele", "Let It Go - Idina Menzel (Frozen)", "Beat It - Michael Jackson", "Sweet Child O' Mine - Guns N' Roses", "Born This Way - Lady Gaga",
    "I Will Survive - Gloria Gaynor", "Wake Me Up - Avicii", "Hello - Adele", "Livin' on a Prayer - Bon Jovi", "Wannabe - Spice Girls",
    "Shallow - Lady Gaga & Bradley Cooper", "Viva La Vida - Coldplay", "Take Me To Church - Hozier", "Call Me Maybe - Carly Rae Jepsen", "Stairway to Heaven - Led Zeppelin",
    "Happy - Pharrell Williams", "We Will Rock You - Queen", "Halo - Beyoncé", "Lose Yourself - Eminem", "Imagine - John Lennon",
    "Let Her Go - Passenger", "Heroes - David Bowie", "I Gotta Feeling - Black Eyed Peas", "Hey Jude - The Beatles", "Shake It Off - Taylor Swift",
    "Chandelier - Sia", "All Star - Smash Mouth", "Clocks - Coldplay", "Love Story - Taylor Swift", "Somebody to Love - Queen",
    "What a Wonderful World - Louis Armstrong", "Firework - Katy Perry", "Cheap Thrills - Sia", "Counting Stars - OneRepublic", "Say You Won't Let Go - James Arthur",
    "Thunder - Imagine Dragons", "Beautiful Day - U2", "Poker Face - Lady Gaga", "Royals - Lorde", "No Tears Left to Cry - Ariana Grande",
    "Girls Like You - Maroon 5", "Radioactive - Imagine Dragons", "Roar - Katy Perry", "Old Town Road - Lil Nas X"
];

// Velger tilfeldig 25 sanger fra listen
const selectedSongs = [];
while (selectedSongs.length < 25) {
    const randomIndex = Math.floor(Math.random() * songList.length);
    const randomSong = songList[randomIndex];
    if (!selectedSongs.includes(randomSong)) {
        selectedSongs.push(randomSong);
    }
}

// Funksjon for å generere gridet
const gridContainer = document.getElementById("song-grid");
selectedSongs.forEach(song => {
    const songDiv = document.createElement("div");
    songDiv.classList.add("song");
    songDiv.textContent = song;
    gridContainer.appendChild(songDiv);
    
    // Legg til event listener for klikk
    songDiv.addEventListener("click", function() {
        songDiv.classList.toggle("clicked");
    });
});
