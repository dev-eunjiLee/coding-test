function solution(num_list, n) {
  return num_list.indexOf(n) === -1 ? 0 : 1;
}

console.log(solution([1, 2, 3, 4, 5], 3));
