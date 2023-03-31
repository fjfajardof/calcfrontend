const mibtn= document.getElementById("submit");
mibtn.addEventListener( //event listener para que el botón haga una acción luego de que hagan:
    "click",// click sobre él.
   async (event)=>{ // Es una función asíncrona, por eso lleva el ASync
    event.preventDefault(); // el preventdefault es para sólo tomar el valor que se necesita del evento.

    const numero_1=parseFloat(document.getElementById("num1").value); //estos son los valores que espera el backend, con parse float se convierte de string a número flotante
    const numero_2=parseFloat(document.getElementById("num2").value);
    const respuesta= await fetch ( //fetch es una promesa, sele añade el await para que espera la respuesta del back
        "http://localhost:3000/api/sumar", //puerto del backend
        {//objeto json con tres elementos de la petición:
            "method":"POST",// 1 Método de la petición
            "headers":{ // 2 Encabezado: Tipo de contenido se le va a enviar al backend
                "Content-Type":"application/json", // En formato Json, ya que en backend se especificó de esta manera
            },
            "body": JSON.stringify({numero_1,numero_2}) // 3 Cuerpo, convierte los datos en formato JSON
        }    
    );
    const dato= await respuesta.json(); //convierte la respuesta en json, el wait es para que siga el código hasta obtener la respuesta del back
    const div_resultado=document.getElementById("resultado");//llama al elemento "resultado" HTML
    div_resultado.innerHTML=dato;//Le asigana la respuesta que viene del backend alelemento "resultado"

})