import { calcularPrecioConDescuento, calcularPrecioTotalConDescuento } from "./descuento";

test("Calcula descuento del 10% sobre 100", () => {
  expect(calcularPrecioConDescuento(100, 10)).toBe(90.00);
});

test("Calcula descuento del 25% sobre 200", () => {
  expect(calcularPrecioConDescuento(200, 25)).toBe(150.00);
});

test("Calcula precio total con descuento (100 de neto, 10 de impuesto, 5 de descuento)", () => {
  expect(calcularPrecioTotalConDescuento(100, 10, 5)).toBe(105.00);
});

test("Calcula precio total con descuento del 20% sobre 500 con 50 de impuesto", () => {
    expect(calcularPrecioTotalConDescuento(500, 50, 20)).toBe(450.00);
  });
  
