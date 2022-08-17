import { Routes, Route} from "react-router-dom";
import "./App.css";
import Bienvenida from "./components/Bienvenida";
import Drawer from "./components/Drawer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/app" element={<Drawer />} />
        
        {/* <Route path="/bienvenida" render={() => {
          return user ? <Navigate to='/' />: <Bienvenida />
        }}
        /> */}
      </Routes>
    </>
  );
}

export default App;
