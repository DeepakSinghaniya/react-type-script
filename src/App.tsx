import { Route, Routes } from 'react-router-dom';
import { Signup } from './pages/signup';
import { Login } from './pages/login';
import { Header } from './Components/Header';
import Products from './pages/products';
import useResponseHook from './hooks/useResponseHook';
import { proAxios } from './store/api';



const App = () => {
  const is401 = useResponseHook(proAxios);
  console.log(is401);
  return (<>
    <Header />
    <Routes>
      <Route path='/signup' element={<Signup />} />
      <Route path='/products' element={<Products />} />
      <Route path='/' element={<Login />} />
    </Routes>
  </>);
}

export default App;
