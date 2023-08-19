import React from 'react';
import Header from './components/head/header';
import Form from './components/form/form';
import Section_Card from './components/section/section_card';

function App() {
  return (
    <React.StrictMode>
        <Header/>
        <Form/>
        <Section_Card/>
    </React.StrictMode>
  )
}

export default App