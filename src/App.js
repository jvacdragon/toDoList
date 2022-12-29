import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Head from "./components/Head/Head";
import Layout from "./components/Layout/LayoutList";

function App() {
  const [toDo, setToDo] = useState([]);
  const [done, setDone] = useState([]);

  const handleToDo = (obj) => {
    setToDo([...toDo, obj]);
  };

  const handleDiscard = (id, isToDo) => {
    if (isToDo) {
      const newArr = toDo.filter((item) => item.id !== id);
      setToDo(newArr);
    } else {
      console.log(done);

      const newArr = done.filter((item) => item.id !== id);
      console.log(newArr);
      setDone(newArr);
    }
  };

  const handleDone = (id) => {
    const taskDone = toDo.find((item) => item.id === id);

    setDone([...done, taskDone]);
    handleDiscard(id, true);

    console.log(done);
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
