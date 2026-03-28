"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userName = 'Pat';
const settings = {
    diff: 'easy',
    level: 10,
    didStart: false,
    players: ['One', 'Two']
};
function load(settings) {
    if (!settings.didStart) {
        console.log('Press X to start the game.');
    }
}
load(settings);
//# sourceMappingURL=typeof.js.map