import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';
import { Route, Routes } from 'react-router-dom';
import UpdatePost from './components/UpdatePost';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={ <Posts />} />
      <Route path="/create" element={ <CreatePost />} />
      <Route path="/edit/:id" element={ <UpdatePost />} />
    </Routes>
  );
}

export default App;
