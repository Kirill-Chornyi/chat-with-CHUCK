import './styles/index.scss';
import {Auth} from './pages/'
import {Home} from './pages/'
import React, { useState, useEffect } from 'react';


function App() {
  const [client, setClient] = useState(localStorage.getItem('key'))

  if (client === null) {
  return (
    <div className="App">
      <Auth />
    </div>
  ); }

  else {return(
    <div className="App">
      <Home/>
    </div>
  )}
}

export default App;
