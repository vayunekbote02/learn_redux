import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div className="flex items-center flex-col">
      <AddTodo />
      <Todos />
    </div>
  );
};

export default App;
