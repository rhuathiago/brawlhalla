let armas = document.querySelectorAll(".divEfeitos")
armas.forEach(armas => {
    armas.addEventListener('click', escolherArma)
    function escolherArma(){
        if(event.target.id == 'arco'){
            
            document.getElementById('iconeArma').style.backgroundImage="url(imagensarmas80/arco.jpg)";
        }if(event.target.id == 'lança'){
            
            document.getElementById('iconeArma').style.backgroundImage="url(imagensarmas80/lança.jpg)";
        }if(event.target.id == 'marreta'){
            
            document.getElementById('iconeArma').style.backgroundImage="url(imagensarmas80/marreta.jpg)";
        }if(event.target.id == 'foguete'){
            
            document.getElementById('iconeArma').style.backgroundImage="url(imagensarmas80/foguete.jpg)";
        }if(event.target.id == 'katar'){
            
            document.getElementById('iconeArma').style.backgroundImage="url(imagensarmas80/katar.jpg)";
        }if(event.target.id == 'orbe'){
            
            document.getElementById('iconeArma').style.backgroundImage="url(imagensarmas80/orbe.jpg)";
        }if(event.target.id == 'greatsword'){
            
            document.getElementById('iconeArma').style.backgroundImage="url(imagensarmas80/greatsword.jpg)";
        }if(event.target.id == 'canhao'){
            
            document.getElementById('iconeArma').style.backgroundImage="url(imagensarmas80/canhao.jpg)";
        }if(event.target.id == 'espada'){
            
            document.getElementById('iconeArma').style.backgroundImage="url(imagensarmas80/espada.jpg)";
        }if(event.target.id == 'pistola'){
            
            document.getElementById('iconeArma').style.backgroundImage="url(imagensarmas80/pistola.jpg)";
        }if(event.target.id == 'foice'){
            
            document.getElementById('iconeArma').style.backgroundImage="url(imagensarmas80/foice.jpg)";
        }if(event.target.id == 'machado'){
            
            document.getElementById('iconeArma').style.backgroundImage="url(imagensarmas80/machado.jpg)";
        }if(event.target.id == 'luvas'){
            
            document.getElementById('iconeArma').style.backgroundImage="url(imagensarmas80/luvas.jpg)";
        }         
        console.log(event.target.id)
    }
})
