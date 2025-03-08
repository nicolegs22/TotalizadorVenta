import { calcularDescuentoCliente } from "./descuentosClientes";

describe("Cálculo de descuento fijo para clientes", () => {
  it("debería aplicar un descuento de $100 para cliente recurrente con precio neto mayor a 3000 y categoría Alimentos", () => {
    const descuento = calcularDescuentoCliente(3500, "Alimentos", "Recurrente");
    expect(descuento).toBe(100);
  });

  it("no debería aplicar descuento para cliente recurrente con precio neto menor a 3000 y categoría Alimentos", () => {
    const descuento = calcularDescuentoCliente(2500, "Alimentos", "Recurrente");
    expect(descuento).toBe(0);
  });

  it("debería aplicar un descuento de $200 para cliente especial con precio neto mayor a 7000 y categoría Electrónicos", () => {
    const descuento = calcularDescuentoCliente(8000, "Electrónicos", "Especial");
    expect(descuento).toBe(200);
  });

  it("no debería aplicar descuento para cliente especial con precio neto menor a 7000 y categoría Electrónicos", () => {
    const descuento = calcularDescuentoCliente(6000, "Electrónicos", "Especial");
    expect(descuento).toBe(0);
  });
});
