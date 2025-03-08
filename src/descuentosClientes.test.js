import { calcularDescuentoCliente } from "./descuentosClientes";

describe("Cálculo de descuento fijo para clientes", () => {
  it("debería aplicar un descuento de $100 para cliente recurrente con precio neto mayor a 3000 y categoría Alimentos", () => {
    const descuento = calcularDescuentoCliente(3500, "Alimentos", "Recurrente");
    expect(descuento).toBe(100);
  });
});
