// Inputs
const nombre = document.querySelector('.name');
const apellido = document.querySelector('.lastname');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

// Arreglos con contenido
const inputs = [nombre, apellido, email, password]
const placeHolder = ['First Name', 'Last Name', 'Email Address', 'Password']
const contenido = ['First Name cannot be empty', 'Last Name cannot be empty', ' Looks like this is not an email', 'Password cannot be empty']
 
//Errores
const error1 = document.createElement('div')
const error2 = document.createElement('div')
const error3 = document.createElement('div')
const error4 = document.createElement('div')
const errores = [error1, error2, error3, error4]

//Icono
const icono = document.createElement('img');
icono.src='../images/icon-error.svg';
icono.alt = 'Icono de error';
icono.className= 'icono';

//Expresion regular
const expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;



validarFormulario = () => {
    event.preventDefault()
    
    for(var i = 0; i < inputs.length; i++){
        if(inputs[i].value.length == 0){
            inputs[i].after(errores[i])
            errores[i].textContent = contenido[i]
            errores[i].className = 'error-texto'
            inputs[i].classList.add('error-input')
            inputs[i].placeholder = ""
            const esValido = expReg.test(email.value) //Verifica que el correo cumpla con la expresion regular.
            if(!esValido){ //Si es falso, entonces agrega las clases de error
                email.after(errores[2])
                errores[2].textContent = contenido[2]
                errores[2].className = 'error-texto'
                email.classList.add('error-input')
                email.placeholder = 'email@example/com'
            }
        }else{
            inputs[i].classList.remove('error-input') 
            errores[i].remove()
            inputs[i].placeholder = placeHolder[i]
           
        }  
    }
    for(var i = 0; i < inputs.length; i++ ){ // Limpia los campos al enviar el formularios
        inputs[i].value = ''
    }

}

