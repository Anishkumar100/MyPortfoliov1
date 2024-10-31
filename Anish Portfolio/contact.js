var container=document.querySelectorAll(".container")
var reveal=document.querySelectorAll(".reveal")
var example2=document.querySelectorAll(".example-2")
console.log(example2,reveal,container)
isVisible=true
function revealContact()
{
    
    if (isVisible===true && example2[0].style.display!=="flex")
    {
    var magnify=document.createElement("p")
    magnify.textContent="You Can Access My Social Media Through These Icons Down Below"
    
    container[0].appendChild(magnify)
    isVisible=false
    example2[0].style.display="flex"
    setTimeout((x)=>
    {
        magnify.classList.add("magnify")
    },100)
    }
    else
    {
        alert("You already Know How To Contact Me")
    }

    
}