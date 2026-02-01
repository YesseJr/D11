const artists = [
  {
    name: "Michael Jackson",
    genre: "Pop, R&B, Rock",
    bio: "The King of Pop, Michael Jackson revolutionized music with his iconic dance moves, groundbreaking music videos, and timeless hits. His influence on pop culture is immeasurable.",
    imageColor: "linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)",
    image: "./img/Michael.jpg",
    songs: [
      { title: "Thriller", year: "1982", audio: "./Audios/Thriller.mp3" },
      { title: "Billie Jean", year: "1983", audio: "./Audios/Billie.mp3" },
      { title: "Beat It", year: "1983", audio: "./Audios/Beat.mp3" },
      { title: "Smooth Criminal", year: "1988", audio: "./Audios/Smooth.mp3" },
      { title: "Black or White", year: "1991", audio: "./Audios/BOW.mp3" },
      { title: "Man in the Mirror", year: "1988", audio: "./Audios/Man.mp3" }
    ]
  },
  {
    name: "Monique Seka",
    genre: "Afro-Pop, Zouk",
    bio: "Ivorian music icon Monique Seka is known for her powerful voice and energetic performances. She has been a pioneering force in African pop music since the 1980s.",
    imageColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    image: "./img/Seka.jpg",
    songs: [
      { title: "Missounwa", year: "1986", audio: "./Audios/Seka-Missounwa.mp3" },
      { title: "Okaman", year: "1987", audio: "./Audios/Seka-Okaman.mp3" },
      { title: "Mawa Née", year: "1988", audio: "./Audios/Seka-MawaNee.mp3" },
      { title: "Tantie Affoué", year: "1990", audio: "./Audios/Seka-TantieAffoue.mp3" },
      { title: "Paradis", year: "1991", audio: "./Audios/Seka-Paradis.mp3" }
    ]
  },
  {
    name: "Post Malone",
    genre: "Hip-Hop, Pop, R&B",
    bio: "Post Malone blends hip-hop, pop, and rock to create his unique sound. Known for his melodic style and heartfelt lyrics, he's become one of the biggest artists of his generation.",
    imageColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    image: "./img/Malone.jpg",
    songs: [
      { title: "Psycho", year: "2018", audio: "./Audios/Psycho.mp3" },
      { title: "Sunflower", year: "2018", audio: "./Audios/Sunflower.mp3" },
      { title: "Rockstar", year: "2017", audio: "./Audios/Rockstar.mp3" },
      { title: "Congratulations", year: "2016", audio: "./Audios/Congratulations.mp3" },
      { title: "Better Now", year: "2018", audio: "./Audios/Better.mp3" },
      { title: "Die For Me", year: "2018", audio: "./Audios/Die.mp3" }
    ]
  },
  {
    name: "Sia",
    genre: "Pop, Indie Pop",
    bio: "Australian singer-songwriter Sia is known for her powerful vocals, emotional songwriting, and unique artistic vision. She's also a successful songwriter for other major artists.",
    imageColor: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    image: "./img/Sia.jpg",
    songs: [
      { title: "I'm Still Here", year: "2018", audio: "./Audios/Here.mp3" },
      { title: "Bird Set Me Free", year: "2015", audio: "./Audios/Bird.mp3" },
      { title: "Never Give Up", year: "2016", audio: "./Audios/Never.mp3" },
      { title: "Titanium", year: "2011", audio: "./Audios/Sia-Titanium.mp3" },
      { title: "Unstoppable", year: "2016", audio: "./Audios/Unstoppable.mp3" },
      { title: "The Greatest", year: "2016", audio: "./Audios/Greatest.mp3" }
    ]
  },
  {
    name: "The Weeknd",
    genre: "R&B, Pop, Alternative R&B",
    bio: "The Weeknd has redefined contemporary R&B with his distinctive voice and dark, atmospheric productions. His artistic vision and chart-topping hits have made him a global superstar.",
    imageColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    image: "./img/Weeknd.jpg",
    songs: [
      { title: "Blinding Lights", year: "2019", audio: "./Audios/Lights.mp3" },
      { title: "Starboy", year: "2016", audio: "./Audios/Starboy.mp3" },
      { title: "Call Out My Name", year: "2018", audio: "./Audios/Call.mp3" },
      { title: "Can't Feel My Face", year: "2015", audio: "./Audios/Face.mp3" },
      { title: "Save Your Tears", year: "2020", audio: "./Audios/Tears.mp3" },
      { title: "I Feel It Coming", year: "2016", audio: "./Audios/Feel.mp3" }
    ]
  },
  {
    name: "Taylor Swift",
    genre: "Pop, Country, Indie Folk",
    bio: "Taylor Swift is one of the best-selling music artists of all time. Known for her narrative songwriting and ability to reinvent her sound, she's won numerous awards and broken countless records.",
    imageColor: "linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)",
    image: "./img/Swift.jpg",
    songs: [
      { title: "Shake It Off", year: "2014", audio: "./Audios/Taylor-ShakeItOff.mp3" },
      { title: "Blank Space", year: "2014", audio: "./Audios/Taylor-BlankSpace.mp3" },
      { title: "Love Story", year: "2008", audio: "./Audios/Taylor-LoveStory.mp3" },
      { title: "Anti-Hero", year: "2022", audio: "./Audios/Taylor-AntiHero.mp3" },
      { title: "Cruel Summer", year: "2019", audio: "./Audios/Taylor-CruelSummer.mp3" },
      { title: "Wildest Dreams", year: "2015", audio: "./Audios/Taylor-WildestDreams.mp3" }
    ]
  },
  {
    name: "Ina Wroldsen",
    genre: "Pop, Electropop",
    bio: "Norwegian singer-songwriter Ina Wroldsen has written hits for numerous artists and achieved success as a solo artist. Her powerful voice and songwriting skills have made her a respected figure in pop music.",
    imageColor: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    image: "./img/Ina.jpg",
    songs: [
      { title: "Strongest", year: "2017", audio: "./Audios/Ina-Strongest.mp3" },
      { title: "Forgiveness", year: "2019", audio: "./Audios/Ina-Forgiveness.mp3" },
      { title: "Aliens", year: "2018", audio: "./Audios/Ina-Aliens.mp3" },
      { title: "Sea", year: "2020", audio: "./Audios/Ina-Sea.mp3" },
      { title: "Mama's Boy", year: "2019", audio: "./Audios/Ina-MamasBoy.mp3" }
    ]
  },
  {
    name: "Halsey",
    genre: "Alternative Pop, Electropop",
    bio: "Halsey is known for her distinctive voice, honest lyrics, and genre-blending music. She's become a voice for her generation, addressing important social issues through her art.",
    imageColor: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    image: "./img/Halsey.jpg",
    songs: [
      { title: "Without Me", year: "2018", audio: "./Audios/Halsey-WithoutMe.mp3" },
      { title: "Closer", year: "2016", audio: "./Audios/Halsey-Closer.mp3" },
      { title: "Bad at Love", year: "2017", audio: "./Audios/Halsey-BadAtLove.mp3" },
      { title: "Eastside", year: "2018", audio: "./Audios/Halsey-Eastside.mp3" },
      { title: "Graveyard", year: "2019", audio: "./Audios/Halsey-Graveyard.mp3" },
      { title: "Colors", year: "2016", audio: "./Audios/Halsey-Colors.mp3" }
    ]
  },
  {
    name: "Faouzia",
    genre: "Pop, R&B",
    bio: "Moroccan-Canadian singer Faouzia has captivated audiences with her powerful vocals and emotional performances. Her multilingual abilities and songwriting talent have earned her international recognition.",
    imageColor: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    image: "./img/Faouzia.jpg",
    songs: [
      { title: "Tears of Gold", year: "2020", audio: "./Audios/Faouzia-TearsOfGold.mp3" },
      { title: "Born Without a Heart", year: "2018", audio: "./Audios/Faouzia-BornWithoutAHeart.mp3" },
      { title: "Battle", year: "2019", audio: "./Audios/Faouzia-Battle.mp3" },
      { title: "Minefields", year: "2020", audio: "./Audios/Faouzia-Minefields.mp3" },
      { title: "Hero", year: "2021", audio: "./Audios/Faouzia-Hero.mp3" },
      { title: "Don't Tell Me I'm Pretty", year: "2021", audio: "./Audios/Faouzia-DontTellMeImPretty.mp3" }
    ]
  },
  {
    name: "Dua Lipa",
    genre: "Pop, Dance-Pop",
    bio: "British-Albanian pop star Dua Lipa has dominated the charts with her disco-influenced pop sound and empowering anthems. Her distinctive voice and style have made her one of pop's biggest stars.",
    imageColor: "linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)",
    image: "./img/Dua.jpg",
    songs: [
      { title: "Levitating", year: "2020", audio: "./Audios/Dua-Levitating.mp3" },
      { title: "Don't Start Now", year: "2019", audio: "./Audios/Dua-DontStartNow.mp3" },
      { title: "New Rules", year: "2017", audio: "./Audios/Dua-NewRules.mp3" },
      { title: "Physical", year: "2020", audio: "./Audios/Dua-Physical.mp3" },
      { title: "One Kiss", year: "2018", audio: "./Audios/Dua-OneKiss.mp3" },
      { title: "IDGAF", year: "2018", audio: "./Audios/Dua-IDGAF.mp3" }
    ]
  },
  {
    name: "Nicki Minaj",
    genre: "Hip-Hop, Pop Rap",
    bio: "Nicki Minaj is one of the most influential female rappers of all time. Known for her versatile flow, animated persona, and chart-topping hits, she's broken numerous records and barriers in hip-hop.",
    imageColor: "linear-gradient(135deg, #ff0844 0%, #ffb199 100%)",
    image: "./img/Minaj.jpg",
    songs: [
      { title: "Super Bass", year: "2011", audio: "./Audios/Nicki-SuperBass.mp3" },
      { title: "Anaconda", year: "2014", audio: "./Audios/Nicki-Anaconda.mp3" },
      { title: "Starships", year: "2012", audio: "./Audios/Nicki-Starships.mp3" },
      { title: "Moment 4 Life", year: "2010", audio: "./Audios/Nicki-Moment4Life.mp3" },
      { title: "Bang Bang", year: "2014", audio: "./Audios/Nicki-BangBang.mp3" },
      { title: "Chun-Li", year: "2018", audio: "./Audios/Nicki-ChunLi.mp3" }
    ]
  },
  {
    name: "Oliver N'Goma",
    genre: "Afro-Zouk, Soukous",
    bio: "Gabonese music legend Oliver Ngoma was known for his smooth voice and romantic songs. He was The King of Afro-Zouk music and left an indelible mark on African music before his passing in 2010.",
    imageColor: "linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)",
    image: "./img/Oliver.png",
    songs: [
      { title: "Bane", year: "1990", audio: "./Audios/Oliver-Bane.mp3" },
      { title: "Adia", year: "1995", audio: "./Audios/Oliver-Adia.mp3" },
      { title: "Mawonami", year: "1993", audio: "./Audios/Oliver-Mawonami.mp3" },
      { title: "Nge Nge", year: "1998", audio: "./Audios/Oliver-NgeNge.mp3" },
      { title: "Icole", year: "2000", audio: "./Audios/Oliver-Icole.mp3" }
    ]
  }
];

