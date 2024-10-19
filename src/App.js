
import './App.css';
import Todos from './components/Todos'
import Addtodo from './components/AddTodo.js'
function App() {
  return (
    <div className="App">

      <h2>Learn about redux toolkit</h2>
      <Addtodo />
      <Todos />
    </div>
  );
}

export default App;
