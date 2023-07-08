const uppercaseset="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercaseset="abcdefghijklmnopqrstuvwxyz"
const numberset="0123456789"
const specialset= "+-*/@!#$%^&?><:\,.()_{}"
const genbtn =document.getElementById("genbtn")
const uppercase= document.getElementById("uppercase")
const lowercase= document.getElementById("lowercase")
const containssymbols= document.getElementById("containsymbol")
const containsnumber= document.getElementById("containnumber")
const passwordbox = document.getElementById("passlength")
const display = document.getElementById("passbox")
genbtn.addEventListener("click", ()=>{
    generatepassword();
})
function generatepassword(password = ""){
   if( password.length< passwordbox.value && uppercase.checked)
   {
    password += getrandomdata(uppercaseset)
   }
   if(password.length< passwordbox.value && lowercase.checked)
   {
    password += getrandomdata(lowercaseset)
   }
   if( password.length< passwordbox.value && containssymbols.checked)
   {
    password += getrandomdata(specialset)
   }
   if(password.length< passwordbox.value && containsnumber.checked)
   {
    password += getrandomdata(numberset)
   }
   if(password.length< passwordbox.value)
   {
      return generatepassword(password)
   }
   if(password.length==0)
   {
    alert("Please select the checkboxes or enter correct value")
   }
   console.log(password)
   display.innerText= password
}
  function getrandomdata(dataset){
    const idx = Math.floor(Math.random() * dataset.length)
    return dataset[idx];
  }
  generatepassword()