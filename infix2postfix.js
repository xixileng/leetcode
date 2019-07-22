const operator = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
  '(': 3,
  ')': 3
};
Array.prototype.top = function () {
  return this[this.length - 1];
}
const infix2postfix = function (infix) {
  const postfix = [];
  const stack = [];
  for (let i = 0; i < infix.length; i++) {
    const elem = infix[i];
    if (!operator[elem]) {
      postfix.push(elem);
    } else {
      let top = stack.top();
      if (operator[top] > operator[elem] && stack.top() !== '(') {
        const pop = stack.pop();
        postfix.push(pop);
        if (pop < operator[elem] || stack.top() === '(') {
          stack.push(elem);
        } else {
          postfix.push(elem);
        }
      } else {
        if (elem === ')') {
          while ((top = stack.pop()) !== '(') {
            postfix.push(top);
          }
        } else {
          stack.push(elem);
        }
      }
    }
  }
  let top;
  while (top = stack.pop()) {
    postfix.push(top);
  }
  return postfix.join(' ');
}

const infixExp = 'a+b*c+(d*e+f)*g';
const postfixExp = infix2postfix(infixExp)
console.log(postfixExp)
