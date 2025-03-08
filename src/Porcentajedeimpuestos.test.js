import porcentajedeimpuesto from "./porcentajedeimpuestos";


test("Calcula impuesto para CA (8.25%)", () => {
  expect(porcentajedeimpuesto(100, "CA")).toBeCloseTo(8.25);
});

test("Calcula impuesto para AL (4.00%)", () => {
  expect(porcentajedeimpuesto(100, "AL")).toBeCloseTo(4.00);
});

test("Calcula impuesto para NV (8.00%)", () => {
  expect(porcentajedeimpuesto(100, "NV")).toBeCloseTo(8.00);
});

test("Calcula impuesto para UT (6.65%)", () => {
  expect(porcentajedeimpuesto(100, "UT")).toBeCloseTo(6.65);
});

test("Calcula impuesto para TX (6.25%)", () => {
  expect(porcentajedeimpuesto(100, "TX")).toBeCloseTo(6.25);
});