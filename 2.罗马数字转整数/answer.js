/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const symbolVals = new Map();
  symbolVals.set('I',1);
  symbolVals.set('V',5);
  symbolVals.set('X',10);
  symbolVals.set('L',50);
  symbolVals.set('C',100);
  symbolVals.set('D',500);
  symbolVals.set('M',1000);
  let answer = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const value = symbolVals.get(s[i])
    if(i < n-1 && value < symbolVals.get(s[i +1])){
      answer -= value;
    } else {
      answer += value;
    }
  }
  return answer;
};
s = "M"

console.log(romanToInt(s))