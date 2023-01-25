export const strictEquals = (a, b) => {
  if (Object.is(a, NaN) && Object.is(NaN, b)) {
    return false;
  }

  if (
    (Object.is(a, -0) && Object.is(0, b)) ||
    (Object.is(a, 0) && Object.is(-0, b))
  ) {
    return true;
  }

  return Object.is(a, b);
};
