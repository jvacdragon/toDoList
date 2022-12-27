import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import Head from './components/Head/Head';
import Layout from './components/Layout/LayoutList';

function App() {
  return (
    <React.Fragment>
      <Head />
      
      <Form />

      <main className='md:grid md:grid-cols-2 text-center'>
      <Layout title = "To-do" next="Done"/>
      <Layout title = "Done"/>
      </main>
    </React.Fragment>
  );
}

export default App;
