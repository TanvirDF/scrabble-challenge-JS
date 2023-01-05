const values = {
  'A': 1,
  'B': 3,
  'C': 3,
  'D': 2,
  'E': 1,
  'F': 4,
  'G': 2,
  'H': 4,
  'I': 1,
  'J': 8,
  'K': 5,
  'L': 1,
  'M': 3,
  'N': 1,
  'O': 1,
  'P': 3,
  'Q': 10,
  'R': 1,
  'S': 1,
  'T': 1,
  'U': 1,
  'V': 4,
  'W': 4,
  'X': 8,
  'Y': 4,
  'Z': 10,
};

class Scrabble {

  constructor(word) {
    this.word = word
  }


  score() {

    if (this.word === null) {
      return 0
    }

    let word = this.word.toUpperCase()
    let totalScore = 0

    for (let i of word) {
      let score = values[i]
      if (score) {
        totalScore += score
      } else {
        return 0
      }
    }
    return totalScore
  }

}
module.exports = Scrabble











//******test********
let scrabble = new Scrabble('cabbage')
console.log(scrabble.score())

let scrabble1 = new Scrabble('')
console.log(scrabble1.score())


let scrabble2 = new Scrabble(" \t\n")
console.log(scrabble2.score())


let scrabble3 = new Scrabble(null)
console.log(scrabble3.score())


let scrabble4 = new Scrabble('a')
console.log(scrabble4.score())


let scrabble5 = new Scrabble('f')
console.log(scrabble5.score())


let scrabble6 = new Scrabble('street')
console.log(scrabble6.score())


let scrabble7 = new Scrabble('quirky')
console.log(scrabble7.score())


let scrabble8 = new Scrabble('OXYPHENBUTAZONE')
console.log(scrabble8.score())
