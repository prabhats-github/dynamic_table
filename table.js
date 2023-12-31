let table=document.getElementById("myTable");
let obj1=[{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"},{firstName:"John1", lastName:"Doe1", age:51, eyeColor:"bluish"},{firstName:"John2", lastName:"Do2", age:52, eyeColor:"wavyblue"},{firstName:"John3", lastName:"Doe3", age:53, eyeColor:"green"}];


obj1.map((item) =>{
    var c=document.createElement("tr")
    var d=document.createElement("td")
    var d1=document.createElement("td")
    var d2=document.createElement("td")
    var d3=document.createElement("td")
    var ctd=document.createTextNode(`${item.firstName}`)
    var ctnd2=document.createTextNode(`${item.lastName}`)
    var ctnage=document.createTextNode(`${item.age}`)
    var ctneye=document.createTextNode(`${item.eyeColor}`)

    d.appendChild(ctd)
    c.appendChild(d)
    table.appendChild(c)
})