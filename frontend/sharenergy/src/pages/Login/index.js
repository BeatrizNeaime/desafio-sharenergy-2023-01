import './login.css'
import { useState } from 'react'

/*--- MUI ---*/
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Alert from '@mui/material/Alert';

/*--- REACT BOOTSTRAP ---*/
import { Form } from 'react-bootstrap'

const Login = () => {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [logged, setLogged] = useState(true);

    const handleLoggedOn = () => {
        setLogged(true)
    }

    const handleLoggedOff = () => {
        setLogged(false)
    }

    const verificaLogged = () => {
        logged === false ? handleLoggedOn() : handleLoggedOff()
    }

    const login = () => {
        console.log(usuario, senha, logged)
    }

        // <Alert severity="error" className="login-alerta">This is an error alert — check it out!</Alert>

    return (
        <Container maxWidth="xl" className='login-container'>
            <Container maxWidth="md" className="login-detalhe">
                <Card className="login-card">
                    <Form onSubmit={login}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Login
                            </Typography>
                                                        
                            <Typography variant="body2" color="text.secondary">
                                <TextField id="outlined-basic" label="usuário" variant="outlined" className="login-input" required onChange={(e) => { setUsuario(e.target.value) }} value={usuario} />
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className="login-tipografia">
                                <TextField id="outlined-basic" label="senha" variant="outlined" className="login-input" required onChange={(e) => { setSenha(e.target.value) }} value={senha} type="password" />
                            </Typography>

                        </CardContent>
                        <div className="login-switch">
                            <FormGroup>
                                <FormControlLabel control={<Switch defaultChecked />} label="Mantenha-me conectado" value={logged} onChange={verificaLogged} />
                            </FormGroup>
                        </div>
                        <CardActions className="login-switch">
                            <Button variant="contained" color="info" onClick={login} >
                                login
                            </Button>
                        </CardActions>
                    </Form>
                </Card>
            </Container>
        </Container >
    )
}

export default Login