let currentAudio = null;
let currentSongCard = null;

function createGallery() {
  const gallery = document.getElementById("gallery");
  artists.forEach((artist, index) => {
    const card = document.createElement("div");
    card.className = "artist-card";
    card.style.background = artist.imageColor;
    card.onclick = () => openProfile(index);

    card.innerHTML = `
      <img src="${artist.image}" alt="${artist.name}" class="artist-image" onerror="this.style.display='none'">
      <div class="artist-overlay">
        <div class="artist-name">${artist.name}</div>
        <div class="artist-genre">${artist.genre}</div>
      </div>
    `;

    gallery.appendChild(card);
  });
}

function openProfile(index) {
  const artist = artists[index];
  const modal = document.getElementById("profileModal");
  const content = document.getElementById("profileContent");

  const songsHTML = artist.songs
  .map(
    (song, songIndex) => `
      <div class="song-card" id="song-${index}-${songIndex}">
        <div class="song-info">
          <div class="song-title">🎵 ${song.title}</div>
          <div class="song-year">${song.year}</div>
        </div>
        <button class="play-btn" onclick="playSong(${index}, ${songIndex})">▶</button>
      </div>
    `
  )
  .join("");


  content.innerHTML = `
    <span class="close-btn" onclick="closeProfile()">&times;</span>
    <div class="profile-header">
      <img src="${artist.image}" alt="${artist.name}" class="profile-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
      <div style="width: 200px; height: 200px; border-radius: 50%; background: ${artist.imageColor}; border: 5px solid #ffd700; box-shadow: 0 10px 30px rgba(0,0,0,0.5); display: none; align-items: center; justify-content: center; font-size: 3em;">
        🎤
      </div>
      <div class="profile-info">
        <h2>${artist.name}</h2>
        <p><strong>Genre:</strong> ${artist.genre}</p>
        <p>${artist.bio}</p>
      </div>
    </div>

    <div class="songs-section">
      <h3>🌟 Hit Songs 🌟</h3>
      <div class="songs-grid">${songsHTML}</div>
    </div>

    <div id="audioPlayer" class="audio-player">
      <audio id="audioElement" controls>
        <source id="audioSource" src="" type="audio/mp3">
        Your browser does not support the audio element.
      </audio>
      <div id="audioTitle"></div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function playSong(artistIndex, songIndex) {
  const artist = artists[artistIndex];
  const song = artist.songs[songIndex];

  const audioElement = document.getElementById("audioElement");
  const audioSource = document.getElementById("audioSource");
  const audioTitle = document.getElementById("audioTitle");

  // Stop previous song
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Reset highlight
  if (currentSongCard) {
    currentSongCard.style.backgroundColor = "transparent";
  }

  // Set new audio
  audioSource.src = song.audio;
  audioElement.load();
  audioElement.play();

  audioTitle.innerHTML = `Now Playing: ${song.title}`;

  currentAudio = audioElement;

  // Highlight current song card
  const songCard = document.getElementById(`song-${artistIndex}-${songIndex}`);
  songCard.style.backgroundColor = "#e0e0e0";
  currentSongCard = songCard;
}

function closeProfile() {
  const modal = document.getElementById("profileModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}

// Close modal when clicking outside the content
document.getElementById("profileModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeProfile();
  }
});

// Initialize gallery on page load
createGallery();
