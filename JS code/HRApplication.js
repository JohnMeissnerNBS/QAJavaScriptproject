
//Add



function pushData() {
    var recordinputs = document.getElementById("ninumberinput", "nameinput", "phonenumberinput", "addressinput", "departmentinput").value;


    recordsJSON.push(recordinputs);
}


//Edit



//Delete

function delRec() {

    console.log("remove post")

}




//Event Listeners

submit.addEventListener("click", pushData, (e) => {
    e.preventDefault();
    console.log("error");



});

d1.addEventListener("click", delRec(), (e) => {
    e.preventDefault();
    console.log("error");

});

//e1.addEventListener("click", editRec(), (e) => {
//    e.preventDefault();
//    console.log("error");

//});




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





