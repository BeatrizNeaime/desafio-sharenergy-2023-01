import './editar.css'
import * as React from 'react';
import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'

/*--- MUI ---*/
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

/*--- ÍCONES ---*/
import { MdCheckCircle, MdCancel } from "react-icons/md";

const Editar = () => {
    const { id } = useParams()
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [cel, setCel] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [numero, setNumero] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUF] = useState('');


    const getUser = async () => {
        const a = await fetch(`http://localhost:3001/clientes/${id}`)
        const b = await a.json()
        console.log(id, b)

        // setNome(b.firstName)
        // setSobrenome(b.lastName)
        // setEmail(b.email)
        // setCel(b.telefone)
        // setCpf(b.cpf)
        // setRua(b.rua)
        // setNumero(b.numero)
        // setBairro(b.bairro)
        // setCidade(b.cidade)
        // setUF(b.uf)
    }

    useEffect(() => {
        getUser()
    }, []);

    return (
        <Container maxWidth="xl" className="editar-container" >
            <Card sx={{ maxWidth: 600 }}>
                <CardContent className="editar-caixa" >
                    <Typography gutterBottom variant="h5" component="div">
                        Editar Cliente
                    </Typography>
                    <div className="editar-form-container">
                        <TextField id="outlined-basic" variant="outlined" required value={nome} className="editar-input" />
                        <TextField id="outlined-basic" variant="outlined" required value={sobrenome} />
                    </div>
                    <div className="editar-form-container">
                        <TextField id="outlined-basic" variant="outlined" required value={email} className="editar-input" />
                        <TextField id="outlined-basic" variant="outlined" required value={cel} />
                    </div>
                    <div className="editar-form-container">
                        <TextField id="outlined-basic" variant="outlined" required value={rua} className="editar-input-max" />
                    </div>
                    <div className="editar-form-container">
                        <TextField id="outlined-basic" variant="outlined" required value={numero} className="editar-input" />
                        <TextField id="outlined-basic" variant="outlined" required value={bairro} />
                    </div>
                    <div className="editar-form-container">
                        <TextField id="outlined-basic" variant="outlined" required value={cidade} className="editar-input" />
                        <TextField id="outlined-basic" variant="outlined" required value={uf} />
                    </div>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="error">
                        <Link to="/clientes" className="btn-link">
                            <MdCancel />
                        </Link>
                    </Button>
                    <Button variant="contained" color="success" >
                        <Link className="btn-link" >
                            <MdCheckCircle />
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </Container>

    );
}

export default Editar