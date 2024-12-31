// Liste over alle 70 sanger
const allSongs = [
    "Sang 1", "Sang 2", "Sang 3", "Sang 4", "Sang 5", "Sang 6", "Sang 7", "Sang 8", "Sang 9", "Sang 10",
    "Sang 11", "Sang 12", "Sang 13", "Sang 14", "Sang 15", "Sang 16", "Sang 17", "Sang 18", "Sang 19", "Sang 20",
    "Sang 21", "Sang 22", "Sang 23", "Sang 24", "Sang 25", "Sang 26", "Sang 27", "Sang 28", "Sang 29", "Sang 30",
    "Sang 31", "Sang 32", "Sang 33", "Sang 34", "Sang 35", "Sang 36", "Sang 37", "Sang 38", "Sang 39", "Sang 40",
    "Sang 41", "Sang 42", "Sang 43", "Sang 44", "Sang 45", "Sang 46", "Sang 47", "Sang 48", "Sang 49", "Sang 50",
    "Sang 51", "Sang 52", "Sang 53", "Sang 54", "Sang 55", "Sang 56", "Sang 57", "Sang 58", "Sang 59", "Sang 60",
    "Sang 61", "Sang 62", "Sang 63", "Sang 64", "Sang 65", "Sang 66", "Sang 67", "Sang 68", "Sang 69", "Sang 70"
];

// Funksjon for å trekke 25 tilfeldige sanger
function getRandomSongs() {
    const shuffled = allSongs.sort(() => 0.5 - Math.random()); // Bland listen
    return shuffled.slice(0, 25); // Hent de første 25 sangene fra den blandede listen
}

// Når siden lastes inn, vis 25 tilfeldige sanger
window.onload = function() {
    const selectedSongs = getRandomSongs();
    const songList = document.getElementById('song-list');

    selectedSongs.forEach(song => {
        const listItem = document.createElement('li');
        listItem.textContent = song;
        songList.appendChild(listItem);
    });
}
