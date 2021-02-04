import Fullscreen from './fullscreen.js';
import * as Diurnal from './lib/diurnal.js/diurnal.js';


Diurnal.bind();
new Fullscreen(document.getElementById('view'));
