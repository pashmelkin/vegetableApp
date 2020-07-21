import {IVegetable} from "../model/IVegetable";

export function ApiCallAsync(config: { url: string; port: string; route: string; }): Promise<IVegetable[]> {
    const apiUrl = config.url + (config.port === "" ? "" : ":" + config.port) + "/" + config.route;

       return fetch(apiUrl)
            .then(response => response.json())
            .then(data => data.results)
            .catch(() => console.log("Can’t access  response from " + apiUrl))
}
