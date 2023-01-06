import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Head from "./components/Head/Head";
import Layout from "./components/Layout/LayoutList";
import { setDoneItem } from "./components/localFunctions";
import { handleDiscardExported } from "./components/localFunctions";

function App() {
  const [toDo, setToDo] = useState([]);
  const [done, setDone] = useState([]);

  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const tasksDone = JSON.parse(localStorage.getItem("done"));

  
  useEffect(() => {
    !tasks && localStorage.setItem("tasks", JSON.stringify(toDo));
    !tasksDone && localStorage.setItem("done", JSON.stringify(done));
    
    tasks && setToDo(tasks);
    tasksDone && setDone(tasksDone);
  }, [toDo.length, done.length]);

  const handleToDo = () => {
    setToDo(tasks);
  };

  const handleDiscard = (id, isToDo) => {
    if (isToDo) {
      handleDiscardExported(id, true);

      setToDo(tasks);
    } else {
      handleDiscardExported(id, false);

      setDone(tasksDone);
    }
  };

  const handleDone = (id) => {
    setDoneItem(id);
    setDone(tasksDone);
  };

  return (
    <React.Fragment>
      <Head />

      <Form handleToDo={handleToDo} />

      <main className="md:grid md:grid-cols-2 text-center">
        {toDo.length > 0 && (
          <Layout
            isToDo={true}
            handleDiscard={handleDiscard}
            handleDone={handleDone}
            done={"Done"}
            title="To-do"
            name={"toDo"}
            duties={toDo}
          />
        )}
        {toDo.length === 0 && (
          <p className="font-bold text-2xl my-auto">No tasks yet.</p>
        )}

        {done.length > 0 && (
          <Layout
            isToDo={false}
            handleDiscard={handleDiscard}
            title="Done"
            duties={done}
            done={""}
            name={"done"}
          />
        )}
        {done.length === 0 && (
          <p className="font-bold text-2xl my-12 md:my-auto">
            No tasks done yet.
          </p>
        )}
      </main>
    </React.Fragment>
  );
}

export default App;
