const button1 = document.getElementById("luckBtn")
const button2 = document.getElementById("playersBtn")

const div1 = document.getElementById("luckDiv")
const div2 = document.getElementById("playersDiv")

const result1 = document.getElementById("luckResult");
const result2 = document.getElementById("playersResult");

const smallest = document.getElementById("smallest")

const amountInput = document.getElementById("chestAmount")

let smnumb = 1000000


button1.addEventListener("click", () => {
    let chest = 0
    while(true){
        chest ++

        let random = Math.floor(Math.random() * 137500)

        if(random === 1){
            result1.textContent = "You found it after " + chest + " chests";
            
            if(chest <= smnumb){
                smnumb = chest


                smallest.innerHTML = `<strong> smallest number: ${smnumb} </strong>`
            }
            break


        }

    }

})

button2.addEventListener("click", () => {
    let found = false
    let players = 0
    let amountInt = parseInt(amountInput.value)

    if(!Number.isNaN(amountInt) && amountInt > 0){

        while(!found){
        players++

            for(let chest = 1; chest <= amountInt; chest++){
                let random = Math.floor(Math.random() * 137500)

                if( random === 1){
                    found = true
                    result2.textContent = "It was found after " + players + " players";
                    break
                }
            }
        }
    }
})







