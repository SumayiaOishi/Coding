// let button = document.getElementById('.add-btn');
// let newTask =document.getElementById('.wrapper input');
// let taskCont =document.getElementById('.tasks');
// let error =document.getElementById('error');
// let countValue =document.querySelector('.count-value');
// let task=0;
// const displayCount=(taskCont)=>{
//   countValue.innerHTML=task;
// }
// const addTask=()=>{
//   co
// }


const list=[];

rendertodolist();

function rendertodolist(){
      let result='';


      list.forEach((todo,index)=>{

        const html=`
        <div class="toDo ">
        
        <input type="checkbox" class="checked">
        <div class="todo-name">${todo.name}</div>
        <div class="todo-date">${todo.duedate}</div>
        <button class="del js-del"  >Delete</button>

  </div>
   
         `;
        result +=html;
            
      });
      
      document.querySelector('.js-list').innerHTML=result;

      document.querySelectorAll('.js-del').forEach((delBut,index)=>{
        delBut.addEventListener('click',()=>{
          list.splice(index,1);
          rendertodolist();
        });
      });

   

    document.querySelectorAll('.checked').forEach((checking, index) => {
      checking.addEventListener('click', () => {
          // Get the corresponding todo item
          const todoItem = checking.closest('.toDo');

          // Toggle line-through style on the todo name
          const todoName = todoItem.querySelector('.todo-name');
          todoName.style.textDecoration = checking.checked ? 'line-through' : 'none';

          // Toggle line-through style on the date
          const todoDate = todoItem.querySelector('.todo-date');
          todoDate.style.textDecoration = checking.checked ? 'line-through' : 'none';
          
      });
      
  });
  
    
    


}


document.querySelector('.js-add-todo-button').addEventListener('click',()=>{
add();
});


function add(){
 const inEle= document.querySelector('.js-toDo');
 const name= inEle.value;


 const dataInput =document.querySelector('.js-date-input');

 const ne =dataInput.value;
if(name!==" "){
 
  
  
  list.push({
    name:name,  
    duedate:ne,
     
  });
} 
else{
  document.getElementById('k').placeholder="Todo-name";
}


//  console.log(list);
 inEle.value= ' ' ;
 dataInput.value='';

 rendertodolist();

}

/*
const list=[];
document.querySelector('.js-add-todo-button').addEventListener('click', function(){
const name=document.querySelector('.js-toDo').value;
const dueDate=document.querySelector('.js-date-input').value ;
list.push({
  name:name,

  dueDate:dueDate,
});


let result='';
list.forEach((todo,index)=>{

  const html=`
  <input type="checkbox" class="checked">
  <div>${todo.name} </div>
   <div>  ${todo.dueDate}</div>
  
  <button  class="del   js-del">Delete</button> 
   `;
  result +=html;
      
});

document.querySelector('.js-list').innerHTML=result;


document.querySelectorAll('.js-del').forEach((delBut,index)=>{
  delBut.addEventListener('click',()=>{
    list.splice(index,1);
    
  });
});





});*/
 //   document.querySelectorAll('.checked').forEach((checking, index) => {
    //     checking.addEventListener('click', () => {
    //         // Get the corresponding list item
    //         const listItem = checking.parentElement;
    
    //         // Toggle line-through style on the todo name
    //         const todoName = listItem.querySelector('div:nth-of-type(1)');
    //         todoName.style.textDecoration = checking.checked ? 'line-through' : 'none';
    
    //         // Toggle line-through style on the date
    //         const todoDate = listItem.querySelector('div:nth-of-type(2)');
    //         todoDate.style.textDecoration = checking.checked ? 'line-through' : 'none';
    //     });
    // });





