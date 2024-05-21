export function loginAPI(email, pass) {
    return fetch("https://laramanha.azurewebsites.net/api/Values/Login?email="+email+"&password="+pass+"", {
        headers: {
            Accept: "*/*"
        },
        method: "POST"
    })
}