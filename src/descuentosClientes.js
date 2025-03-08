function calcularDescuentoCliente(precioNeto, categoria, tipoCliente) {
    let descuentoFijo = 0;
  
    if (tipoCliente === "Recurrente" && precioNeto > 3000 && categoria === "Alimentos") {
      descuentoFijo = 100;
    }
      
    return descuentoFijo;
  }
  
  export { calcularDescuentoCliente };
  