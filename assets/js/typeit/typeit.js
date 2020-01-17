new TypeIt('.words-effect', {
  speed: 100,
  startDelay: 900,
  loop: true,
  loopDelay: 1300
}).type('I love to coed')
  .pause(300)
  .delete(2)
  .pause(250)
  .type('de')
  .pause(750)
  .options({speed: 100, deleteSpeed: 75})
  .delete(8)
  .pause(750)
  .type('<em> to develop.</em>')
  .go();
