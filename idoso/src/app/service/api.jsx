
export function loginAPI(email, pass) {
    return fetch("https://laramanha.azurewebsites.net/api/values/Login", {
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            'Email': email,
            'Password': pass,
        })
    })
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
            'NumTelemovel': numTel
        })
    })
}

export function getIdososAPI() {
    return fetch("https://laramanha.azurewebsites.net/api/values/ListaIdoso", {
    })
} 

export function getIdososAPIPaged(idPagina) {
    return fetch("https://laramanha.azurewebsites.net/api/values/ListaIdosoPaged?idPagina=" + idPagina
        + "&paginaSize=5", {
        });
} 

export function getTrabalhadoresAPI() {
    return fetch("https://laramanha.azurewebsites.net/api/values/ListaTrabalhador", {
    })
}


export function getTrabalhadoresAPIPaged(idPagina) {
    return fetch("https://laramanha.azurewebsites.net/api/values/ListaTrabalhadorPaged?idPagina=" + idPagina
        + "&paginaSize=5")
}



export function createIdosoAPI(Idoso, token) {
    return fetch("https://laramanha.azurewebsites.net/api/values/CreateIdoso", {
        body: JSON.stringify(Idoso),
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
            Authorization: "Bearer "+token
        },
        method: "POST"
    });
}

export function createTrabalhadorAPI(Trabalhador, token) {
    return fetch("https://laramanha.azurewebsites.net/api/values/RegistarTrab", {
        body: JSON.stringify(Trabalhador),
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
            Authorization: "Bearer "+token
        },
        method: "POST"
    });
}

export function deleteIdosoAPI(id, token) {
    return fetch("https://laramanha.azurewebsites.net/api/values/ListaIdoso?idIdoso=" + id, {
        headers: {
           'accept': '*/*',
            'Content-Type': 'application/json'
        },
        method: "DELETE"
    })
}

export function deleteTrabalhadorAPI(id, token) {
    return fetch("https://laramanha.azurewebsites.net/api/values/ListaTrabalhador?idTrabalhador=" + id, {
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
            Authorization: "Bearer "+token,
        },
        method: "DELETE"
    })
}

export function editIdosoAPI(idosoAEditar, token) {
    return fetch("https://laramanha.azurewebsites.net/api/values/ListaIdoso?Idosoid=" + idosoAEditar.id, {
        body: JSON.stringify(idosoAEditar),
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
            //Authorization: "Bearer "+token
        },
        method: "PUT"
    })
}

export function editTrabalhadorAPI(trabalhadorAEditar, token) {
    return fetch("https://laramanha.azurewebsites.net/api/values/updateTrabalhador?trabalhadorId=" + trabalhadorAEditar.id, {
        body: JSON.stringify(trabalhadorAEditar),
        headers: {
           'accept': '*/*',
            'Content-Type': 'application/json',
            Authorization: "Bearer "+token
        },
        method: "PUT"
    })
}