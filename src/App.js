import { useEffect } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';

function App() {

   useEffect(() => {
      tg.ready();
   }, [])
   
  return (
    <div className="app">
      <Header/>
    </div>
  );
}

export default App;
