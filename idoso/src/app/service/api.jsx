export function loginAPI(email, pass) {
    return fetch("https://laramanha.azurewebsites.net/api/Values/Login?email="+email+"&password="+pass+"", {
        headers: {
            Accept: "*/*"
        },
        method: "POST"
    })
}

export function getIdososAPIPaged() {
    return fetch("https://laramanha.azurewebsites.net/api/values/ListaIdoso")
} 

export function getTrabalhadoresAPIPaged() {
    return fetch("https://laramanha.azurewebsites.net/api/values/ListaTrabalhador")
}

export function registarAPI(nome, email, password, numTel){
    return fetch('https://laramanha.azurewebsites.net/api/values/Registar', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'
    },
        body: JSON.stringify({
            'Nome': nome,
            'Email': email,
            'Password': password,
            'NumTelemovel': numTel,
        })
    })
}

export function createIdosoAPI(Idoso, token) {
    return fetch("https://laramanha.azurewebsites.net/api/values/createIdoso", {
        body: JSON.stringify(Idoso),
        headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: "Bearer "+token
        },
        method: "POST"
    });
}

export function createTrabalhadorAPI(Trabalhador, token) {
    return fetch("https://laramanha.azurewebsites.net/api/values/createTrabalhador", {
        body: JSON.stringify(Trabalhador),
        headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: "Bearer "+token
        },
        method: "POST"
    });
}