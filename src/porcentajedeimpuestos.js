const tasasDeImpuestos = {
  UT: 6.65,
  NV: 8.00,
  TX: 6.25,
  AL: 4.00,
  CA: 8.25
};

function porcentajedeimpuesto(monto, estado) {
  const porcentaje = tasasDeImpuestos[estado];
  if (porcentaje === undefined) {
    throw new Error("Estado no válido");
  }
  return monto * (porcentaje / 100);
}

export default porcentajedeimpuesto;
