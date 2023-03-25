const obj = [{name:'dani danon',phone:'0547778889'}]

fetch('http://127.0.0.1:3000').then(res=>res.json()).then(data=>insertToList(data))

const table = document.querySelector('table')
const insertToList = (data)=>{
data.forEach(({name,phone})=>{
    const tr= document.createElement('tr')
    const tdName=document.createElement('td')
    const tdPhone=document.createElement('td')
    tdName.textContent=name
    tdPhone.textContent=phone
    table.appendChild(tr)
    tr.appendChild(tdName)
    tr.appendChild(tdPhone)
})

}