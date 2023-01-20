import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BasicExample from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dogs from './pages/Dogs';
import Cats from './pages/Cats';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Usuarios from './pages/Usuarios'
import Clientes from './pages/Clientes'
import Editar from './pages/Editar'
import Excluir from './pages/Excluir'
import Login from './pages/Login';

function App() {

  return (
    <div className="App">
      <Router>
        <BasicExample />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/editar-cliente/:id" element={<Editar />} />
          <Route path="/excluir-cliente/:id" element={<Excluir />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
