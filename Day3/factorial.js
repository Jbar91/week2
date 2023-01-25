export const factorial = (n) => {
  if (n === 0) return 1;
  if (n > 170)
    throw new Error('No se pueden calcular factoriales de este numero');
  return n * factorial(n - 1);
};
