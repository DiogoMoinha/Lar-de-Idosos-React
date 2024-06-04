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
