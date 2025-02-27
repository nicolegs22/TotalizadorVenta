import porcentajedeimpuesto from "./porcentajedeimpuestos.js";

describe("Cálculo de impuesto", () => {
  it("debería calcular el 5% de 100 como 5", () => {
    expect(porcentajedeimpuesto(100, 5)).toEqual(5);
  });
  it("debería calcular el 10% de 200 como 20", () => {
    expect(porcentajedeimpuesto(200, 10)).toEqual(20);
  });
  it("debería calcular el 8% de 50 como 4", () => {
    expect(porcentajedeimpuesto(50, 8)).toEqual(4);
  });
});
