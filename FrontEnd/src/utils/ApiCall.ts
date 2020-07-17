export function ApiCall( config: { url: string; port: string; route: string; }) {
    const  apiUrl = config.url + (config.port ==="" ? "" : ":" + config.port ) + "/" +  config.route;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(() => console.log("Can’t access  response from " + apiUrl))
}
