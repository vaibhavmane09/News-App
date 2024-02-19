import { BrowserRouter,Routes,Route } from "react-router-dom";
import NewsContent from "./Templates/NewsContent";
import Entertainment from "./Templates/Entertainment";
import Business from "./Templates/Business";
import Govt from "./Templates/Sci&tech";
import Sports from "./Templates/Sports";
import Error from "./Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsContent/>}/>
        <Route path="/Entertainment"  element={<Entertainment/>}/>
        <Route path="/business"  element={<Business/>}/>
        <Route path="/Sci&tech"  element={<Govt/>}/>
        <Route path="/Sports" element={<Sports/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
