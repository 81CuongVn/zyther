const fetch = require('node-fetch')

setInterval(async () => {
  await fetch('https://zyther.glitch.me/').then(console.log('Pinged!'))
}, 240000)