new TypeIt('.words-effect', {
  speed: 50,
  startDelay: 900
}).type('The most versatile animated typing utility on the internte')
  .pause(300)
  .delete(2)
  .pause(250)
  .type('et')
  .pause(750)
  .options({speed: 100, deleteSpeed: 75})
  .delete(8)
  .pause(750)
  .type('<em>planet.</em>')
  .go();

  /*new TypeIt('#simpleUsage', {
    strings: 'This is a simple string.',
    speed: 50,
    waitUntilVisible: true
  }).go();*/


// var words = ['abcd', 'efgh'];
// var container = document.querySelector('.words-effect');

// function TypeWriter(words, container) {
//   this.currentWordIndex = 0;
//   this.words = words;
//   this.container = container;
//   this.start();
// }

// TypeWriter.prototype.next = function() {
//   this.currentWordIndex = (this.currentWordIndex + 1) < this.words.length ? (this.currentWordIndex + 1) : 0;
//   this.type();
// }

// TypeWriter.prototype.start = function () {
//   console.log(this.words, this.container);
//   var word = this.words[this.currentWordIndex];
//   var typeLength = (word.length * 2);


  
// }

// TypeWriter.prototype.type = function(word, index) {

// }

// var typeWriter = new TypeWriter(words, container);