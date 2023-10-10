import { boxClick } from './box';
import { headerClick } from './header';
import '../css/style.css';
// Import yellow robot image as Yellow
import Yellow from '../images/yellow-robot.png';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);

// Set src of #box element to Yellow
document.getElementById('box').src = Yellow;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
	.then(() => console.log('SW registered'))
	.catch(err => console.log('Err registering sw', err))
}
