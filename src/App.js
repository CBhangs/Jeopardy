import './App.css';
import Mainpage from "./components/Mainpage.js"
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
