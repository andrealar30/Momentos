const displayValorAnterior=document.getElementById('valor-anterior');
const displayValorActual=document.getElementById('valor-actual');
const botonesNumero = document.querySelectorAll('.numero');
const botonesOperador = document.querySelectorAll('.operador');

/* cuando yo de click obtener el valor */
const display = new Display(displayValorAnterior, displayValorActual);

botonesNumero.forEach(boton=>{
    boton.addEventListener('click', ()=>{
        display.addNumber(boton.innerHTML);
        //innerHTML porque obtiene el valor el html
    });
});

botonesOperador.forEach(boton=>{
    boton.addEventListener('click',()=>{
        display.computar(boton.value);
    });
});
   

