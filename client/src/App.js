import { NextUIProvider } from '@nextui-org/react';
import './App.css';
import Vote from './pages/Vote';
import Votev2 from './pages/Votev2';

function App() {
  return (
    <NextUIProvider>
      {/* <Vote/> */}
      <Votev2/>
    </NextUIProvider>
    
  );
}

export default App;
