 let plusScreenshot = document.getElementById ('plusScreenshot')
 let label = document.getElementById ('labelForPlus')
 let formBtn = document.getElementById ('formButton')
 let form = document.querySelector ("form")


 console.log (plusScreenshot , label , formBtn , form)

//  function upload (){
//     console.log ('xyeta')
//  }
 
//  plusScreenshot.onmouseover = console.log ('xyeta')


plusScreenshot.addEventListener ('mouseout', function(){
   if ( plusScreenshot.value != 0){
    label.innerHTML = plusScreenshot.value
   }
   else{
    console.log ('nixya tam net')
   }
});
form.addEventListener ('submit', function(e){
    let isValid = true;
    if (plusScreenshot.value == 0 && !isValid){
        e.preventDefault();
        alert('Naebshuk')
    }
})