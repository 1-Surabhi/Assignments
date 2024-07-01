import { BrowserRouter,Route,Routes} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Add_user from './feature/Website/Pages/Add_user';
import Home from './feature/Website/Pages/Home';


function App() {
  return (
    <div>
       <BrowserRouter>
            <ToastContainer></ToastContainer>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/add_user' element={<Add_user/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;