import {useDispatch, useSelector} from 'react-redux';
import { RootState } from './';
import {inc, dec} from './store/productSlice';



const App = () => {
const dispatch = useDispatch();
const count = useSelector((state: RootState)=> state.products.count);
  return (
    <div>
     <h1>Welcome</h1>
     <h2>{count}</h2>
     <button onClick={()=>dispatch(inc())}>++</button>
     <button onClick={()=>dispatch(dec())}>--</button>
    </div>
  );
}

export default App;
