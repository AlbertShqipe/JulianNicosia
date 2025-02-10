import { Controller } from "@hotwired/stimulus"
import Player from '@vimeo/player';

// Connects to data-controller="vimeo"
export default class extends Controller {
  connect() {
    // console.log("✅ Stimulus controller connected");
    const aitiiPc = document.getElementById("aitii");
    const aitiiPh = document.getElementById("aitii-ph");
    const backgroundAitiiPc = document.getElementById("and-if-this-is-it-pc");
    const backgroundAitiiPh = document.getElementById("and-if-this-is-it-ph");

    if (!aitiiPc || !backgroundAitiiPc) {
      console.error("❌ Missing aitiiPC!");
      return;
    }

    if (!aitiiPh || !backgroundAitiiPh) {
      console.error("❌ Missing aitiiPh!");
      return;
    }

    // Initially hide the video smoothly
    aitiiPc.style.opacity = "0";
    aitiiPc.style.transition = "opacity 1s ease-in-out"; // Smooth transition

    aitiiPh.style.opacity = "0";
    aitiiPh.style.transition = "opacity 1s ease-in-out";

    // And if this is it
    const playerAitiiPc = new Player(aitiiPc);

    playerAitiiPc.on("play", () => {
      console.log("▶️ Played the video aitiiPc!");
      aitiiPc.style.opacity = "1"; // Fade-in effect
    });

    const playerAitiiPh = new Player(aitiiPh);

    playerAitiiPh.on("play", () => {
      console.log("▶️ Played the video aitiiPh!");
      aitiiPh.style.opacity = "1"; // Fade-in effect
    });


    // Check if the element exists
    // if (aitiiPc) {
    //   console.log("🎥 Vimeo iframe found:", aitiiPc);
    //   try {
    //     const player = new Player(aitiiPc);

    //     player.on("play", () => {
    //       console.log("▶️ Played the video!");
    //     });

    //     player.on("error", (error) => {
    //       console.error("❌ Vimeo Player Error:", error);
    //     });

    //     player.getDuration().then((duration) => {
    //       console.log(`⏳ Video duration: ${duration} seconds`);
    //     });

    //   } catch (e) {
    //     console.error("❌ Error initializing Vimeo Player:", e);
    //   }

    // } else {
    //   console.error("❌ Vimeo iframe not found!");
    // }
  }
}
