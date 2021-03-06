import { Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import "./index.css"
import Korea from './pages/Korea';

function App() {

  return (
    <div className="App">
      <Sidebar/>
      <section>
        <Routes>
          <Route path="/" element={<Korea/>}/>  
          <Route path="/world" element={<div>world</div>}/>  
        </Routes>
      </section>    
    </div>
  );
}

export default App;
