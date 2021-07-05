var data = sessionStorage.getItem('user');

$("#user").html(data);

$("#salir").click(function (e) {
    e.preventDefault();
    window.location = 'login.html';
});

/*-------Funciones-------*/

$("#op1").click(function (e) { 
    e.preventDefault();
    window.location = 'funciones/1_crear_usuario.html';
});