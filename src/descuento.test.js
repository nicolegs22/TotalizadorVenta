import { calcularPrecioConDescuento, calcularPrecioTotalConDescuento } from "./descuento";

test("Calcula descuento del 10% sobre 100", () => {
  expect(calcularPrecioConDescuento(100, 10)).toBe(90.00);
});

