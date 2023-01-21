import './users-style.css'
import { useState, useEffect } from 'react'
import { useNavigate} from 'react-router-dom'

/*--- MUI ---*/
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';

/*--- REACT BOOTSTRAP ---*/
import Container from 'react-bootstrap/Container';
import { Form } from 'react-bootstrap'

/*--- REACT ICONS ---*/
import { MdSearch } from "react-icons/md";

/*--- TOSTIFY ---*/
import { toast } from 'react-toastify'

const itens = 8

const Users = () => {
    const [users, setUsers] = useState([]);
    const [busca, setBusca] = useState('');
    const [show, setShow] = useState([]);
    const [pagin, setPagin] = useState({
        from: 0,
        to: itens
    });

    useEffect(() => {
        paginacao()
    }, [pagin.from, pagin.to]);

    const paginacao = () => {
        getRandomUsers()
        setShow(users.slice(pagin.from, pagin.to))
        setUsers(show)
    }

    const search = (e) => {
        e.preventDefault()
        const buscaUser = users.filter(users =>
            users.name['first'].startsWith(busca) ||
            users.name['last'].startsWith(busca) ||
            users['email'].startsWith(busca)
        )

        if (buscaUser.length > 0 && busca) {
            setUsers(buscaUser)
        } else {
            if (!busca) {
                getRandomUsers()
            } else {
                toast.warn('Não existem usuários com este item', {
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

    }

    const handlePage = (e, p) => {
        const de = (p - 1) * itens
        const pra = ((p - 1) * itens) + itens
        setPagin({ ...pagin, from: de, to: pra })
    }

    const getRandomUsers = () => {
        fetch("https://randomuser.me/api/?nat=br&seed=caldense&results=80")
            .then(res => res.json())
            .then(res => {
                setUsers(res.results)
            })
    }



    return (
        <div className='users-box' >
            <Form onSubmit={search} className="usuarios-form" >
                <div className="users-search">
                    <TextField
                        id="outlined-password-input"
                        label="Busca"
                        type="text"
                        className='users-input'
                        onChange={(e) => { setBusca(e.target.value) }}
                        required
                    />
                    <Button variant="outlined" color="info" type="submit">
                        <MdSearch />
                    </Button>
                </div>
            </Form>
            <Container className='users-container' >
                {show.map(s => (
                    <Card sx={{ maxWidth: 345 }} className="users-card" key={s.login.sha1} >
                        <CardMedia
                            sx={{ height: 240 }}
                            image={s.picture.large}
                            title={s.name.first}
                            required
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <p>{s.name?.first} {s.name.last} </p>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <p>idade: {s.dob?.age} </p>
                                <p>username: {s.login?.username} </p>
                                <p>e-mail: {s.email}</p>
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Container>
            <div className="paginacao">
                <Pagination count={Math.ceil(users.length / itens)} color="primary" onChange={handlePage} />
            </div>
        </div>
    )
}


export default Users