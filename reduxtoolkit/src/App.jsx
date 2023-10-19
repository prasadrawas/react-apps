import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="flex flex-col space-y-5 items-center justify-center h-screen w-screen bg-slate-800 text-white">
      <AddTodo />
      <Todo />
    </div>
  );
}

export default App;
