async function getfrom_Server(url) {

    try {
    let response = await fetch(url);
    return response.json();
    } catch(error) {
        throw new Error ('Ошибка HTTP: ' + error)
    }
    }
    
    console.log (getfrom_Server('https://jsonplaceholder.typicode.com/todos/1'))