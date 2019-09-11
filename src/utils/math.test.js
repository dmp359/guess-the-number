import { randInt } from './math';

it('generates number with the same bounds', () => {
  expect(randInt(1, 1)).toEqual(1);
  expect(randInt(50, 50)).toEqual(50);
});

it('generates a number in bounds', () => {
  const lower = 1;
  const upper = 10;
  let num = randInt(lower, upper);

  // Test 100 numbers
  for (var i = 0; i < 100; i++) {
    expect(num).toBeGreaterThan(lower - 1);
    expect(num).toBeLessThan(upper + 1);
    num = randInt(lower, upper);
  }
});
