export function ApiCall() {
    fetch('http://localhost:3001/v1/veggies')
        .then(response => response.json())
        .then(data => console.log(data));
}
