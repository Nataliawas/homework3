
function addNewEmployee(firstName, lastName, age, sex, employed) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        sex: sex,
        employed: employed
    };
}

var employees = []
employees.push(addNewEmployee("John", "Doe", 31, "male", true))
employees.push(addNewEmployee("Amelia", "Clark", 22, "female", true))
employees.push(addNewEmployee("Jack", "Jones", 21, "male", false))
employees.push(addNewEmployee("Olivia", "Wilde", 31, "female", true))
employees.push(addNewEmployee("Kate", "Ryan", 45, "female", true))
employees.push(addNewEmployee("Andrew", "Joe", 56, "male", false))

var keys = Object.keys(employees[0])
var keysLength = keys.unshift("index")


var text = "<tr>"
for (i = 0; i < keysLength; i++) {
    text += "<th scope='col'>" + keys[i] + "</th>"
}
text += "</tr>"
document.getElementById("thead").innerHTML = text

function renderList() {


    var text2 = ""

    for (i = 0; i < employees.length; i++) {
        if (employees[i].employed === true) {
            text2 +=
                "<tr><th scope='row'>" + (i + 1) + "</th>" +
                "<td>" + employees[i].firstName + "</td>" +
                "<td>" + employees[i].lastName + "</td>" +
                "<td>" + employees[i].age + "</td>" +
                "<td>" + employees[i].sex + "</td>" +
                "<td><i class='fas fa-check'></i></td>"
        }
        else {
            text2 +=
                "<tr><th scope='row'>" + (i + 1) + "</th>" +
                "<td>" + employees[i].firstName + "</td>" +
                "<td>" + employees[i].lastName + "</td>" +
                "<td>" + employees[i].age + "</td>" +
                "<td>" + employees[i].sex + "</td>" +
                "<td><i class='fas fa-times'></i></td>"
        }
    }

    document.getElementById("tbody").innerHTML = text2
}




var women = employees.filter(function (employee) {
    return employee.sex === "female"
})



var men = employees.filter(function (employee) {
    return employee.sex === "male"
})

function renderWomen() {

    var text2 = ""

    for (i = 0; i < women.length; i++) {
        if (women[i].employed === true) {
            text2 +=
                "<tr><th scope='row'>" + (i + 1) + "</th>" +
                "<td>" + women[i].firstName + "</td>" +
                "<td>" + women[i].lastName + "</td>" +
                "<td>" + women[i].age + "</td>" +
                "<td>" + women[i].sex + "</td>" +
                "<td><i class='fas fa-check'></i></td>"
        }
        else {
            text2 +=
                "<tr><th scope='row'>" + (i + 1) + "</th>" +
                "<td>" + women[i].firstName + "</td>" +
                "<td>" + women[i].lastName + "</td>" +
                "<td>" + women[i].age + "</td>" +
                "<td>" + women[i].sex + "</td>" +
                "<td><i class='fas fa-times'></i></td>"
        }
    }

    document.getElementById("tbody").innerHTML = text2
}

function renderMen() {


    var text2 = ""

    for (i = 0; i < men.length; i++) {
        if (men[i].employed === true) {
            text2 +=
                "<tr><th scope='row'>" + (i + 1) + "</th>" +
                "<td>" + men[i].firstName + "</td>" +
                "<td>" + men[i].lastName + "</td>" +
                "<td>" + men[i].age + "</td>" +
                "<td>" + men[i].sex + "</td>" +
                "<td><i class='fas fa-check'></i></td>"
        }
        else {
            text2 +=
                "<tr><th scope='row'>" + (i + 1) + "</th>" +
                "<td>" + men[i].firstName + "</td>" +
                "<td>" + men[i].lastName + "</td>" +
                "<td>" + men[i].age + "</td>" +
                "<td>" + men[i].sex + "</td>" +
                "<td><i class='fas fa-times'></i></td>"
        }
    }

    document.getElementById("tbody").innerHTML = text2
}
function addEmployeeFromForm() {
    var firstName = document.getElementById("first-name").value
    var lastName = document.getElementById("last-name").value
    var age = document.getElementById("age").value
    var sex = document.getElementById("sex").value
    var employed = document.getElementById("employed").checked

    if (firstName && lastName && age && sex) {
        employees.push(addNewEmployee(firstName, lastName, age, sex, employed))
    } else {
        alert("Wrong input");
    }
}
