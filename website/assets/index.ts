import MediaPlayer from '@sparragus/platzimediaplayer/lib/MediaPlayer';
import AutoPlay from '@sparragus/platzimediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@sparragus/platzimediaplayer/lib/plugins/AutoPause';
import Ads from '@sparragus/platzimediaplayer/lib/plugins/Ads';

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

const button: HTMLElement = document.querySelector('button');
button.onclick = () => player.togglePlay();

const buttonMute: HTMLElement = document.getElementById('btnMute');
buttonMute.onclick = () => player.toggleMuted();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch((err) => {
    console.error(err.message);
  });
}
