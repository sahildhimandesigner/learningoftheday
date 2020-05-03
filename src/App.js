import React from 'react';
import { Headings } from './components';
import Header from './components/Header'
import LearningBlocks from './containers/LearningBlocks/LearningBlocks';

function App() {
  return (
    <div className="App">
     <Header />
     <Headings as='h1'>Hello Team</Headings>
     <LearningBlocks/>
    </div>
  );
}

export default App;
