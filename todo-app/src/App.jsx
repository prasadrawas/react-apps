import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const onNameChanged = (event) => {
    setTaskName(event.target.value);
  };

  const onDescriptionChanged = (event) => {
    setTaskDescription(event.target.value);
  };

  const saveTask = () => {
    if (taskName !== "" && taskDescription !== "") {
      // Create a new task object
      const newTask = {
        name: taskName,
        description: taskDescription,
      };

      // Update the tasks state with the new task
      setTasks([...tasks, newTask]);

      // Clear the input fields
      setTaskName("");
      setTaskDescription("");
    }
  };

  return (
    <>
      <div>
        <h1>Task</h1>
        <input
          type="text"
          value={taskName}
          onChange={onNameChanged}
          placeholder="Enter task name"
        />
        <input
          type="text"
          value={taskDescription}
          onChange={onDescriptionChanged}
          placeholder="Enter task description"
        />
        <button onClick={saveTask}>Add TODO</button>

        <h2>Recent Tasks: </h2>
        <ul>
          {tasks.map((item, index) => (
            <li key={index}>
              <div >
                <h4>item.name</h4>
                <h6>item.description</h6>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
