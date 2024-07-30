import {Dashboard} from './pages/DeshBoard'
import { Submition } from './pages/Submition';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Submition" element={<Submition/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App