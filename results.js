let data = JSON.parse(localStorage.getItem("char"))
let appender = document.querySelector(".content")
displayData()

function displayData() {
    console.log(data)
    let div = document.createElement("div")
    div.setAttribute("id", "appended")
    let name = document.createElement("h3")
    name.innerText = `Name :${data.name}`

    let gen = document.createElement("p")
    gen.innerText = `Gender :${ data.gender}`

    let year = document.createElement("p")
    year.innerText = `Birth Year :${data.birth_year}`

    let height = document.createElement("p")
    height.innerText = ` Height :${data.height}`

    let hair_color = document.createElement("p")
    hair_color.innerText = ` Hair Color :${data.hair_color}`

    let skin_color = document.createElement("p")
    skin_color.innerText = `Skin Color :${data.skin_color}`

    div.append(name, gen, year, height, hair_color, skin_color)
    appender.append(div)

}