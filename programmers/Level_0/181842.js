function solution(str1, str2) {
  return str2.indexOf(str1) === -1 ? 0 : 1;
}

console.log(solution("abc", "aabcc"));
console.log(solution("tbt", "tbbttb"));
