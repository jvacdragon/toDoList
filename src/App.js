import React, { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Head from './components/Head/Head';
import Layout from './components/Layout/LayoutList';

function App() {
  const [toDo, setToDo] = useState([])
  const [done, setDone] = useState([])

  const handleToDo = (obj) => {
    setToDo([...toDo, obj])
  }

  const handleDiscard = (id) => {
    const item = toDo.find(item => item.id === id)

    console.log(item);
  }

  return (
    <React.Fragment>
      <Head />
      
      <Form handleToDo = {handleToDo}/>

      <main className='md:grid md:grid-cols-2 text-center'>

      {toDo.length > 0 && <Layout handleDiscard={handleDiscard} title = "To-do" next="Done" name={"toDo"} duties = {toDo}/>}
      {toDo.length === 0 && <p className='font-bold text-2xl my-auto'>No tasks yet.</p>}
      
      {done.length > 0 && <Layout title = "Done" done={done} name={"done"}/>}
      {done.length === 0 && <p className='font-bold text-2xl my-auto'>No tasks done yet.</p>}
      </main>
    </React.Fragment>
  );
}

export default App;
