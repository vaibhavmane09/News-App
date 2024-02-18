import { BrowserRouter,Routes,Route } from "react-router-dom";
import NewsContent from "./Templates/NewsContent";
import Entertainment from "./Templates/Entertainment";
import Business from "./Templates/Business";
import Govt from "./Templates/Govt";
import Sports from "./Templates/Sports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsContent/>}/>
        <Route path="/Entertainment"  element={<Entertainment/>}/>
        <Route path="/Business"  element={<Business/>}/>
        <Route path="/Govt"  element={<Govt/>}/>
        <Route path="/sports"  element={<Sports/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
