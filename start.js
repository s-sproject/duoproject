var strawHats=false
var shanksCrew = false  
var choosecrew=$(".crew img")
console.log(choosecrew)
choosecrew.on("click", function (){
var crew=$(this)[0]
console.log(crew)
if(crew.src==="https://i.pinimg.com/originals/c4/c0/6f/c4c06ffe199d64e8a9704ddcb1ff75b8.png"){
    $(this).css({"border":"solid","border-color":"lightblue","border-width":"4px"})
    shanksCrew=true
    console.log(shanksCrew)
}
if(crew.src==="https://seeklogo.com/images/M/mugiwara-logo-303FD55C54-seeklogo.com.png"){
    $(this).css({"border":"solid","border-color":"lightblue","border-width":"4px"})
    strawHats=true
    console.log(strawHats)
}
})
