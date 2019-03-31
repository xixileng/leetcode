function diff (oldTree, newTree) {
  const patches = {};

  let index = 0;

  walk(oldTree, newTree, index, patches);

  return patches;
}

function walk (oldNode, newNode, index, patches) {
  const current = [];

  if (!newNode) {
    current.push({ type: 'REMOVE', index });
  } else if (isString(oldNode) && isString(newNode)) {
    if (oldNode !== newNode) {
      current.push({ type: 'TEXT', text: newNode });
    }
  } else if (oldNode.type === newNode.type) {
    const attr = diffAttr(oldNode.props, newNode.props);
    if (Object.keys(attr).length > 0) {
      current.push({ type: 'ATTR', attr })
    }
    diffChildren(oldNode.children, newNode.children, patches);
  } else {
    current.push({ type: 'REPALCE', newNode })
  }

  if (current.length) {
    patches[index] = current;
  }
}

function isString (obj) {
  return typeof obj === 'string'
}

function diffAttr (oldAttrs, newAttrs) {
  const patch = {};
  for (const key in oldAttrs) {
    if (oldAttrs[key] !== newAttrs[key]) {
      patch[key] = newAttrs[key];
    }
  }
  for (const key in newAttrs) {
    if (!oldAttrs.hasOwnProperty(key)) {
      patch[key] = newAttrs[key];
    }
  }
  return patch;
}

let num = 0;

function diffChildren (oldChildren, newChildren, patches) {
  oldChildren.forEach((child, index) => {
    walk(child, newChildren[index], ++num, patches);
  })
}

export default diff;
