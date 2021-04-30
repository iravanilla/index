async function getfrom_Server(url) {

    try {
        let response = await fetch(url);
        return response.json();
    } catch(error) {
        throw new Error ('Ошибка HTTP: ' + error)
    }
}
    
getfrom_Server('https://jsonplaceholder.typicode.com/todos/1'.then((user) => console.log(user)))