export function factorize(input: number): number[] {
  var factor = getFactor(input), output = [factor];
  input = input / factor;
  while (input != 1) {
    factor = getFactor(input);
    output.push(factor);
    input = input / factor;
  }
  return output;
}

// Implementations are ten-a-penny, but I enjoy the silliness of this one.
// @see http://www.javascripter.net/math/primes/factorization.htm
function getFactor(input: number): number {
  if (input % 2 == 0) return 2;
  if (input % 3 == 0) return 3;
  if (input % 5 == 0) return 5;

  const max = Math.sqrt(input);
  for (let i = 7; i <= max; i += 30) {
    if (input % i == 0) return i;
    if (input % (i + 4) == 0) return i + 4;
    if (input % (i + 6) == 0) return i + 6;
    if (input % (i + 10) == 0) return i + 10;
    if (input % (i + 12) == 0) return i + 12;
    if (input % (i + 16) == 0) return i + 16;
    if (input % (i + 22) == 0) return i + 22;
    if (input % (i + 24) == 0) return i + 24;
  }

  return input;
}
