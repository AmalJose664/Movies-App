import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/Row-post/RowPost';
import { action, originals } from './urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix originals'/>
      <RowPost url={action} title='Action' isSmall={true} />
    </div>
  );
}

export default App;
