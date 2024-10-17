const inputSubmit = document.querySelector(".botao-enviar"); 

const inputCampo = document.querySelectorAll(".campo"); 

const avisoCampo = document.querySelectorAll(".aviso-campo") 


inputSubmit.addEventListener('click', () => {

    inputCampo.forEach( (input, index)  => {

        if (input.value.trim() === "") {
            avisoCampo[index].classList.remove("esconder")
            inputCampo[index].classList.add("nao-preenchido")
            return
        } 
            inputCampo[index].classList.remove("nao-preenchido")
            inputCampo[index].classList.add("preenchido")
            avisoCampo[index].classList.add("esconder")
    })
});
