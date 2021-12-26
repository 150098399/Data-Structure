/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
  const year = +date.slice(0,4);
  const month = +date.slice(5,7);
  const day = +date.slice(8);
  
  const amount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    ++amount[1];
  }

  let result = 0;
  for (let i =0; i < month - 1; i++) {
    result += amount[i]
  }

  return result + day
};

// test
const date = "2019-02-10";
console.log(dayOfYear(date))   // 41

/**
 * 如何判断闰年
 * year 是 400 的倍数， 或者 year 是 4 的倍数且不是 100 的倍数
 */
