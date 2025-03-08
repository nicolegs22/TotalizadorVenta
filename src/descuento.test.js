import { calcularPrecioTotalConDescuento, obtenerPorcentajeDescuento } from "./descuento";

describe("Cálculo del porcentaje de descuento", () => {
    it("debería aplicar un 3% de descuento para un total de $1000", () => {
        expect(obtenerPorcentajeDescuento(1000)).toBe(3);
    });

    it("debería aplicar un 5% de descuento para un total de $3000", () => {
        expect(obtenerPorcentajeDescuento(3000)).toBe(5);
    });

    it("debería aplicar un 7% de descuento para un total de $7000", () => {
        expect(obtenerPorcentajeDescuento(7000)).toBe(7);
    });

    it("debería aplicar un 10% de descuento para un total de $10000", () => {
        expect(obtenerPorcentajeDescuento(10000)).toBe(10);
    });

    it("debería aplicar un 15% de descuento para un total de $30000", () => {
        expect(obtenerPorcentajeDescuento(30000)).toBe(15);
    });
});

describe("Cálculo del precio total con descuento", () => {
    it("debería calcular el precio total con descuento del 3% para total de $1000 y $100 de impuesto", () => {
        expect(calcularPrecioTotalConDescuento(1000, 100)).toBe(1070.00);
    });

    it("debería calcular el precio total con descuento del 5% para total de $3000 y $200 de impuesto", () => {
        expect(calcularPrecioTotalConDescuento(3000, 200)).toBe(3050.00);
    });

    it("debería calcular el precio total con descuento del 7% para total de $7000 y $500 de impuesto", () => {
        expect(calcularPrecioTotalConDescuento(7000, 500)).toBe(7010.00);
    });

    it("debería calcular el precio total con descuento del 10% para total de $10000 y $800 de impuesto", () => {
        expect(calcularPrecioTotalConDescuento(10000, 800)).toBe(9800.00);
    });

    it("debería calcular el precio total con descuento del 15% para total de $30000 y $1500 de impuesto", () => {
        expect(calcularPrecioTotalConDescuento(30000, 1500)).toBe(27000.00);
    });
});