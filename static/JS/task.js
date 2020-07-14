
const generateTemplate = todo => {
  const html = `
              <li class="list-group-item d-flex justify-content-between align-items-center">
              <span>${todo.title}</span>
              <i class="far fa-trash-alt delete"></i>
          </li>
      ` ;
  list.innerHTML += html; 
};

const taskList = async() => {
  const api = 'http://127.0.0.1:8000/api/task-list/';
  const response = await fetch(api);
  const data = await response.json();
  return data;
} 

const listTodo = function(){
  taskList().then(data => {
      todos = data;
      data.forEach(d => generateTemplate(d));
    });
}

const taskCreate = async(title) => {
  const api = 'http://127.0.0.1:8000/api/task-create/';
  const response = await fetch(api, {
              method: 'post',
              headers: { 
                  'Accept': 'application/json',
                  'Content-Type': 'application/json' 
              },
              body:JSON.stringify({'title' : title})            
              }); 
  
  if (response){
    list.innerHTML = ` `;
    listTodo();  
  }  

}; 


const taskDelete = async(id) => {
  const api = `http://127.0.0.1:8000/api/task-delete/${id}`;
  const response = await fetch(api, {
              method: 'delete'             
              });

  if (response){
    list.innerHTML = ` `;
    listTodo();  
  }  
}; 


