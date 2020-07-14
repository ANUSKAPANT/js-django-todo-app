const list = document.querySelector('.todos');
const formAdd = document.querySelector('.add');
const search = document.querySelector('.search input');
var todos;
 

// list todo
listTodo();


//delete todo

list.addEventListener('click', e => {
  if(e.target.classList.contains('delete')){
    const title = e.target.parentElement.textContent.trim();
    
    const key = todos.find(todo => {
      if(todo.title === title) {        
        return todo;
      }
    });

    taskDelete(key.id);
  }
});


// add new todo

formAdd.addEventListener('submit', e => {
    e.preventDefault();
    const todo = formAdd.add.value.trim();
    if(todo.length) {
        taskCreate(todo);
        formAdd.reset();
    }
});

// filter todos

const filterTodos = (term => {
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => {
            todo.classList.add('filtered');
        });

        Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => {
            todo.classList.remove('filtered');
        });
});
 

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);

});