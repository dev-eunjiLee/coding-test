function solution(num_list, n) {
  return [...num_list.slice(n, num_list.length), ...num_list.slice(0, n)];
}

console.log(solution([2, 1, 6], 1));
