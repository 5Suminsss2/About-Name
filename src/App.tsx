import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/pages/Add';
import Comment from './components/pages/Comment';
import Feeling from './components/pages/Feeling';
import Main from './components/pages/Main';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/feeling" element={<Feeling />} />
        <Route path="/add" element={<Add />} />
        <Route path="/comment" element={<Comment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
