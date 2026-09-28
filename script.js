let totalStudents = 0;
let excellentStudents = 0;
let riskStudents = 0;

function signup(){

    alert("Account Created Successfully");

    window.location.href = "login.html";
}

function login(){

   window.location.href = "dashboard.html";
}

function saveStudent(){

    const name = document.getElementById("name").value;

    const attendance = parseInt(document.getElementById("attendance").value);

    const test = parseInt(document.getElementById("test").value);

    const assignment = parseInt(document.getElementById("exam").value);

     if(assignment > 70 || test > 20 || attendance > 10){

        alert("Assignment must not be more than 10, Test must not be more than 20, and Exam must not be more than 70");

        return;
    }

    const average = Math.floor((attendance + test + assignment) );

    let status = "";

    totalStudents++;

    if(average >= 70){

        status = "Excellent";

        excellentStudents++;
            }

    else if(average >= 50){

        status = "Average";
    }

    else{

        status = "At Risk";

        riskStudents++;
    }

    document.getElementById("totalStudents").innerHTML = totalStudents;

    document.getElementById("excellentStudents").innerHTML = excellentStudents;

    document.getElementById("riskStudents").innerHTML = riskStudents;

    const table = document.getElementById("studentTable");

    const row = table.insertRow();

    row.innerHTML = `

        <td>${name}</td>
        <td>${attendance}</td>
        <td>${test}</td>
        <td>${assignment}</td>
        <td>${average}</td>
        <td>${status}</td>

    `;
}
