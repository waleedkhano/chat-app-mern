import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ChatPage from './pages/Chatpage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' Component={Homepage}/>
      <Route path='/chats' Component={ChatPage}/>
      </Routes>
    </div>
  );
}

export default App;
