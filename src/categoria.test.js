import { calcularPrecioConCategoria } from "./categoria";

describe("Cálculo de precio con categoría de producto", () => {
    it("debería aplicar el impuesto y descuento para la categoría Alimentos", () => {
        expect(calcularPrecioConCategoria(1000, 100, "Alimentos")).toBe(1078.00);
    });

    it("debería aplicar el impuesto para la categoría Bebidas alcohólicas (sin descuento)", () => {
        expect(calcularPrecioConCategoria(1000, 100, "Bebidas alcohólicas")).toBe(1170.00);
    });

    it("debería aplicar el descuento para la categoría Material de escritorio (sin impuesto adicional)", () => {
        expect(calcularPrecioConCategoria(1000, 100, "Material de escritorio")).toBe(1083.5);
    });

    it("debería aplicar el impuesto adicional para la categoría Muebles", () => {
        expect(calcularPrecioConCategoria(1000, 100, "Muebles")).toBe(1130.00);
    });

    it("debería aplicar el impuesto y descuento para la categoría Electrónicos", () => {
        expect(calcularPrecioConCategoria(1000, 100, "Electrónicos")).toBe(1128.6);
    });

    it("debería aplicar el impuesto adicional para la categoría Vestimenta", () => {
        expect(calcularPrecioConCategoria(1000, 100, "Vestimenta")).toBe(1120.00);
    });

    it("debería devolver el precio original para la categoría Varios", () => {
        expect(calcularPrecioConCategoria(1000, 100, "Varios")).toBe(1100.00);
    });
});
