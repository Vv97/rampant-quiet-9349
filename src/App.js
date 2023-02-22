import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './Routes/AllRoutes';
import { Login } from './pages/Loginpage/Login';
import { Register } from './pages/RegisterPage/Register';

function App() {
  return (
    <div className="App">
      {/* <AllRoutes />
      <Login /> */}
      <Register />
    </div>
  );
}

export default App;
