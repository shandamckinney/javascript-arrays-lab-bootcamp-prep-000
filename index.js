const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']

window.kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

window.kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

window.kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

window.kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

window.kittens = ['Milo', 'Otis', 'Garfield']

function appendKitten(name){
  kittens.append()
  return kittens
}
