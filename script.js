
document.addEventListener("DOMContentLoaded", () => {

  const openSurpriseButton = document.getElementById("openSurprise");
  const surpriseSection = document.getElementById("surprise");
  const wishButton = document.getElementById("wishBtn");
  const flame = document.getElementById("flame");
  const cakeCaption = document.getElementById("cakeCaption");
  const photoPicker = document.getElementById("photoPicker");
  const gallery = document.getElementById("gallery");
  const finalButton = document.getElementById("finalBtn");
  const finalMessage = document.getElementById("finalMessage");

  const musicPicker = document.getElementById("musicPicker");
  const musicToggle = document.getElementById("musicToggle");
  const birthdayMusic = document.getElementById("birthdayMusic");


  // BIRTHDAY MUSIC SETUP
  birthdayMusic.src = "./Sai%20Pallavis%20Intro.mp3";
  birthdayMusic.loop = true;
  birthdayMusic.preload = "auto";

  musicToggle.disabled = false;
  musicToggle.textContent = "▶";


  // OPEN SURPRISE AND AUTOMATICALLY PLAY MUSIC
  openSurpriseButton.addEventListener("click", async () => {

    surpriseSection.classList.remove("hidden");

    surpriseSection.scrollIntoView({
      behavior: "smooth"
    });

    launchConfetti();

    try {
      await birthdayMusic.play();
      musicToggle.textContent = "Ⅱ";
    } catch (error) {
      console.log("Music playback error:", error);
      musicToggle.textContent = "▶";
    }

  });


  // BLOW THE CANDLE
  wishButton.addEventListener("click", () => {

    flame.classList.add("out");

    cakeCaption.textContent =
      "May every beautiful wish of yours come true, Divya! 💗";

    wishButton.textContent = "Your wish is on its way ✨";
    wishButton.disabled = true;

    launchConfetti();

  });


  // UPLOAD BIRTHDAY PHOTOS
  photoPicker.addEventListener("change", (event) => {

    const files = Array.from(event.target.files);

    if (files.length === 0) return;

    gallery.innerHTML = "";

    files.forEach((file) => {

      if (!file.type.startsWith("image/")) return;

      const image = document.createElement("img");

      image.alt = "A special memory";
      image.src = URL.createObjectURL(file);

      gallery.appendChild(image);

    });

  });


  // FINAL BIRTHDAY MESSAGE
  finalButton.addEventListener("click", () => {

    finalMessage.classList.remove("hidden");

    finalMessage.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });

    launchConfetti();

  });


  // PLAY AND PAUSE MUSIC BUTTON
  musicToggle.addEventListener("click", async () => {

    if (birthdayMusic.paused) {

      try {
        await birthdayMusic.play();
        musicToggle.textContent = "Ⅱ";
      } catch (error) {
        console.error("Music playback error:", error);
      }

    } else {

      birthdayMusic.pause();
      musicToggle.textContent = "▶";

    }

  });


  // SELECT ANOTHER SONG
  musicPicker.addEventListener("change", async () => {

    const song = musicPicker.files[0];

    if (!song) return;

    birthdayMusic.src = URL.createObjectURL(song);

    try {
      await birthdayMusic.play();
      musicToggle.textContent = "Ⅱ";
    } catch (error) {
      console.error("Music playback error:", error);
    }

  });


  // MUSIC ERROR CHECK
  birthdayMusic.addEventListener("error", () => {
    console.error("Could not load birthday music. Check the MP3 file path.");
  });


  // FLOATING HEARTS
  function createFloatingHeart() {

    const heart = document.createElement("span");

    heart.className = "heart-float";
    heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 18) + "px";
    heart.style.animationDuration = (7 + Math.random() * 7) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 15000);

  }

  setInterval(createFloatingHeart, 850);


  // CONFETTI ANIMATION
  function launchConfetti() {

    const symbols = ["♥", "✦", "●", "✧"];
    const colors = ["#ffb8d8", "#e1caff", "#ffe7a8", "#ffffff"];

    for (let i = 0; i < 75; i++) {

      const piece = document.createElement("span");

      piece.className = "confetti";

      piece.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

      piece.style.left = Math.random() * 100 + "vw";

      piece.style.color =
        colors[Math.floor(Math.random() * colors.length)];

      piece.style.fontSize = (8 + Math.random() * 13) + "px";

      piece.style.animationDelay = Math.random() * 1.2 + "s";

      document.body.appendChild(piece);

      setTimeout(() => piece.remove(), 5000);

    }

  }

});
