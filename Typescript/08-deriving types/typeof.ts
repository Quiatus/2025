const userName = 'Pat'

type UserName = typeof userName

const settings = {
  diff: 'easy',
  level: 10,
  didStart: false, 
  players: ['One', 'Two']
}

type Settings = typeof settings

function load(settings: Settings) {
  if (!settings.didStart) {
    console.log('Press X to start the game.')
  }
}

load(settings)