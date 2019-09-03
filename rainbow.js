var randomColor = require('randomcolor'); // import the script

let col = process.argv[3]; //set a variable that uses the third user input (node and xxxx.js being 0 and 1)
let lum = process.argv[2]; //set a variable that uses the second user input (node and xxxx.js being 0 and 1)
var color = randomColor({
  hue: col,
  luminosity: lum
}); // hand over the user input arguments to the randomColor function (according to its readme documentation)

const chalk = require('chalk'); //import the script

console.log(
  chalk.hex(color)(`
  ##############################
  ##############################
  ##############################
  ##########           #########
  ########## ${color}   #########
  ##########           #########
  ##############################
  ##############################
  ##############################`)
);
