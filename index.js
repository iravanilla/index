async function getfrom_Server(url) {

    try {
    let response = await fetch(url);
    return response.json();
    } catch(err) {
    console.log('Ошибка HTTP: ' + respons.status)
    }
    }
    
    console.log (getfrom_Server('https://jsonplaceholder.typicode.com/todos/1'))