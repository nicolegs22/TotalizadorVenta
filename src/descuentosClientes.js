function calcularDescuentoCliente(precioNeto, categoria, tipoCliente) {
    let descuentoFijo = 0;
  
    if (tipoCliente === "Recurrente" && precioNeto > 3000 && categoria === "Alimentos") {
      descuentoFijo = 100;
    }
  
    if (tipoCliente === "Especial" && precioNeto > 7000 && categoria === "Electrónicos") {
      descuentoFijo = 200;
    }
  
    return descuentoFijo;
  }
  
  export { calcularDescuentoCliente };
  