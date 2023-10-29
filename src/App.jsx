import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameScreen from './components/GameScreen';
import LoginScreen from './page/LoginScreen';
import { AuthProvider } from './Authentication/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/game" element={<GameScreen />} />
          <Route path="/result" element={<p>End Of the MCQ Game</p>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;