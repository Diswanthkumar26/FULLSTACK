const button =document.getElementById('button');
console.log(button);

button.addEventListener('click',() =>{
    alert('button click');
});

button.addEventListener('mouseover',()=>{
    button.classList.add('buttonHover')
});
button.addEventListener('mouseout',()=>{
    button.classList.remove('buttonHover')
});


// document.addEventListener('keydown',(event)=>{
//      if(event.key ==='Enter'){
//         alert('Enetr key is pressed')
//      }
// });

// document.addEventListener('keypress',(event)=>{
//      if(event.key ==='Enter'){
//         alert('Enetr key is pressed')
//      }
// });


document.addEventListener('keyup',(event)=>{
     if(event.key ==='Enter'){
        alert('Enetr key is pressed')
     }
});

document.addEventListener('keydown',(event)=>{
    if(event.shiftKey){
        alert('shift key pressed');
    }

    if(event.ctrlKey){
        alert('ctrl key pressed');
    }

   if(event.key>='a' && event.key<='z'){
       alert(`Alphabetical key '${event.key}' Pressed`)
   }

   if(event.key >='0' && event.key<='9'){
       alert(`Number key '${event.key}' Pressed`)
   }
});



