import { Controller } from "@hotwired/stimulus";
import Player from "@vimeo/player";

// Connects to data-controller="vimeo"
export default class extends Controller {
  connect() {
    const minWidth = 760;
    const videos = [
      { id: "aitii", bgId: "and-if-this-is-it" },
      { id: "fot", bgId: "fragments-of-time" },
      { id: "lh", bgId: "love-hurts" },
      { id: "vop", bgId: "veil-of-perspective" },
      { id: "cf", bgId: "celestial-fractures" },
      // { id: "lgdd", bgId: "le-gout-de-dieu" },
    ];

    // Store players so we can properly destroy them
    this.players = [];

    videos.forEach(({ id }) => {
      this.setupPlayer(id);
    });

    this.handleVideoLoading(minWidth, videos);
  }

  setupPlayer(id) {
    const pcVideo = document.getElementById(id);
    const phVideo = document.getElementById(`${id}-ph`);

    if (!pcVideo || !phVideo) return;

    const setupFadeEffect = (video) => {
      video.style.opacity = "0";
      video.style.transition = "opacity 1s ease-in-out";
    };

    setupFadeEffect(pcVideo);
    setupFadeEffect(phVideo);

    const playerPc = new Player(pcVideo);
    const playerPh = new Player(phVideo);

    this.players.push({ player: playerPc, element: pcVideo });
    this.players.push({ player: playerPh, element: phVideo });

    const addPlayListener = (player, video, label) => {
      player.on("play", () => {
        console.log(`▶️ Played the video ${label}!`);
        video.style.opacity = "1";
      });
    };

    addPlayListener(playerPc, pcVideo, `${id}Pc`);
    addPlayListener(playerPh, phVideo, `${id}Ph`);
  }

  handleVideoLoading(minWidth, videos) {
    const isMobile = window.innerWidth <= minWidth;

    videos.forEach(({ id }) => {
      const pcVideo = document.getElementById(id);
      const phVideo = document.getElementById(`${id}-ph`);

      if (isMobile && pcVideo) {
        this.destroyPlayer(pcVideo);
      } else if (!isMobile && phVideo) {
        this.destroyPlayer(phVideo);
      }
    });
  }

  destroyPlayer(videoElement) {
    const playerEntry = this.players.find((p) => p.element === videoElement);
    if (playerEntry) {
      playerEntry.player.destroy().then(() => {
        console.log(`🛑 Destroyed player for`, videoElement.id);
        videoElement.innerHTML = ""; // Remove the iframe properly
      }).catch((error) => {
        console.error(`❌ Error destroying player:`, error);
      });
    }
  }
}
