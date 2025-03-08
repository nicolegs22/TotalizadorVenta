function calcularDescuentoCliente(precioNeto, categoria, tipoCliente) {
    if (tipoCliente === "Recurrente" && precioNeto > 3000 && categoria === "Alimentos") {
      return 100; 
    }
    if (tipoCliente === "Especial" && precioNeto > 7000 && categoria === "Electrónicos") {
      return 200; 
    }
    return 0; 
  }
  
  export { calcularDescuentoCliente };
  