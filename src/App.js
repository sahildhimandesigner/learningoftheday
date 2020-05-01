import React from 'react';
import { Headings } from './components';
import Header from './components/Header/header'

function App() {
  return (
    <div className="App">
     <Header />
     <Headings as='h1'>Hello Team</Headings>
    </div>
  );
}

export default App;
