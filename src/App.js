/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Head from "./components/Head/Head";
import Layout from "./components/Layout/LayoutList";
import {
  handleDiscardExported,
  getUndoneAll,
  setDoneItem,
} from "./components/localFunctions";

function App() {
  const [toDo, setToDo] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [done, setDone] = useState(
    JSON.parse(localStorage.getItem("done")) || []
  );

  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const tasksDone = JSON.parse(localStorage.getItem("done"));

  if (!tasks || !tasksDone) {
    localStorage.setItem("tasks", JSON.stringify(toDo));
    localStorage.setItem("done", JSON.stringify(done));
  }

  useEffect(() => {
    tasks && setToDo(tasks);
    tasksDone && setDone(tasksDone);
  }, [tasks.length, tasksDone.length]);

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

  const undoneAll = () => {
    getUndoneAll();
    setDone(tasksDone);
    setToDo(tasks);
  };

  return (
    <React.Fragment>
      <Head />

      <Form handleToDo={handleToDo} />

      <main className="md:grid md:grid-cols-2 text-center">
        {toDo.length > 0 ? (
          <Layout
            isToDo={true}
            handleDiscard={handleDiscard}
            handleDone={handleDone}
            done={"Done"}
            title="To-do"
            name={"toDo"}
            duties={toDo}
          />
        ) : (
          toDo.length === 0 && (
            <p className="font-bold text-2xl my-auto">No tasks yet.</p>
          )
        )}

        {done.length > 0 ? (
          <Layout
            isToDo={false}
            handleDiscard={handleDiscard}
            title="Done"
            duties={done}
            undone={true}
            name={"done"}
            setUndoneAll={undoneAll}
          />
        ) : (
          done.length === 0 && (
            <p className="font-bold text-2xl my-12 md:my-auto">
              No tasks done yet.
            </p>
          )
        )}
      </main>
    </React.Fragment>
  );
}

export default App;
