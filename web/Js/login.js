//Se crea un evento y cada que envie el formulario se ejecuta el codigo dentro del evento
document.getElementById("form").addEventListener("submit", function (event) {
    
    //Evitamos que el formlulario recargue de nuevo la pagina
    event.preventDefault();

//Almacenamos el valor de los datos
    const username = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

//Almacenamos usuarios dentro del arreglo "usuarios"
    const usuarios = [
        {"usuario": "Admin1", "contrasena": "Admin1", "nombre": "Diego", "Sucursal": "Sucursal Norte"},
        {"usuario": "Admin2", "contrasena": "Admin2", "nombre": "Michelle", "Sucursal": "Sucursal Sur"},
        {"usuario": "Admin3", "contrasena": "Admin3", "nombre": "Yutzil", "Sucursal": "Sucursal Este"},
        {"usuario": "Admin4", "contrasena": "Admin4", "nombre": "Diego", "Sucursal": "Sucursal Norte"},
        {"usuario": "Admin5", "contrasena": "Admin5", "nombre": "M", "Sucursal": "Sucurs"},
        {"usuario": "Admin6", "contrasena": "Admin6", "nombre": "Y", "Sucursal": "Sucur"},
        {"usuario": "Admin7", "contrasena": "Admin7", "nombre": "", "Sucursal": "Sucursal Nor"},
        {"usuario": "Admin8", "contrasena": "Admin8", "nombre": "i", "Sucursal": "Suc"},
        {"usuario": "Admin9", "contrasena": "Admin9", "nombre": "u", "Sucursal": "Sucur"},
        {"usuario": "Admin10", "contrasena": "Admin10", "nombre": "a", "Sucursal": "Suc"}
    ];
 //Busca usuarios que coincidan con los proporcionados
    const usuario = usuarios.find(user => user.usuario === username && user.contrasena === password);

    if (usuario) {

        // Redireccionar a la página Menu para gestionar la pagina
        window.location.href = "menu.html";
        
    } else {
        // Mostrar mensaje de error
        Swal.fire({
            icon: 'error',
            title: 'error',
            text: 'Por favor, verifica tus datos.'
        });
    }
});




