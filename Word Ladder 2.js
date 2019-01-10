// 这个方法解决不出来~~
var findLadders = function(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return [];
  let mostLength = 0;
  let object = { [beginWord]: { parent: [] } };
  let array = findDifferenceOne(beginWord, endWord, wordList, object);
  array.forEach(elem => {
    object[elem] = {};
    object[elem].parent = [beginWord];
  })
  let result = [];
  while (array.length) {
    let item = array.shift();
    if (item === endWord) {
      let parantList = getParentList(item, object, beginWord);
      if (mostLength === 0) {
        mostLength = parantList.length;
      }
      if (parantList.length === mostLength) {
        result.push(parantList);
      }
    } else if (mostLength === 0) {
      let array2 = findDifferenceOne(item, endWord, wordList, object);
      array2.forEach(elem => {
        if (object[elem]) {
          object[elem].parent.push(item);
        } else {
          object[elem] = {};
          object[elem].parent = [item];
        }
      })
      if (array2.length > 0 && item !== endWord) {
        array.push(...array2)
      }
    }
  }
  return result;
};

function findDifferenceOne(beginWord, endWord, list, object) {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    if (isDiffOne(beginWord, item)&& !object[beginWord].parent.includes(item)) {
      if (item !== beginWord) {
        result.push(item);
      }
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

function getParentList(word, object, beginWord) {
  let result = [];

  return (function findParent(item) {
    result.unshift(item)
    let parent = object[item].parent.shift();
    if (parent === beginWord) object[item].parent.push(parent);
    if (parent) return findParent(parent)
    return result
  })(word)
}
let param = ['qa', 'sq', ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]];
// let param = ['red', 'tax', ["ted","tex","red","tax","tad","den","rex","pee"]];
let result = findLadders(...param);
console.log(result)