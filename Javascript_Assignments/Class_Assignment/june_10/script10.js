// 1.select the section with an id of container without using queryselector
// 2.select the section with an id of conatiner using queryselector
// 3.select all the the list items with the class of "second"
// 4.select a list item with a class of third , but only inside ol tag
// 5.give section with id conatiner the text 'Hello'
// 6.Add class main to div with a class footer
// 7.Remove class main on the div with class footer
// 8.Create new li element , give li text "four" , append li to ul element
// 9.Provide background color green to all the li's inside ol tag
// 10.Remove the div with class footer






// // 1.select the section with an id of container without using queryselector
// let section = document.getElementById('container')
// console.log(section)

// // // 2.select the section with an id of conatiner using queryselector
// let selectionId = document.querySelector('#container')
// console.log(selectionId)

// // // 3.select all the the list items with the class of "second"
// let allSecond = document.querySelectorAll('.second')
// // it will be an array
// console.log(allSecond)

// // // 4.select a list item with a class of third , but only inside ol tag
// let thirdInsideOl = document.querySelectorAll('ol  .third')
// console.log(thirdInsideOl)

// // 5.give section with id conatiner the text 'Hello'
// let sectionContainer = document.getElementById('container')
// console.log(sectionContainer)
// sectionContainer.innerHTML = 'Hello'

// // // 6.Add class main to div with a class footer
// let mainToDiv = document.getElementsByClassName('footer')
// //console.log(mainToDiv)
// // gives an array
// console.log(mainToDiv[0].classList)
// mainToDiv[0].classList.add('main')
// console.log(mainToDiv[0].classList)

// // // 7.Remove class main on the div with class footer
// mainToDiv[0].classList.remove("main")
// console.log(mainToDiv[0].classList)


// // 8.Create new li element , give li text "four" , append li to ul element
let newLi = document.querySelector('ul')
console.log(newLi)
 let element = document.createElement('li')
 element.innerHTML = 'Four'
 console.log(element)
newLi.appendChild(element)

// // 9.Provide background color green to all the li's inside ol tag
let liInOl = document.querySelectorAll('ol  li')
console.log(liInOl)
// gives array
for(let i=0; i<liInOl.length; i++) {
    liInOl[i].style.backgroundColor = 'green'
}

// 10.Remove the div with class footer
document.querySelector('.footer').remove()