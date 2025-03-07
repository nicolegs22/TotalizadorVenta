const tasasDeImpuestos = {
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