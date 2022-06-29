import {useDispatch, useSelector} from 'react-redux';
import { AppDispatch, RootState } from './store/storeTypes';
import {inc, dec, getUsers} from './store/productSlice';



const App = () => {

const dispatch = useDispatch<AppDispatch>();
const count = useSelector((state: RootState)=> state.products.count);

  return (
    <div>
     <h1>Welcome</h1>
     <h2>{count}</h2>
     <button onClick={()=>dispatch(inc())}>++</button>
     <button onClick={()=>dispatch(dec())}>--</button>
     <button onClick={()=>dispatch(getUsers())}>Get Users</button>
    </div>
  );
}

export default App;
