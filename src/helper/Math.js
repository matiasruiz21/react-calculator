export function Math(calc) {
  /**   Operaciones especiales:
   *    -- -> +
   *    /-
   *    +-
   *    x-
   */

  let a3 = [];
  const numRegex = new RegExp(
    /(-*(\d*[.])?\d+(\/|x|%)-*(\d*[.])?\d+)|-*(\d*[.])?\d+/g
  );
  let a1 = calc.match(numRegex);

  a3 = a1.map((e) =>
    e.match(/-*(\d*[.])?\d+/g).reduce((acc, curr) => {
      if (/x/.test(e)) {
        return acc * parseFloat(curr);
      } else if (/\//.test(e)) {
        return acc / parseFloat(curr);
      }
      return acc;
    })
  );
  return a3.reduce((acc, curr) => parseFloat(acc) + parseFloat(curr));
}
