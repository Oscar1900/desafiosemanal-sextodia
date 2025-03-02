let titulo = document.querySelector('h1');
titulo.innerHTML = 'LISTA DE VENDEDORES';

let vendedores= ["Cristina", "Oscar", "Patricia", "Jorge", "Omaira", "Monica", "Juan", "Carlos"];
function Añadir() {
   alert("Lista de vendedores: " + vendedores.join(", "));
   let nuevoVendedor = prompt("Ingrese el nombre del nuevo vendedor:");
   nuevoVendedor = nuevoVendedor.charAt(0).toUpperCase() + nuevoVendedor.slice(1).toLowerCase();
    if (nuevoVendedor) {
        if (vendedores.includes(nuevoVendedor)) {
            alert("El vendedor ya existe en la lista.");
            return;
        }
        vendedores.push(nuevoVendedor);
    }
   alert(`Se añadio ${nuevoVendedor} a la lista de vendedores.`);
}


function Eliminar(){
    alert("Lista de vendedores: " + vendedores.join(", "));
    let vendedorParaEliminar = prompt("Ingrese el nombre del vendedor a eliminar:");
    vendedorParaEliminar = vendedorParaEliminar.charAt(0).toUpperCase() + vendedorParaEliminar.slice(1).toLowerCase();
    if (vendedores.includes(vendedorParaEliminar)) {
        vendedores = vendedores.filter(vendedor => vendedor !== vendedorParaEliminar);
        alert(`Se eliminó ${vendedorParaEliminar} de la lista de vendedores.`);
    } else {
        alert("El vendedor no existe en la lista.");
    }
}