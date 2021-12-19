/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */

/**
 * 
 * 基本概念：
 * 有向图节点的出度：顶点的出边条数称为该顶点的出度
 * 有向图节点的入度：顶点的入边条数称为该顶点的入度
 * 
 * 思路：假设法官存在，法官不相信任何人，每个人（除了法官自己）都信任法官，且只有一名法官，因此，
 * 法官节点的入度是n-1,出度是0
 * 
 * 遍历每个节点的入度和出度，如果找到一个符合的节点即：入度 === n-1 && 出度 === 0 ，则返回该节点， 否则，返回-1
 */
 var findJudge = function(n, trust) {
    const inDegrees = new Array(n + 1).fill(0);
    const outDegrees = new Array(n + 1).fill(0);
    for (const edge of trust) {
      const x = edge[0], y = edge[1];
      inDegrees[y] ++;
      outDegrees[x] ++;
    }
    for (let i = 1; i <= n; i++) {
      if(inDegrees[i] === n-1 && outDegrees[i] === 0) {
        return i;
      } 
    }
    return -1;
  
};

// test
var n = 4
var trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
console.log(findJudge(n,trust))