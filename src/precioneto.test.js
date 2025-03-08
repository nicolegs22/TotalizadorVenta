import { precioneto, calcularPrecioTotal, calcularPrecioConDescuento } from "./precioneto";

describe("Cálculo del precio neto y total", () => {
    it("debería calcular el precio neto de los items", () => {
        expect(precioneto(3, 2)).toEqual(6);
    });

    it("debería calcular el precio total con 15% de impuesto sobre 3 items de $2", () => {
        expect(calcularPrecioTotal(3, 2, 15)).toBe(6.90);
    });

    it("debería calcular el precio total con 10% de impuesto sobre 5 items de $10", () => {
        expect(calcularPrecioTotal(5, 10, 10)).toBe(55.00);
    });

    it("debería calcular el precio total con 0% de impuesto", () => {
        expect(calcularPrecioTotal(4, 25, 0)).toBe(100.00);
    });

    it("debería calcular el precio total con 20% de impuesto sobre 2 items de $50", () => {
        expect(calcularPrecioTotal(2, 50, 20)).toBe(120.00);
    });
});

describe("Cálculo del precio con descuento", () => {
    it("debería calcular el precio con 20% de descuento sobre 1000", () => {
        expect(calcularPrecioConDescuento(1000, 20)).toBe(800.00);
    });

    it("debería calcular el precio con 50% de descuento sobre 1000", () => {
        expect(calcularPrecioConDescuento(1000, 50)).toBe(500.00);
    });

    it("debería calcular el precio con 0% de descuento sobre 1000", () => {
        expect(calcularPrecioConDescuento(1000, 0)).toBe(1000.00);
    });

    it("debería calcular el precio con 10% de descuento sobre 500", () => {
        expect(calcularPrecioConDescuento(500, 10)).toBe(450.00);
    });
});
