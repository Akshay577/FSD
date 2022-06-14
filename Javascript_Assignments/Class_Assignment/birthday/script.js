const person = [
    {firstName: 'Vishwanathan', lastName: 'Anand', age: 52, imgLoc: 'anand.jpg'},
    {firstName: 'Garry', lastName: 'Kasparov', age: 59, imgLoc: 'garry.jpg'},
    {firstName: 'Anatoly', lastName: 'Karpov', age: 70, imgLoc: 'karpov.jpg'},
    {firstName: 'Magnus', lastName: 'Carlsen', age: 32, imgLoc: 'magnus.jpg'}]
const addImgEl = document.getElementById('content')
const btn = document.getElementById('button')

function addImg(x) {
    console.log(x)
    let imgElement =document.createElement('img')
    let imgName = document.createElement('h4')
    let imgAge = document.createElement('span')

    imgElement.setAttribute('src', x.imgLoc)
    imgName.innerHTML = x.firstName 
    imgAge.innerHTML =  x.age

    addImgEl.appendChild(imgElement)
    addImgEl.appendChild(imgName)
    addImgEl.appendChild(imgAge)
}

const forAllPerson = person.map(addImg)

btn.addEventListener('click', () => {
    console.log(addImgEl.classList)
    addImgEl.classList.toggle('hidden')
})