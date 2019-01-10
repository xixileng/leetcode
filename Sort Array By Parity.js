var sortArrayByParityII = function(A) {
  var result = new Array(A.length);
  var oddIndex = 1, evenIndex = 0;
  
  for (var i = 0; i < A.length ; i++){
      if (A[i] % 2 === 0){
        result[evenIndex] = A[i];
          evenIndex += 2;
      }else{
        result[oddIndex] = A[i];
          oddIndex += 2;
      }
  }

  return result;
};
const param = [3,1,4,2];
const result = sortArrayByParityII(param);
console.log(result);