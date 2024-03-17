let inputBox=document.getElementById('input-box');

let list =document.getElementById('list-container');

let button =document.getElementById('forButton');
button.addEventListener('click',()=>{
   if(inputBox.value===''){
    alert("Write Something!");
   }
   else{
    let li =document.createElement("li")
    li.innerHTML=inputBox.value;
     list.appendChild(li);
     
let delButton = document.createElement('button');
delButton.textContent = 'Delete'; 
delButton.addEventListener('click', function() {
   
    li.remove();
});
delButton.classList.add('delete-button');
li.appendChild(delButton);

   }
   inputBox.value= "";
});

list.addEventListener('click', (e)=>{
  
 if (e.target.tagName=== "LI"){
  e.target.classList.toggle("checked");
 }


});