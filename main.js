
let content = document.querySelector("i")
let count = 0
let saver = []
function increass() {
    count = count + 1
    content.innerHTML = count
}
function save() {
    saver.push(count)
    document.querySelector("p").innerHTML += saver[saver.length - 1] + " - "
    count = 0
    content.innerHTML = 0
}