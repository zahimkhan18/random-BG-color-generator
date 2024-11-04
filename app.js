function generateBgColor(){
    var hexcode = Math.random().toString(16).slice(2,8).padEnd(6,0)
    // console.log(hexcode)
    var body = document.querySelector("body")
    var hexField = document.querySelector("#hexCode")
    var generatecode = `#${hexcode}`

    hexField.innerHTML = generatecode

    body.style.backgroundColor = generatecode
}
// setInterval(generateBgColor,2000)