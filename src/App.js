import logo from './logo.svg';
import Panel from './Panel.js'
import './App.css';
import { useState } from 'react';
import Cursor from './Cursor.js'

function App() {
  const [current, setCurrent] = useState(0)
  
  return (
    <div className="App">
      <header className="App-header">
        <Cursor current={current}/>
        <Panel current={current} setCurrent={setCurrent} />
      </header>
    </div>
  );
}

export default App;
