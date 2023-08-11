const ballColor = {
  red:"",
  black:"",
  green:""
}

const playerAballColors = {
 red: 2,
 black: 4,
 green: 1
}
const arrA = [playerAballColors]
const playerBballColor = {
 red: 4,
 black: 1,
 green: 2
}
 ballColor.red = playerAballColors.red +playerBballColor.red
 ballColor.black = playerAballColors.black +playerBballColor.black
 ballColor.green = playerAballColors.green +playerBballColor.green
for(const key in ballColor){
 console.log(key,":",ballColor[key])
}
//neechy wala solution => try to use reduce but sure nhi hn reduce ko use krne ka haq ada kiya ya na 

  const arr = [playerAballColors,playerBballColor]
  const red = arr.reduce(
    (totalRed,arr) => totalRed + arr.red,0
  )
   ballColor.red = red;

  const black = arr.reduce(
    (totalBlack,arr) => totalBlack + arr.black,0
  )
  ballColor.black = black;

  const green = arr.reduce(
    (totalGreen,arr) => totalGreen + arr.green,0
  )
  ballColor.green = green

  console.log(ballColor)