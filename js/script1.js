

 // Validacion dinamica de los inpusn. 
 var inpus =document.getElementsByClassName("form_inp");    
 for (var i = 0; i < inpus.length; i++){
   inpus[i].addEventListener('keyup', function() {
       if(this.value.length>=1) {
        this.nextElementSibling.classList.add('fijar');
       } else {
         this.nextElementSibling.classList.remove('fijar');
       } 
   });
 }
 //Validar formulario de contacto
function validar() {
  
    // Validacion de campos del formulario
     var gerente, cliente, email, telefono, comentario, expresion; // los campo a validar deben ser los valores de los ID
         gerente=document.getElementById("gerente").value,
         cliente=document.getElementById("cliente").value;
         email  = document.getElementById("email").value;
         telefono  = document.getElementById("telefono").value;
         comentario= document.getElementById("comentario").value;
         expresion = /\w+@\w+\.+[a-z]/; //expresion regular 
        
        if(gerente == '') { 
        alert('Campos gerente es obligatorios, por favor llenar.');
        return false;
        }
        else if(gerente.length >30) { 
          alert('Nombre del gerente es mayor a 30 caracteres.');
          return false;
        }
        else if(cliente == '') { 
          alert('Campos cliente es obligatorios, por favor llenar.');
          return false;
        }
        else if(cliente.length >30) { 
          alert('Nombre del cliente es mayor a 30 caracteres.');
          return false;
        }
        else if(telefono == '') { 
          alert('Verificar, numero telefonico es obligatorio, por favor llenar');
           return false;
        }
        else if(isNaN(telefono)) { 
          alert('Verificar, numero de telefono debe ser numerico');
           return false;
        }
        else if(telefono.length >10) { 
           alert('Verificar, numero telefonico muy largo');
           return false;
        }       
        else if(email == '') { 
            alert('Campos email es obligatorios, por favor llenar.');
           return false;
        }
        else if(!expresion.test(email)) { 
          alert('Correo utilizado, no es valido.');
         return false;
        }         
       else if(telefono.length >10) { 
       alert('Verificar, numero telefonico muy largo');
       return false;
        }
       else if(comentario.length >50) { 
          alert('Comentario muy largo');
          return false;
        }
   
}   





