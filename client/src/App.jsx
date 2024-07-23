import { Route, Routes } from "react-router-dom";
import Login from "./component/Form/Login/Login";
import Signup from "./component/Form/Signup/Sigup";
import DesktopLanding from "./component/landing/DesktopLanding";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<DesktopLanding />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
