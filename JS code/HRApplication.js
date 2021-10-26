let jsonData = "https://jsonplaceholder.typicode.com/posts/1";
fetch(jsonData)
    .then((response) => {
        if (response.status !== 200) {
            console.log("There was a problem");
            return;
        }

        response.json().then((data) => {
            console.log(data);
        })
    })
