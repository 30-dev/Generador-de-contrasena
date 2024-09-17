let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar')
let contrasena = document.getElementById('contrasena');
let mensajeCantidad = document.getElementById('mensajeCantidadContrasena');
let recuadros = document.querySelectorAll('.recuadro');
let containerResultado = document.getElementById('containerResultado');
const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789[!@#$%^&*(),.?":{}|<>]';


function generar(){
    
    let numeroDigitado = parseInt(cantidad.value);

    
    if(numeroDigitado < 8){
        mensajeCantidad.textContent = "La cantidad de caracteres debe ser mayor a 8";
    } else if(numeroDigitado > 22){
        mensajeCantidad.textContent = "La cantidad de caracteres debe ser menor a 22";
    } else {
        mensajeCantidad.textContent = '';
    }

    
    if(numeroDigitado >= 8 && numeroDigitado <= 22) {
        let password = "";
        for(let i = 0; i < numeroDigitado; i++ ){
            let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
            password += caracterAleatorio;
        }
      
        contrasena.value = password;
        containerResultado.style.display = "block";
    }
    validar()
}


function limpiar(){
    contrasena.value = '';  
    containerResultado.style.display = "none";  
}


function validar(){

    let valor = contrasena.value;

    let tieneNumero = /[0-9]/.test(valor);
    let tieneLetraMinuscula = /[a-z]/.test(valor);
    let tieneLetraMayuscula = /[A-Z]/.test(valor);
    let tieneSimbolo = /[!@#$%^&*(),.?":{}|<>]/.test(valor);

    let tiposPresentes = 0;
    if (tieneNumero) tiposPresentes++;
    if (tieneLetraMinuscula) tiposPresentes++;
    if (tieneLetraMayuscula) tiposPresentes++;
    if (tieneSimbolo) tiposPresentes++;

    recuadros.forEach(recuadro => recuadro.className = 'recuadro'); // Limpiar clases previas

    if (tiposPresentes === 2) {
        recuadros.forEach(recuadro => recuadro.classList.add('debil'));
        resultado.textContent = "Contraseña débil";
    } else if (tiposPresentes === 3) {
        recuadros.forEach(recuadro => recuadro.classList.add('media'));
        resultado.textContent = "Contraseña media";
    } else if (tiposPresentes === 4) {
        recuadros.forEach(recuadro => recuadro.classList.add('perfecta'));
        resultado.textContent = "Contraseña perfecta";
    } else {
        resultado.textContent = "Contraseña inválida";
    }

}




