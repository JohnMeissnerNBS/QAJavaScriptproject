

//read


//const jsonrecords = "recordsJSON";

//fetch(recordsJSON)
//  .then(response => console.log(response));

//add



function pushData() {
    var recordinputs = document.getElementById("ninumberinput", "nameinput", "phonenumberinput", "addressinput", "departmentinput").value;


    recordsJSON.push(recordinputs);
}

submit.addEventListener("click", pushData(), (e) => {
    e.preventDefault();
    console.log("error");

});




//delete

//JSON

var recordsJSON =

    [
        {
            "NI Number": "1111111111",
            "Full Name": "John Meissner",
            "Phone Number": "01793 1111111",
            "Address": "1 null street, nulltown, N11 1NN",
            "Department": "IT"
        },

        {
            "NI Number": "22222222222",
            "Full Name": "Bob Smith",
            "Phone Number": "01793 22222222",
            "Address": "2 null street, nulltown, N22 2NN",
            "Department": "HR"
        },

    ]





