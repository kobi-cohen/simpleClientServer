const btn = document.querySelector('#btn')
const inputName = document.querySelector('#name')
const inputPhone = document.querySelector('#phone')

let bodyObject={name:'',phone:''}

const sendData = (bodyObject) =>{
    fetch('http://127.0.0.1:3000',
    {method:'POST',
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(bodyObject), // body data type must match "Content-Type" header
  });
 
}


btn.addEventListener('click',async()=>{
    const name = inputName.value
    const phone = inputPhone.value
    bodyObject.name = name
    bodyObject.phone = phone
    if(name && phone){
    sendData(bodyObject)
    alert(`The name ${name} and phone number ${phone} were added successfuly`)
    inputName.value=''
    inputPhone.value=''
    console.dir(bodyObject)
   
    }
})