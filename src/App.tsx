import { Route, Routes } from 'react-router-dom';
import { Signup } from './pages/signup';
import { Login } from './pages/login';
import { Header } from './Components/Header';



const App = () => {
  return (<>
    <Header />
    <Routes>
      <Route path='/signup' element={<Signup />} />
      <Route path='/' element={<Login />} />
    </Routes>
  </>);
}

export default App;
