const subirRojo = document.getElementById('btnSubirRojo');
const bajarRojo = document.getElementById('btnBajarRojo');
const valorRojo = document.getElementById('valorRojo');

const subirVerde = document.getElementById('btnSubirVerde');
const bajarVerde = document.getElementById('btnBajarVerde');
const valorVerde = document.getElementById('valorVerde');

const subirAzul = document.getElementById('btnSubirAzul');
const bajarAzul = document.getElementById('btnBajarAzul');
const valorAzul = document.getElementById('valorAzul');

let rojo = 15, verde = 15, azul = 15;

function subirColor(e){ 
    if(e.target.id === 'btnSubirRojo'){
        if(rojo < 255){
            rojo = rojo + 15
            valorRojo.innerText = rojo;  
        }
    }else if(e.target.id === 'btnSubirVerde'){
        if(verde < 255){
            verde = verde + 15
            valorVerde.innerText = verde;  
        }
    }else if(e.target.id === 'btnSubirAzul'){
        if(azul < 255){
            azul = azul + 15
            valorAzul.innerText = azul;  
        }
    }
    document.body.style.backgroundColor = 'rgb('+rojo+', '+verde+', '+azul+')';
    console.log('rgb('+rojo+', '+verde+', '+azul+')'); 
};


subirRojo.addEventListener('click', subirColor);
subirVerde.addEventListener('click', subirColor);
subirAzul.addEventListener('click', subirColor);

function bajarColor(e){  
    if(e.target.id === 'btnBajarRojo'){
        if(rojo > 0){
            rojo = rojo - 15
            valorRojo.innerText = rojo;  
        }
    }else if(e.target.id === 'btnBajarVerde'){
        if(verde > 0){
            verde = verde - 15
            valorVerde.innerText = verde;  
        }
    }else if(e.target.id === 'btnBajarAzul'){
        if(azul >0){
            azul = azul - 15
            valorAzul.innerText = azul;  
        }
    }
    document.body.style.backgroundColor = 'rgb('+rojo+', '+verde+', '+azul+')';
    console.log('rgb('+rojo+', '+verde+', '+azul+')'); 
    
};
bajarRojo.addEventListener('click', bajarColor);
bajarVerde.addEventListener('click', bajarColor);
bajarAzul.addEventListener('click', bajarColor);
