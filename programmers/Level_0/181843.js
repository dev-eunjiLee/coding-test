function solution(my_string, target) {
  return my_string.indexOf(target) === -1 ? 0 : 1;
}

console.log(solution("banana", "ana"));
