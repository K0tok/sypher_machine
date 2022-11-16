let alphabet = ["а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", 
"т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я", " "]
let alphabet_rot1 = ["б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", 
"т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я", "а", " "]
let alphabet_caesar = ["а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", 
"т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я", 
"а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", 
"т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я", " "]
let alphabet_morze = [".-", "-...", ".--", "--.", "-..", ".", ".", "...-", "--..", "..", ".---", "-.-", ".-..", "--", "-.", "---", 
".--.", ".-.", "...", "-", "..-", "..-.", "....", "-.-.", "---.", "----", "--.-", "--.--", "-.--", "-..-", "..-..", "..--", ".-.-"]

function sh_rot1(text, alphabet, alphabet_rot1, message) {
    for (i of text) {
        for (j of alphabet) {
            if (j == i.toLowerCase()) { 
                message.push(alphabet_rot1[alphabet.indexOf(j)])
            }
        }
    }
}
function d_rot1(sipher, alphabet, alphabet_rot1, message){
    for (i of sipher){
        for (j of alphabet){
            if (j == i){
                message.push(alphabet[alphabet_rot1.indexOf(j)])
            }
        }
    }
}
function sh_caesar(text, alphabet_caesar, step, message){
    for (i of text){
        for (j of alphabet){
            if (i.toLowerCase() == j) {
                if (j == " "){
                    message.push(" ")
                } else{
                    message.push(alphabet_caesar[parseInt(alphabet.indexOf(j)) + step])
                }
            }
        }
    }
}
function d_caesar(sipher, alphabet_caesar, step, message){
    for (i of sipher){
        for (j of alphabet){
            if (i == j){
                if (j == " "){
                    message.push(" ")
                } else{
                    message.push(alphabet_caesar[parseInt(alphabet.indexOf(j)) + 33 - step])
                }
            }
        }
    }
}
function sh_morze(text, alphabet, alphabet_morze, message){
    for (i of text){
        for (j of alphabet){
            if (j == i.toLowerCase()){
                if (j == " "){
                    message.push(" ")
                } else{
                    message.push(alphabet_morze[alphabet.indexOf(j)] + " ")
                }
            }
        }
    }
}
function d_morze(sipher, alphabet, alphabet_morze, message){
    for (i of sipher){
        for (j of alphabet_morze){
            if (j == i){
                if (i == " "){
                    message.push(" ")
                } else if (i == "."){
                    message.push("е ")
                    break;
                } else{
                    message.push(alphabet[alphabet_morze.indexOf(i)] + " ")
                }
            }
        }
    }
}
function shif(type, alphabet, alphabet_rot1, alphabet_caesar, alphabet_morze, message){
    let text = document.getElementById('desif').value
    if (type == 'rot1'){
        document.getElementById('step').value = ''
        sh_rot1(text, alphabet, alphabet_rot1, message)
    } else if (type == 'cezar'){
        let step = parseInt(document.getElementById('step').value)
        sh_caesar(text, alphabet_caesar, step, message)
    } else if (type == 'morze'){
        document.getElementById('step').value = ''
        sh_morze(text, alphabet, alphabet_morze, message)
    }
}

function deshif(type, alphabet, alphabet_rot1, alphabet_caesar, alphabet_morze, message){
    sipher = document.getElementById('sif').value
    if (type == 'rot1'){
        document.getElementById('step').value = ''
        d_rot1(sipher, alphabet, alphabet_rot1, message)
    } else if (type == 'cezar') {
        let step = parseInt(document.getElementById('step').value)
        d_caesar(sipher, alphabet_caesar, step, message)
    } else if (type == 'morze'){
        document.getElementById('step').value = ''
        sipher = sipher.split(' ')
        d_morze(sipher, alphabet, alphabet_morze, message)
    }
}




function sipher_func() {
    let message = []
    let type = document.getElementById("select_sif").value
    shif(type, alphabet, alphabet_rot1, alphabet_caesar, alphabet_morze, message)
    document.getElementById('sif').value = message.join("")
    
}
function desipher_func() {
    let message = []
    let type = document.getElementById("select_sif").value
    deshif(type, alphabet, alphabet_rot1, alphabet_caesar, alphabet_morze, message)
    document.getElementById('desif').value = message.join("")
}