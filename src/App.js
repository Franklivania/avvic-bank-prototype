import './App.scss';
import { ThemeToggleProvider } from './components/Theme/ThemeToggle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landingpage/Landing';

function App() {
  return (
    <ThemeToggleProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Landing/>} />
          </Routes>
        </Router>
      </div>
    </ThemeToggleProvider>
  );
}

export default App;
