function solution(n) {
  let answer = 0;
  if (n % 7 === 0) {
    answer = n / 7;
  } else {
    answer = Math.ceil(n / 7);
  }
  return answer;
}
