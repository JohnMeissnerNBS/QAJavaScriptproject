



//add 

//event listener on submit button, once button is clicked need to add form fields into JSON
const addforminput = document.querySelectorAll(`ninumberinput, nameinput, phonenumberinput, addressinput, departmentinput`);

addforminput.addEventListener("click", function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch(//add URL?, 
        {
            method: `post`,
            body: formData
        }).then(function (response) {
            return response.text();
        }).then(function (text) {
            console.log(text);
        }).catch(function (error) {
            console.error(error);
        })


});

//delete




