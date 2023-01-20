/*--- ESTILOS/OUTROS ---*/
import './usuarios.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

/*--- REACT BOOTSTRAP ---*/
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

/*--- REACT ICONS ---*/
import { MdBorderColor, MdOutlineDeleteForever, MdKeyboardArrowDown, MdAdd } from "react-icons/md";

/*--- MÁSCARAS E TOAST ---*/
import { toast } from 'react-toastify'
import { maskcpf } from './mask-cpf'
import { maskcel } from './mascara-cel';

/*--- MUI ---*/
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const Clientes = () => {
    const [show, setShow] = useState(false);
    const [clients, setClient] = useState([]);
    const [nome, setNome] = useState(' ');
    const [sobrenome, setSobrenome] = useState(' ');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [cel, setCel] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [numero, setNumero] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUF] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFirstName = (e) => {
        const { value } = e.target
        setNome(value)
    }

    const handleSecondName = (e) => {
        const { value } = e.target
        setSobrenome(value)
    }

    const handleEmail = async (e) => {
        const { value } = e.target
        setEmail(value)
    }

    const handleTel = (e) => {
        const { value } = e.target
        setCel(maskcel(value))
    }

    const handleCPF = (e) => {
        const { value } = e.target
        setCpf(maskcpf(value))
    }

    const handleRua = (e) => {
        const { value } = e.target
        setRua(value)
    }

    const handleBairro = (e) => {
        const { value } = e.target
        setBairro(value)
    }

    const handleN = (e) => {
        const { value } = e.target
        setNumero(value)
    }

    const handleCidade = (e) => {
        const { value } = e.target
        setCidade(value)
    }

    const handleUF = (e) => {
        const { value } = e.target
        setUF(value)
    }

    const sendForm = async (e) => {
        e.preventDefault()
        let url = 'http://localhost:3001/clientes';

        let options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "firstName": nome, "lastName": sobrenome, "email": email, "cel": cel, "cpf": cpf, "rua": rua, "numero": numero, "bairro": bairro, "cidade": cidade, "uf": uf })
        };

        try {
            await fetch(url, options)
            handleClose()
            toast.success('Cliente adicionado com sucesso!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            window.location.reload()
        } catch (error) {
            toast.error(`${error}`, {
                position: "top-right",
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

    const getUsers = () => {
        fetch('http://localhost:3001/clientes')
            .then(res => res.json())
            .then(res => {
                setClient(res)
            })
    }

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <Container maxWidth="xl">
            <div className='title-div'>
                <h2>Clientes</h2>
            </div>
            <div className='button-div'>
                <Button variant="primary" onClick={handleShow}>
                    <MdAdd /> ADICIONAR CLIENTE
                </Button>
            </div>
            <Container className="clients-container" >
                {
                    clients.map(client => (
                        <Card sx={{ maxWidth: 345 }} className="client-card" key={client._id}>
                            <CardContent className="testee">
                                <Typography gutterBottom variant="h5" component="div">
                                    {client.firstName} {client.lastName}
                                </Typography>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<MdKeyboardArrowDown />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Informações</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <p>celular: {client.cel}</p>
                                            <p>e-mail: {client.email}</p>
                                            <p>CPF: {client.cpf}</p>
                                            <p>rua: {client.rua}</p>
                                            <p>número: {client.numero}</p>
                                            <p>bairro: {client.bairro}</p>
                                            <p>cidade: {client.cidade}</p>
                                            <p>UF: {client.uf}</p>
                                            <p>id: {client._id}</p>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={console.log(client._id)}>
                                    <Link className='btn-link' to={`/editar-cliente/${client._id}`}>
                                        <MdBorderColor /> Editar
                                    </Link>
                                </Button>
                                <Button size="small" >
                                    <MdOutlineDeleteForever /> Excluir
                                </Button>
                            </CardActions>
                        </Card>
                    ))
                }
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Adicionar Usuário</Modal.Title>
                </Modal.Header>
                <Form onSubmit={sendForm} >
                    <Modal.Body>
                        <TextField id="outlined-basic" label="Primeiro Nome" variant="outlined" className='cadastro-input' required onBlur={handleFirstName} />
                        <TextField id="outlined-basic" label="Segundo Nome" variant="outlined" className='cadastro-input' required onBlur={handleSecondName} />
                        <TextField id="outlined-basic" label="e-mail" variant="outlined" type="email" className='cadastro-input' required onBlur={handleEmail} />
                        <TextField id="outlined-basic" label="telefone" variant="outlined" type="text" className='cadastro-input' required onBlur={handleTel} />
                        <TextField id="outlined-basic" label="CPF" variant="outlined" type="text" className='cadastro-input' required onChange={handleCPF} />
                        <TextField id="outlined-basic" label="Rua" variant="outlined" type="text" className='cadastro-input' required onChange={handleRua} />
                        <TextField id="outlined-basic" label="Número" variant="outlined" type="text" className='cadastro-input' required onChange={handleN} />
                        <TextField id="outlined-basic" label="Bairro" variant="outlined" type="text" className='cadastro-input' required onChange={handleBairro} />
                        <TextField id="outlined-basic" label="Cidade" variant="outlined" type="text" className='cadastro-input' required onChange={handleCidade} />
                        <TextField id="outlined-basic" label="UF" variant="outlined" type="text" className='cadastro-input' required onChange={handleUF} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="primary" onClick={sendForm}>
                            Adicionar
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </Container >

    )
}

export default Clientes