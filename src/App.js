import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import { WeatherProvider } from './context/WeatherContext';
function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Header/>
        <Card/>
      </WeatherProvider>
    </div>
  );
}

export default App;
