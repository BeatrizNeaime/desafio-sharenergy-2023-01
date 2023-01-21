import * as React from 'react';
import './style.css'
import Users from '../../Components/Users';

/*--- MUI ---*/
import Container from '@mui/material/Container';

const Usuarios = () => {
  return (
    <Container maxWidth="xl" className='client-cont' >
      <div className='title-div'>
        <h2 id="inicio" >Random Users API</h2>
      </div>
      <Container maxWidth="lg">
        <Users />
      </Container>
    </Container>
  )
}

export default Usuarios