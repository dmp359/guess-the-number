export function randInt(lower, upper) {
  const min = Math.ceil(lower);
  const max = Math.floor(upper);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}