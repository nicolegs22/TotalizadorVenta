import precioneto from "./precioneto.js";

describe("Precio neto de  los Items", () => {
  it("deberia de mostrar el precio neto de los items", () => {
    expect(precioneto(3, 2)).toEqual(6);
  });
});
