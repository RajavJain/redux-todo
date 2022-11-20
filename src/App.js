import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoAction';

function App() {

  const [todo, setTodo] = useState();
  const dispatch = useDispatch();


  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  }


  // const btn = document.getElementById('btn');

  // btn.addEventListener('click', function handleClick(event) {
  //   event.preventDefault();
  //   const clrTodo = document.getElementById('todo');
  //   clrTodo.value = '';
  // });



  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Todo's List
        </h2>
        <form onSubmit={handleSubmit}>
          <input id='todo' placeholder='Enter your task here'
            style={{
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: "none",
              fontSize: 20,
            }}
            onChange={(e) => setTodo(e.target.value)}
          />

          <button id='btn' type='submit'
            style={{
              padding: 10,
              borderRadius: 10,
              fontSize: 15,
              marginLeft: 25,
              color: 'black',
              backgroundColor: 'green',
              borderColor: '1px solid white'
            }}
          // onSubmit={()=>setTodo("")}
          >Add</button>
        </form>
        <ul className='allTodos'>
          {
            todos && todos.map((t) => (
              <li key={t.id} className='singleTodo'>
                <span className='todoText'>{t.todo}</span>
                <button style={{
                  padding: 10,
                  borderRadius: 10,
                  fontSize: 14,
                  marginLeft: 10,
                  color: 'black',
                  backgroundColor: 'orange',
                  borderColor: '1px solid white'
                }} onClick={() => removeHandler(t)}
                >Done
                </button>
              </li>
            ))
          }

        </ul>

      </header>
    </div>
  );
}

export default App;
