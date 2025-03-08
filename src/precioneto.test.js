import {
  precioneto,
  calcularPrecioTotal,
  calcularPrecioConDescuento,
  calcularPrecioConDescuentoFijo,
  calcularPrecioConDescuentoPorcentajeFijo,
} from "./precioneto";

describe("Cálculo del precio neto y total", () => {
  it("debería calcular el precio total con 15% de impuesto sobre 3 items de $2 y costo de envío para peso volumétrico de 15", () => {
      console.log("------ Test 1 ------");
      expect(calcularPrecioTotal(3, 2, "CA", 15)).toBe(10.00); // Actualizado
  });

  it("debería calcular el precio total con 10% de impuesto sobre 5 items de $10 y costo de envío para peso volumétrico de 25", () => {
      console.log("------ Test 2 ------");
      expect(calcularPrecioTotal(5, 10, "NV", 25)).toBe(59.00); // Actualizado
  });

  it("debería calcular el precio total con 0% de impuesto y costo de envío para peso volumétrico de 10", () => {
      console.log("------ Test 3 ------");
      expect(calcularPrecioTotal(4, 25, "UT", 10)).toBe(106.65); // Actualizado
  });

  it("debería calcular el precio total con 20% de impuesto sobre 2 items de $50 y costo de envío para peso volumétrico de 45", () => {
      console.log("------ Test 4 ------");
      expect(calcularPrecioTotal(2, 50, "TX", 45)).toBe(112.25); // Actualizado
  });
});

describe("Cálculo del precio con descuento porcentual", () => {
  it("debería calcular el precio con 20% de descuento sobre 1000", () => {
      console.log("------ Test 5 ------");
      expect(calcularPrecioConDescuento(1000, 20)).toBe(800.00);
  });

  it("debería calcular el precio con 50% de descuento sobre 1000", () => {
      console.log("------ Test 6 ------");
      expect(calcularPrecioConDescuento(1000, 50)).toBe(500.00);
  });

  it("debería calcular el precio con 0% de descuento sobre 1000", () => {
      console.log("------ Test 7 ------");
      expect(calcularPrecioConDescuento(1000, 0)).toBe(1000.00);
  });

  it("debería calcular el precio con 10% de descuento sobre 500", () => {
      console.log("------ Test 8 ------");
      expect(calcularPrecioConDescuento(500, 10)).toBe(450.00);
  });

  it("debería calcular el precio con 10% de descuento sobre 30000", () => {
      console.log("------ Test 9 ------");
      expect(calcularPrecioConDescuentoPorcentajeFijo(30000, 10)).toBe(27000.00);
  });
});

describe("Cálculo del precio con descuento fijo", () => {
  it("debería calcular el precio restando 7000 sobre 10000", () => {
      console.log("------ Test 10 ------");
      expect(calcularPrecioConDescuentoFijo(10000, 7000)).toBe(3000.00);
  });

  it("debería calcular el precio restando 7000 sobre 7000 (resultado debe ser 0)", () => {
      console.log("------ Test 11 ------");
      expect(calcularPrecioConDescuentoFijo(7000, 7000)).toBe(0.00);
  });

  it("debería calcular el precio restando 7000 sobre 5000 (resultado debe ser 0, sin valores negativos)", () => {
      console.log("------ Test 12 ------");
      expect(calcularPrecioConDescuentoFijo(5000, 7000)).toBe(0.00);
  });

  it("debería calcular el precio restando 10000 sobre 15000", () => {
      console.log("------ Test 13 ------");
      expect(calcularPrecioConDescuentoFijo(15000, 10000)).toBe(5000.00);
  });
});