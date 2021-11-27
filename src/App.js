import { useState } from 'react';
//Components
import SearchBar from './components/SearchBar/SearchBar';
import Header from './components/Header/Header';
import Grid from './components/Grid/Grid';


//styles
import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyles';
import { darkTheme, lightTheme } from './Theme';




function App() {
  const [theme , setTheme ] = useState("light");
  const [filter, setFilter] = useState('All');
  const [todoList, setTodolist] = useState([{id: 1, todo: "Complete online Javascript course", active: true, completed: false},
                                            {id:2,todo:"Jog around the park x3", active: true, completed: false},
                                            {id:3,todo:"10 minutes meditation", active: true, completed: false},
                                            {id:4,todo:"Read for 1 hour", active: true, completed: false},
                                            {id:5,todo:"Pick up groceries", active: true, completed: false},
                                            {id:6,todo:"Complete Todo App on Frontend Mentor", active: true, completed: false}]);

 
  
  const themeToggler = () => {
    theme === "light"? setTheme("dark"): setTheme("light");
  }

  const FILTER_MAP = {
    All: () => true,
    Active: todo => !todo.completed,
    Completed: todo => todo.completed,
  };

  const submit = (todo) => {
    setTodolist((prev) => {
      return [...prev,{id: prev.id + 1, todo: todo}]
    })

  }

 const remove = (id) => {
    setTodolist(todoList.filter(todo => todo.id !== id))
 }

 const isActive = (value) => {
    const todos = todoList.map((todo) => todo.id === value.id? {...todo,...value}:todo);
    setTodolist(todos);
  
 }

 const clearCompleted = () => {
   setTodolist(todoList.filter(todo => todo.completed !== true))
 }

  return (
    <div className="App">
    <div className="container">
      <ThemeProvider theme={theme === 'light'? lightTheme: darkTheme}>
          <Header theme={theme} themeToggler={themeToggler}/>
          <SearchBar submit={submit}/>
          <Grid 
            todoList={todoList} 
            onDelete={remove} 
            setTodolist={setTodolist}
            isActive={isActive}
            clearCompleted={clearCompleted}
            FILTER_MAP={FILTER_MAP}
            setFilter={setFilter}
            filter={filter}
            />
          <GlobalStyle />
        </ThemeProvider>
    </div>

       
    </div>
  );
}

export default App;
