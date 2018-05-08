const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']

window.kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name){
  kittens.push(name)
  return destructivelyAppendKitten()
}
