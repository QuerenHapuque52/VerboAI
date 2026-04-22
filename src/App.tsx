import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Editor from './components/Editor';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}
