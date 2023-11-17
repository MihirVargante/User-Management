import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import CreateUser from './components/CreateUser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
            <ToastContainer />
    <Routes>
            <Route path='/' element={<Sidebar/>}/>
            <Route path='/create' element={<CreateUser/>}/>
    </Routes>
    </>
  );
}

export default App;
