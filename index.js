// add solution here
function theBeatlesPlay(musicians,instruments){
  let returnArray = [];
  for(let counter = 0; counter < musicians.length; counter++){
    let plays = musicians[counter] + ' plays ' + instruments[counter];
    returnArray.push(plays);
  }
  return returnArray;
}

function johnLennonFacts(facts){
  let counter = 0;
  while(counter < facts.length){
    let fact = facts[counter];
    fact += '!!!'
    counter++;
  }
}