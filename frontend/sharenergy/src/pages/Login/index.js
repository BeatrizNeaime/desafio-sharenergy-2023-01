import './login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

/*--- REACT BOOTSTRAP ---*/
import { Form } from 'react-bootstrap'

/*--- TOASTIFY ---*/
import { toast } from 'react-toastify'

const Login = () => {

    const keepLogged = window.localStorage.getItem("keepLogged")
    const keepUser = window.localStorage.getItem("user")
    const keepPwd = window.localStorage.getItem("senha")
    
    const [user, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [logged, setLogged] = useState(true);
    const navigate = useNavigate()
 
    const handleLoggedOn = () => {
        setLogged(true)
    }

    const handleLoggedOff = () => {
        setLogged(false)
    }

    const verificaLogged = () => {
        logged === false ? handleLoggedOn() : handleLoggedOff()
    }   

    const login = async () => {
        let url = 'http://localhost:3001/login';
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                withCredentials: 'true',
                cookie: 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2FkZTVmN2ZhM2ViMmI4ZWEwMzAyMCIsImlhdCI6MTY3NDIzOTU4NCwiZXhwIjoxNjc0NDk4Nzg0fQ._AdmvR0N-CPw2bM-67TRwUIgtAtRDDzZ00zL5x5vLvE; '
            },
            body: JSON.stringify({ "user": user, "senha": senha })
        };

        try {
            const a = await fetch(url, options)
            const b = await a.json()
            if (b.status === "ok") {
                navigate('/usuarios')
                window.localStorage.setItem("token", b.data)
                window.localStorage.setItem('isLogged', true)
                window.location.reload()
            } else if (b.error) {
                toast.error(b.error, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }

        } catch (error) {
            toast.error(error, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

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
                                <TextField id="outlined-basic" label="usuário" variant="outlined" className="login-input" required onChange={(e) => { setUsuario(e.target.value) }} value={user} />
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