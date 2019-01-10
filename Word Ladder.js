var ladderLength = function(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;
  let object = { [beginWord]: { parent: null } };
  let array = findDifferenceOne(beginWord, wordList, object);
  array.forEach(elem => {
    object[elem] = {};
    object[elem].parent = beginWord;
  })
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (item === endWord) {
      return getParentList(item, object).length;
    }
    let array2 = findDifferenceOne(item, wordList, object);
    array2.forEach(elem => {
      object[elem] = {};
      object[elem].parent = item;
    })
    if (array2.length > 0) {
      array.push(...array2)
    }
  }
  return 0;
};

function findDifferenceOne(word, list, object) {
  let result = [];
  for (let i = 0; i < list.length;) {
    let item = list[i];
    if (isDiffOne(word, item) && !object[item]) {
      result.push(item);
      list.splice(i, 1)
    } else {
      i++
    }
  }
  return result;
};

function isDiffOne(a, b) {
  let diff = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) diff ++;
    if (diff > 1) return false;
  };
  return true;
}

function getParentList(word, object) {
  let result = [];

  return (function findParent(item) {
    result.push(item)
    if (object[item].parent) return findParent(object[item].parent)
    return result
  })(word)
}

let param = ['a', 'c', ['a','b','c']];
// let param = ['lost', 'miss', ["most","mist","miss","lost","fist","fish"]];
let result = ladderLength(...param);
console.log(result)