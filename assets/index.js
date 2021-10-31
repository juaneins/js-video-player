import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.ts';

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

const button = document.querySelector('button');
button.onclick = () => player.togglePlay();

const buttonMute = document.getElementById('btnMute');
buttonMute.onclick = () => player.toggleMuted();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch((err) => {
    console.error(err.message);
  });
}
