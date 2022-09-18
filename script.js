


let GenerateNumber = document.querySelector("#generate-number")
let Input = document.querySelector("#name")
let Resultado1
let Times = Number(1)   
let choice

GenerateNumber.addEventListener("click", SendGuess)
Input.focus()

Resultado()

function SendGuess(){
        if(Times >= 10){
            choice = prompt("Deseja jogar novamente ?")
            if(choice == "Sim"){
                Times = 1
                return console.log(Resultado())
            }
        }

        let Input1 = document.querySelector("#name")
        let InputValue = Number(Input1.value)
    
        if(InputValue < Resultado1){
            Times++
            console.log(InputValue)
            return alert("Está Baixo")
        }
    
        if(InputValue > Resultado1){
            Times++
            console.log(InputValue)
            return alert("Está Alto")
        }
    
        if(InputValue == Resultado1){
            Times = 10
            choice = prompt(`Parabéns você acertou ! O Número era o ${Resultado1}, Jogar novamente ?`)
            if(choice == "Sim"){
                return Resultado()
            }
        }

}

function Resultado(){
    Times = 1
    return Resultado1 = Math.floor(100* Math.random())
}
