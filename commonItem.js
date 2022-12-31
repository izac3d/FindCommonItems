const array1 = ['z', 'x', 'y', 'd'];
const array2 = ['w', 't', 's'];
/**
 * 
 * @param {Array} arr1 
 */

function containsCommonItems(arr1, arr2) {
    let map = {};
    for (let i = 0; i < arr1.length; i++) {
      if (!map[arr1[i]]) {
        item = arr1[i];
        map[item] = true;
      } 
    }
    
    for (let j = 0; j < arr2.length; j++){
      if (map[arr2[j]]) {
       return true; 
      }
    }
    return false;

}

//console.log(containsCommonItems(array1, array2));

function containsCommonItems2(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}

console.log(containsCommonItems2(array1, array2));