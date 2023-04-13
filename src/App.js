import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';

function App() {

   const {onToggleButton, tg} = useTelegram();


   useEffect(() => {
      tg.ready();
   }, [])
   
  return (
    <div className="app">
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
