import { setItem } from "../localFunctions";
import { useRef } from "react";

const Form = ({handleToDo}) => {
  const task = useRef();
  const description = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskName = task.current.value;
    const taskDescription = description.current.value
      ? description.current.value
      : null;
    const id = Math.random();

    const taskObj = { taskName, taskDescription, id };

    if (taskName.trim() === "") return;

    setItem(taskObj);

    handleToDo();

    task.current.value = "";
    description.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="text-center my-20">
      <div className="grid grid-cols-1 gap-10  md:grid-cols-2 mx-6 my-12">
        <section className="inline-block">
          <label>Task Name: </label>
          <input type="text" ref={task}></input>
        </section>
        <section>
          <label>Task Description (Optional): </label>
          <input type="text" ref={description}></input>
        </section>
      </div>

      <button className="py-1 rounded-md bg-green-400/80">Add Task</button>
    </form>
  );
};

export default Form;
