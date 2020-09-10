//Validar formulario de cliente
function validarCli() {
     
        var fing ,  email, telefono, comentario, social, domicilio, edoProv, repGte, nroReg, codPost;
        fing=    document.getElementById("fing").value;
        email  = document.getElementById("email").value;
        telefono  = document.getElementById("telefono").value;
        comentario= document.getElementById("comentario").value;
        expresion = /\w+@\w+\.+[a-z]/; //expresion regular
        social= document.getElementById("social").value;
        domicilio= document.getElementById("domicilio").value;
        edoProv= document.getElementById("edoProv").value;
        repGte= document.getElementById("repGte").value;
        nroReg= document.getElementById("nroReg").value;
        codPost= document.getElementById("codPost").value;
       // expfec = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
       /* if (!expfec.test(fing)) {
          alert('Fecha de ingreso Invalida');
          return false;
        } */
        if (fing == "" ) {
            alert('Fecha de ingreso Invalida');
            return false;
        }
        /*else if (fing = null) {
          alert('Fecha de ingreso Invalida');
          return false;
       }*/
        else if(fing.length >10) { 
          alert('Verificar, Fecha de Ingreso muy larga.');
          return false;
        }    
        /*else if(isNaN(fing)) { 
          alert('Verificar, Fecha de Ingreso debe ser numerico en el formato mm/dd/aaaa');
          return false;
        } */
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
         alert('Correo Invalido.');
          return false;
        }         
        else if(telefono.length >10) { 
         alert('Verificar, numero telefonico muy largo');
         return false;
        }
        else if(comentario.length >100) { 
         alert('Comentario muy largo');
         return false;
       } 
       else if(social.length ==0 || domicilio.length==0 || edoProv.length==0 || repGte.length==0 || 
        nroReg.length==0 || codPost.length==0) { 
         alert('Verificar, Todos los campos son obligatorios para registrar el cliente.');
        return false;
      } 
    
}


        







