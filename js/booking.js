// JavaScript source code
function submit()
{
    alert("Successfully submitted!");
}

function displayDetails()
{
    var name, email, phoneNo, date, park, guide;

    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;

    date = document.getElementById("date").value;
    time = document.getElementById("time").value;
    park = document.getElementById("park").value;
    guide = document.getElementById("instructors").value;

    document.getElementById("inputname").innerHTML = name;
    document.getElementById("inputemail").innerHTML = email;
    document.getElementById("inputphone").innerHTML = phone;
    document.getElementById("inputdate").innerHTML = date;
    document.getElementById("inputtime").innerHTML = time;
    document.getElementById("inputpark").innerHTML = park;
    document.getElementById("inputguide").innerHTML = guide;
}