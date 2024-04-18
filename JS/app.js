var navbarContent = [
    {
     title: "О НАС",
     link:"about/"
    },
    {
     title: "КАТАЛОГ",
     link:"catalog/"
    },
    {
     title: "НАШИ РАБОТЫ",
     link:"works/"
    },
    {
     title: "КОНТАКТЫ",
     link:"contacts"
    } ]

var navbar = document.querySelector(".navbar")
navbarContent.forEach(function(item){
var linkEl = document.createElement("a")
linkEl.textContent = item.title
linkEl.setAttribute("href",`/${item}/link`)
    navbar.append(linkEl)
})

//null number string bool(true/false) undef obj
//massiv exotic
// for (var i = 1; i<=100; i++){
//     console.log(i)
// }
// console.log(false && true)
// 1*1=1 1*0=0
// console.log(false || true)
// 1+0=1 0+0=0

// var myVar = 4
// if(myVar === 4 && secondVar){
//     console
// }

// {...obj1} предоператор
// function myFunc(...param) рестоператор