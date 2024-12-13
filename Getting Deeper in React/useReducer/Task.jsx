import React, {useReducer} from "react"

const initialState = {
  tasks: [],
  taskInput: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TASK_INPUT":
      return { ...state, taskInput: action.payload };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, state.taskInput ],
        taskInput: "",
      };
  default:
    return state;
  }
};


const Task = () => {
  const [state,dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    dispatch({ type: "SET_TASK_INPUT", payload: e.target.value });
  };

  const createTask = () => {
    if (state.taskInput.trim() === "") return;
    dispatch({ type: "ADD_TASK" });
  };

  const TaskList = ({ task }) => {
    return <h1>{task}</h1>;
  };

  return (
    <div>
      <input 
        placeholder="Task name"
        id="taskName"
        value={state.taskInput}
        onChange={handleInputChange}/>
      <button onClick={createTask}>Create</button>
      {state.tasks.map((item, index) => (
        <TaskList key={index} task={item} />
      ))}
    </div>
  );
};

export default Task