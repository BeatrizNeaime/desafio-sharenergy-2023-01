import * as React from 'react';
import './style.css'
import Container from '@mui/material/Container';
import Users from '../../Components/Users';


const Usuarios = () => {
  return (
    <Container maxWidth="xl" className='client-cont' >
      <div className='title-div'>
        <h2 id="inicio" >Random Users API</h2>
      </div>
      <Users />
    </Container>
  )
}

export default Usuarios