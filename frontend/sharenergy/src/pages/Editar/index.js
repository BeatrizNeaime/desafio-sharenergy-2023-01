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

/*--- REACT BOOTSTRAP ---*/
import { Form } from 'react-bootstrap'

/*--- ÍCONES ---*/
import { MdCheckCircle, MdCancel } from "react-icons/md";

/*--- TOASTIFY ---*/
import { toast } from 'react-toastify'

const Editar = () => {
    const { id } = useParams()
    const navigate = useNavigate()
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

        setNome(b.firstName)
        setSobrenome(b.lastName)
        setEmail(b.email)
        setCel(b.cel)
        setCpf(b.cpf)
        setRua(b.rua)
        setNumero(b.numero)
        setBairro(b.bairro)
        setCidade(b.cidade)
        setUF(b.uf)
    }

    const updateUser = async (e) => {
        e.preventDefault()
        let options = {
            method: 'PATCH',
            body: { nome, sobrenome, email, cel, cpf, rua, numero, cidade, uf }
        };
        try {
            console.log(nome, sobrenome, email, cel, cpf, rua, numero, cidade, uf);
            const a = await fetch(`http://localhost:3001/clientes/${id}`, options)
            const b = await a.json()
            console.log(b)
            console.log(options)
        } catch (error) { 
            toast.error(`${error}`, {
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

    useEffect(() => {
        getUser()
    }, []);

    return (
        <Container maxWidth="xl" className="editar-container" >
            <Card sx={{ maxWidth: 600 }}>
                <Form onSubmit={updateUser} >
                    <CardContent className="editar-caixa" >
                        <Typography gutterBottom variant="h5" component="div">
                            Editar Cliente
                        </Typography>
                        <div className="editar-form-container">
                            <TextField id="outlined-basic" variant="outlined" required value={nome} className="editar-input" onChange={(e) => { setNome(e.target.value) }} />
                            <TextField id="outlined-basic" variant="outlined" required value={sobrenome} onChange={(e) => { setSobrenome(e.target.value) }} />
                        </div>
                        <div className="editar-form-container">
                            <TextField id="outlined-basic" variant="outlined" required value={email} className="editar-input" onChange={(e) => { setEmail(e.target.value) }} />
                            <TextField id="outlined-basic" variant="outlined" required value={cel} onChange={(e) => { setCel(e.target.value) }} />
                        </div>
                        <div className="editar-form-container">
                            <TextField id="outlined-basic" variant="outlined" required value={rua} className="editar-input-max" onChange={(e)=>{setRua(e.target.value)}}/>
                        </div>
                        <div className="editar-form-container">
                            <TextField id="outlined-basic" variant="outlined" required value={numero} className="editar-input" onChange={(e)=>{setNumero(e.target.value)}}/>
                            <TextField id="outlined-basic" variant="outlined" required value={bairro} onChange={(e)=>{setBairro(e.target.value)}}/>
                        </div>
                        <div className="editar-form-container">
                            <TextField id="outlined-basic" variant="outlined" required value={cidade} className="editar-input" onChange={(e)=>{setCidade(e.target.value)}}/>
                            <TextField id="outlined-basic" variant="outlined" required value={uf} onChange={(e)=>{setUF(e.target.value)}}/>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="error">
                            <Link to="/clientes" className="btn-link">
                                <MdCancel />
                            </Link>
                        </Button>
                        <Button variant="contained" color="success" type='submit' >
                            <Link className="btn-link" >
                                <MdCheckCircle />
                            </Link>
                        </Button>
                    </CardActions>
                </Form>
            </Card>
        </Container >

    );
}

export default Editar