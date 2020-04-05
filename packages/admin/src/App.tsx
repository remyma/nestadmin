import React from 'react';
import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import './App.css';

function App() {
  const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
  return (
      <Admin dataProvider={dataProvider} />
  )
}

export default App;
