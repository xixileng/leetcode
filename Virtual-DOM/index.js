import { createElement, render, renderDom } from './element.js';
import patch from './patch.js';
import diff from './diff.js';

const virtualDom = createElement('ul', { class: 'list' }, [
  createElement('li', { class: 'item' }, ['周杰伦']),
  createElement('li', { class: 'item' }, ['王力宏'])
]);

console.log('virtualDom', virtualDom)

const el = render(virtualDom);
console.log('el', el);
renderDom(el, document.body);

const virtualDom2 = createElement('ul', { class: 'list-new' }, [
  createElement('li', { class: 'item' }, ['噜啦啦']),
  createElement('li', { class: 'item active' }, ['啊哈哈'])
]);

const patches = diff(virtualDom, virtualDom2);
console.log('patches', patches)
patch(el, patches);
