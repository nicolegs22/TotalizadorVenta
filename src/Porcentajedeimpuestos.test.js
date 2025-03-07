import porcentajedeimpuesto from "./porcentajedeimpuestos";


test("Calcula impuesto para CA (8.25%)", () => {
  expect(porcentajedeimpuesto(100, "CA")).toBeCloseTo(8.25);
});