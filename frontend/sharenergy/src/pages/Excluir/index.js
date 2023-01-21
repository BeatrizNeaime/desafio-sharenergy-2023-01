import './excluir.css'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

/*--- MUI ---*/
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

/*--- REACT ICONS E TOASTIFY---*/
import { MdCancel, MdOutlineDeleteForever } from "react-icons/md";
import { toast } from 'react-toastify'

/*--- REACT BOOTSTRAP ---*/
import { Form } from 'react-bootstrap'

function Excluir() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');

    const getUser = async () => {
        const a = await fetch(`http://localhost:3001/clientes/${id}`)
        const b = await a.json()
        setNome(b.firstName)
        setSobrenome(b.lastName)
    }

    const deleteUser = () => {
        let url = `http://localhost:3001/clientes/${id}`;
        let options = { method: 'DELETE' };

        try {
            fetch(url, options)
            toast.success('Cliente excluído com sucesso!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate("/clientes")
        } catch (error) {

        }
    }

    useEffect(() => {
        getUser()
    }, []);



    return (
        <Container maxWidth="xl" className='excluir-container' >
            <Form onSubmit={deleteUser} >
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Tem certeza que deseja excluir <b>{nome} {sobrenome}</b> ?
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Esta ação não pode ser desfeita!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="error">
                            <Link to="/clientes" className="btn-link">
                                <MdCancel />
                            </Link>
                        </Button>
                        <Button variant="contained" color="success" type='submit' >
                            <Link className="btn-link">
                                <MdOutlineDeleteForever />
                            </Link>
                        </Button>
                    </CardActions>
                </Card>
            </Form>
        </Container>

    )
}

export default Excluir;