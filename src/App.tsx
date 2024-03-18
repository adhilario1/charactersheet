import React from 'react';
import logo from './logo.svg';

import './App.css';
import SheetHeader from './components/SheetHeader/SheetHeader';
import BoundingBox from './components/BoundingBox/BoundingBox';

function App() {

  const colorset = {
    backgroundColor: ''
  }
  
  return (
    <div className="App">
      <div className='background' style={colorset} />
      <BoundingBox>
        <SheetHeader />
      </BoundingBox>
      
    </div>
  );
}

export default App;
