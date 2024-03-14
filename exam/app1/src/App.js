import { Route, Routes } from 'react-router';
import './App.css';
import Converter from './Component/Converter';
import Numberpuzzle from './Component/Numberpuzzle';
import Tictoc from './Component/Tictoc';
import Todo from './Component/Todo';
import Header from './Component/Header';

function App() {
  return (

    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={ <Converter/> } />
        <Route path="todo" element={ <Todo /> } />
        <Route path="tictoc" element={ <Tictoc /> } />
        <Route path="puzzle" element={ <Numberpuzzle/> } />
        <Route path="converter" element={ <Converter/> } />
      </Routes>
      
       
    </div>
  );
}

export default App;
