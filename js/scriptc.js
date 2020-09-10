var fing ,  email, telefono, comentario; // los campo a validar deben ser los valores de los ID
        fing=document.getElementById("fing").value;
        fecha = new Date ();
        dia = fing.getDay();
        mes = fing.getMounth();
        año = fing.getFullYear();
        Año = fecha.getFullYear();
        alert('dia:'+ dia + 'mes:'+ mes + 'Año:'+ año + 'añoactual:' + Año);
        fing=document.getElementById("fing").value;
        email  = document.getElementById("email").value;
        telefono  = document.getElementById("telefono").value;
        comentario= document.getElementById("comentario").value;
        expresion = /\w+@\w+\.+[a-z]/; //expresion regular 
     /*   expfec = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
        if (!expfec.test(fing)) {
          alert('Fecha de ingreso Invalida');
          return false;
        } 
        else if (fing == "") {
            alert('Fecha de ingreso Invalida');
            return false;
        }
        else if(fing.length <8) { 
          alert('Verificar, Fecha de Ingreso debe ser ddmmaaaa.');
          return false;
        }    
        else if(fing.length >8) { 
          alert('Verificar, Fecha de Ingreso debe tener el formato ddmmaaaa');
          return false;
        }    
        else if(isNaN(fing)) { 
          alert('Verificar, Fecha de Ingreso debe ser numerico en el formato ddmmaaaa');
          return false;
        }
        else if(dia <1 || dia>31) {
          alert('Verificar, dia Invalido');
          return false;
        }  
        else if(mes <1 || mes>12) {
          alert('Verificar, mes Invalido');
          return false;
        } 
        else if(año <Año) {
          alert('Verificar, Año de ingreso es menor a Año actual');
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
        
} */
