let form = document.getElementById("akan-form")

form.addEventListener("submit", function(event){
    event.preventDefault()

    let birthdate = document.getElementById("birthdate").value
    let gender = document.getElementById("gender").value

    if(!birthdate || !gender){
        alert("fill everything pls")
        return
    }

    let parts = birthdate.split("-") 
    let y = parseInt(parts[0])
    let m = parseInt(parts[1])
    let d = parseInt(parts[2])

    if(d<1 || d>31){ alert("day wrong"); return }
    if(m<1 || m>12){ alert("month wrong"); return }

    let CC = Math.floor(y/100)
    let YY = y%100
    let calc = ((4*CC - 2*CC - 1) + (5*YY) + Math.floor(26*(m+1)/10) + d) % 7
    let dayIndex = Math.floor(calc)

    let male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    let female = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

    let akan
    if(gender=="male") akan = male[dayIndex]
    else akan = female[dayIndex]

    document.getElementById("result").innerText = "Your Akan name is: " + akan
})

