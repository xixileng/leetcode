const operator = {
  '+': 1,
  '-': 1,
  '*': 1,
  '/': 1
};

const postfixCompute = function (postfix) {
  const stack = [];
  postfix.split(' ').forEach(item => {
    if (!operator[item]) {
      stack.push(item);
    } else {
      const result = eval(stack.pop() + item + stack.pop());
      stack.push(result);
    }
  });
  return stack.pop();
}

const postfix = '6 5 2 3 + 8 * + 3 + *';
const result = postfixCompute(postfix);
console.log(result);