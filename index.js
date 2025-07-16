// selecting side navbar
 var sidenav= document.getElementById("sideNav")
 var menuicon=document.getElementById("menuicon")
 

 menuicon.addEventListener("click",function(){
    sidenav.style.right=0
    
 })
 var close=document.getElementById("close-nav")
 close.addEventListener("click",function(){
    sidenav.style.right="-50%"
 })

 var search=document.getElementById("search")
 var products=document.querySelector(".product-container")
 var h1List =products.querySelectorAll("div")
 search.addEventListener("keyup",function()
{
    var enteredValue=event.target.value.toUpperCase()
    for(count=0;count<h1List.length;count++){
        var productName=h1List[count].querySelector("h1").textContent
        if(productName.toUpperCase().indexOf(enteredValue)<0){
            h1List[count].style.display="none"
        }
        else{
            h1List[count].style.display="block"

        }
    }
})

 
