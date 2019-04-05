import { Element, render, setAttr } from './element.js';

let allPatches;
let index = 0;

function patch (node, patches) {
  allPatches = patches;

  walk(node);
}

function walk (node) {
  const current = allPatches[index++];
  const childNodes = node.childNodes;

  childNodes.forEach(node => walk(node));

  if (current) {
    doPatch(node, current);
  }
}

function doPatch (node, patches) {
  patches.forEach(patch => {
    switch (patch.type) {
      case 'ATTR':
        for (const key in patch.attr) {
          const value = patch.attr[key];
          if (value) {
            setAttr(node, key, value);
          } else {
            node.removeAttribute(key)
          }
        }
        break;
      case 'TEXT':
        node.textContent = patch.text;
        break;
      case 'REPLACE':
        const newNode = patch.newNode;
        newNode = (newNode instanceof Element) ? render(newNode) : document.createTextNode(newNode);
        node.parentNode.replaceChild(newNode, node);
        break;
      case 'REMOVE':
        node.parentNode.removeChild(newNode, node);
        break;
      default:
        break;
    }
  })
}

export default patch;
