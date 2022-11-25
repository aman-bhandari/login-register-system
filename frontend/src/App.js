import AllUsers from './Component/AllUsers';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 
import LoginDialog from './Component/LoginDialog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContextProvider from './context/ContextProvider';
import { Home } from '@mui/icons-material';
import HomeCom from './Component/HomeCom';

function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginDialog/>} />
        <Route path="/all" element={<HomeCom /> } />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
