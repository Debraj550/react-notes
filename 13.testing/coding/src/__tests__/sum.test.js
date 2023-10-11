import { sum } from "../components/Sum";

test("Sum function calculates the sum of two numbers", () => {
  const res = sum(3, 4);
  expect(res).toBe(7);
});
