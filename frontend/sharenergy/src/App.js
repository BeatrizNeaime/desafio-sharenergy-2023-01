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

  let isLogged = window.localStorage.getItem("isLogged")

  return (
    <div className="App">
      <Router>
        <BasicExample />
        <Routes>
          <Route path="/login" element={isLogged == null ? <Login/> : <Usuarios/>} />
          <Route path="/clientes" element={isLogged == null ? <Login/> : <Clientes/>} />
          <Route path="/usuarios" element={isLogged == null ? <Login/> : <Usuarios/>} />
          <Route path="/dogs" element={isLogged == null ? <Login/> : <Dogs/>} />
          <Route path="/cats" element={isLogged == null ? <Login/> : <Cats/> } />
          <Route path="/editar-cliente/:id" element={isLogged == null ? <Login/> : <Editar/>} />
          <Route path="/excluir-cliente/:id" element={isLogged == null ? <Login/> : <Excluir/>} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
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
