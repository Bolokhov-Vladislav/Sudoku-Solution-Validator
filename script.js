function arrayToObject(array){
    let initialValue = {};

    return array.reduce(function(accumulator, currentValue) {
      let arrayOwnValue  = Object.entries(currentValue);
      arrayOwnValue.map(function(item) {
        let [value, key] = item;
        accumulator[key] = value;
      });
      return accumulator;

    }, initialValue);
  }
  
let input = [ { k1: "v1" }, { k2: "v2" }, { k3: "v3" } ];
console.log(arrayToObject(input));
  
////////////////////////////////////////////////////////////////////////////


function validSolution(arrey){
  
  for(let a = 0; a < 3; a++){
    
    for(let s = 0; s < 3; s++){
      if(getSection(a,s,arrey).sort().join() !== "1,2,3,4,5,6,7,8,9"){
        return false;
      }
    }
  }

  for (let r = 0; r < 9; r++){
    if (arrey[r].slice().sort().join() !== "1,2,3,4,5,6,7,8,9"){ 
      return false;
    }
    let columnArr = [];
    for (let c = 0; c < 9; c++){
      columnArr.push(arrey[c][r]);
    }
    if (columnArr.sort().join() !== "1,2,3,4,5,6,7,8,9"){
      return false;
    }
  }
  return true;
}


function getSection(a,s,arrey){
  let sectionArrey = [];
  for (let i=  3 * a; i <3 * (a + 1); i++){
    sectionArrey = sectionArrey.concat(arrey[i].slice(3 * s, 3 * (s + 1)));
  }
  return sectionArrey;
}

console.log(validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]));

// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2], 
//   [6, 7, 2, 1, 9, 0, 3, 4, 8],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]); // => false



