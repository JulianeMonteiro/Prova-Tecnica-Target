function pertenceFibonacci(n) {
  let a = 0,
    b = 1;
  while (a < n) {
    [a, b] = [b, a + b];
  }
  return a === n;
}

const numero = parseInt(
  prompt(
    "Informe um número para verificar se pertence à sequência de Fibonacci:"
  )
);

if (pertenceFibonacci(numero)) {
  console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
