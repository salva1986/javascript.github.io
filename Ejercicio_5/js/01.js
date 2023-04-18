var producto = prompt("Ingrese el producto que desea ")

if(producto === "agua"){
    alert("Por favor dirijase a la tienda")
   } else if (producto === "cerveza" || producto === "vino"){
       alert("Dirijete a la barra");
   }  else if (producto === "refresco"){
    alert("Por favor dirijase a la tienda")
   }else {
       alert("No ingresaste ningun producto");
   }
   